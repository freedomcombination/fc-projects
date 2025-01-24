#!/bin/bash

set -e  # Stop on error

# Variables
MONGODB_VERSION="8.0"
ENV_FILE=".env"
OS=$(uname -s)

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if MongoDB is installed
check_mongodb_installed() {
    if command_exists mongod; then
        return 0
    else
        return 1
    fi
}

# Function to install MongoDB on Linux
install_mongodb_linux() {
    echo -e "${YELLOW}Starting MongoDB ${MONGODB_VERSION} installation on Linux...${NC}"
    wget -qO - https://www.mongodb.org/static/pgp/server-${MONGODB_VERSION}.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-server-${MONGODB_VERSION}.gpg
    echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-${MONGODB_VERSION}.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/${MONGODB_VERSION} multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-${MONGODB_VERSION}.list
    sudo apt update
    sudo apt install -y mongodb-org
    sudo systemctl start mongod
    sudo systemctl enable mongod
    echo -e "${GREEN}MongoDB installation logs:${NC}"
    sudo journalctl -u mongod --since "1 minute ago"
    echo -e "${GREEN}MongoDB has been installed and the service has been started on Linux.${NC}"
}

# Function to install MongoDB on macOS
install_mongodb_macos() {
    echo -e "${YELLOW}Starting MongoDB ${MONGODB_VERSION} installation on macOS...${NC}"
    if command_exists brew; then
        brew tap mongodb/brew
        brew install mongodb-community@${MONGODB_VERSION}
        brew services start mongodb-community@${MONGODB_VERSION}
        echo -e "${GREEN}MongoDB has been installed and the service has been started on macOS.${NC}"
    else
        echo -e "${RED}Error: Homebrew is not installed. Please install it from https://brew.sh/ and try again.${NC}"
        exit 1
    fi
}

# Function to check if the database exists
check_database_exists() {
  if mongosh --quiet --eval "db.getSiblingDB('$DB_NAME').getName()" | grep -q "$DB_NAME"; then
    echo -e "${GREEN}Database '$DB_NAME' already exists.${NC}"
    return 0
  else
    echo -e "${YELLOW}Database '$DB_NAME' does not exist.${NC}"
    return 1
  fi
}

# Function to check if the user exists (basic check)
check_user_exists() {
    if mongosh --quiet --eval "db.getSiblingDB('$DB_NAME').getUser('$USER_NAME')" | grep -q "$USER_NAME"; then
        echo -e "${GREEN}User '$USER_NAME' already exists in '$DB_NAME'.${NC}"
        return 0
    else
        echo -e "${YELLOW}User '$USER_NAME' does not exist in '$DB_NAME'.${NC}"
        return 1
    fi
}


# Function to create or update the user (including admin)
create_or_update_user() {
    echo -e "${YELLOW}Creating or updating user '$USER_NAME' in '$DB_NAME'...${NC}"
    mongosh --quiet << EOF
        use admin
        if (db.getUser('admin') == null) {
        db.createUser(
          {
            user: "admin",
            pwd:  "admin",
            roles: [ { role: "root", db: "admin" } ]
          }
        )
        }
        use $DB_NAME
        if (db.getUser('$USER_NAME') == null) {
        db.createUser(
          {
            user: "$USER_NAME",
            pwd:  "$USER_PASSWORD",
            roles: [ { role: "readWrite", db: "$DB_NAME" } ]
          }
        )
        } else {
         db.updateUser(
           "$USER_NAME",
           {
             pwd:  "$USER_PASSWORD"
           }
          )
        }
EOF
    echo -e "${GREEN}User '$USER_NAME' in '$DB_NAME' has been created or updated.${NC}"
}


# Read DATABASE_URI from .env file
if [ -f "$ENV_FILE" ]; then
    source "$ENV_FILE"
    if [ -z "$DATABASE_URI" ]; then
        echo -e "${RED}Error: DATABASE_URI is not defined in '$ENV_FILE'.${NC}"
        echo -e "${YELLOW}Please define DATABASE_URI in '$ENV_FILE' like this:${NC}"
        echo -e "${YELLOW}DATABASE_URI=mongodb://<user>:<password>@<host>:<port>/<database>${NC}"
        exit 1
    fi
else
    echo -e "${RED}Error: '$ENV_FILE' not found.${NC}"
    echo -e "${YELLOW}Please create '$ENV_FILE' and define DATABASE_URI like this:${NC}"
    echo -e "${YELLOW}DATABASE_URI=mongodb://<user>:<password>@<host>:<port>/<database>${NC}"
    exit 1
fi

# Parse DATABASE_URI
if [[ "$DATABASE_URI" =~ ^mongodb:\/\/([^:]+):([^@]+)@([^:]+):([0-9]+)\/([^/]+)$ ]]; then
    USER_NAME="${BASH_REMATCH[1]}"
    USER_PASSWORD="${BASH_REMATCH[2]}"
    HOST="${BASH_REMATCH[3]}"
    PORT="${BASH_REMATCH[4]}"
    DB_NAME="${BASH_REMATCH[5]}"
else
    echo -e "${RED}Error: Invalid DATABASE_URI format.${NC}"
    echo -e "${YELLOW}Please define DATABASE_URI in '$ENV_FILE' like this:${NC}"
    echo -e "${YELLOW}DATABASE_URI=mongodb://<user>:<password>@<host>:<port>/<database>${NC}"
    exit 1
fi

# Check if MongoDB is installed
if check_mongodb_installed; then
  echo -e "${GREEN}MongoDB is already installed.${NC}"
else
    case "$OS" in
        Linux*)
            install_mongodb_linux
            ;;
        Darwin*)
            install_mongodb_macos
            ;;
        *)
            echo -e "${RED}Error: Unsupported operating system: $OS${NC}"
            exit 1
            ;;
    esac
fi

# Check database
if check_database_exists; then
    echo -e "${GREEN}Nothing to do for database.${NC}"
else
    echo "Database not exist so create database"
fi

# Create or update user
create_or_update_user

echo -e "${GREEN}Connection String: mongodb://$USER_NAME:$USER_PASSWORD@$HOST:$PORT/$DB_NAME${NC}"
echo -e "${GREEN}All operations have been completed successfully!${NC}"
