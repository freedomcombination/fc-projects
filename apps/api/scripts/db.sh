#!/bin/bash

# MAKE SURE YOU HAVE DATABASE_URL SET IN .env (format: DATABASE_URL=postgres://user:password@localhost/database_name )

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo "Error: .env file not found."
    exit 1
fi

# Ensure DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "Error: DATABASE_URL is not set."
    exit 1
fi

# Extract components from DATABASE_URL
DB_NAME=$(echo $DATABASE_URL | awk -F'[/:@]' '{print $NF}')
DB_USER=$(echo $DATABASE_URL | awk -F'[/:@]' '{print $(NF-2)}')
DB_PASSWORD=$(echo $DATABASE_URL | awk -F'[/:@]' '{print $(NF-1)}')

# Correct extraction logic
DB_USER=$(echo $DATABASE_URL | awk -F'[:@/]' '{print $4}')
DB_PASSWORD=$(echo $DATABASE_URL | awk -F'[:@/]' '{print $5}')
DB_NAME=$(echo $DATABASE_URL | awk -F'[:@/]' '{print $7}')

# Ensure components are extracted correctly
if [ -z "$DB_NAME" ] || [ -z "$DB_USER" ] || [ -z "$DB_PASSWORD" ]; then
    echo "Error: Failed to extract components from DATABASE_URL."
    exit 1
fi

echo "DB_NAME: $DB_NAME"
echo "DB_USER: $DB_USER"
echo "DB_PASSWORD: $DB_PASSWORD"

# Check if user exists
USER_EXISTS=$(psql -U postgres -tAc "SELECT 1 FROM pg_roles WHERE rolname='$DB_USER'")

# Create user if it doesn't exist
if [ "$USER_EXISTS" != "1" ]; then
    echo "User $DB_USER does not exist. Creating..."
    psql -U postgres -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';"
else
    echo "User $DB_USER already exists."
fi

# Check if database exists
DB_EXISTS=$(psql -U postgres -tAc "SELECT 1 FROM pg_database WHERE datname='$DB_NAME'")

# Create database if it doesn't exist
if [ "$DB_EXISTS" != "1" ]; then
    echo "Database $DB_NAME does not exist. Creating..."
    createdb -U postgres $DB_NAME
else
    echo "Database $DB_NAME already exists."
fi

# Grant privileges to user
echo "Granting privileges to user $DB_USER..."
psql -U postgres -d $DB_NAME -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"
psql -U postgres -d $DB_NAME -c "GRANT ALL ON SCHEMA public TO $DB_USER;"
psql -U postgres -d $DB_NAME -c "GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $DB_USER;"
psql -U postgres -d $DB_NAME -c "GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO $DB_USER;"

echo "Done."
