# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

# *fc_project*

### **Available Scripts**

The following scripts are available to help with data management and setup:

* **Export**: `pnpm export`
	+ Exports the Strapi database to a file named `export.tar.gz` without encrypting the data and excluding files.
* **Seed**: `pnpm seed`
	+ Imports data from the `export.tar.gz` file into the Strapi database, excluding files.
* **DB**: `pnpm db`
	+ Runs the script `scripts/db.sh` to set up the database. This will create and give needed permission to postgres user.
* **Import**: `pnpm import`
	+ Runs the `db` script to set up the database and then runs the `seed` script to import data into the database.
  + Don't forget to set `DATABASE_URL=postgres://username:password@localhost/fc_projects` in your .env file before use `pnpm import`



Note: Make sure to replace `pnpm` with your package manager of choice (e.g. `npm` or `yarn`) if you're not using pnpm.


### **Strapi Admin Credentials**

* **Username:** `dev@fc.com`
* **Password:** `Test?123`

### **Admin User Credentials**


* **Username:** `admin@fc.com`
* **Password:** `Test?123`
