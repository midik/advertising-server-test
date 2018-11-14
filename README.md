### N.Rich advertising server (test task) :: Backend

#### How to install
* clone this repo;

##### Starting backend
* run `yarn` or `npm i`
* check out `.env` file for database connection settings
* run `npm start` to start the backend. Don't close the shell ;)

##### Starting frontend
* cd to `ui` folder
* run `yarn` or `npm i`
* check out `.env` file for backend connection settings
* if you get any issues with node-sass bindings, get the correct lib for your platform from https://github.com/sass/node-sass/releases  
* run `npm start` to start the frontend
* keep calm while it's being compiled ;)

#### Project structure
* `controllers` - app controllers ;) 
* `routes` - routers there 
* `models` - models for `sequelize`
* `db` - db interface
* `lib` - app level logic
* `services` - third-party services stuff 
* `ui` - frontend sources


#### Configuration

##### .env file:
There are environment settings which aren't part of the codebase. Example:
```
NRICH_API_PORT=3001
NRICH_DB_HOST=localhost
NRICH_DB_DATABASE=nrich
NRICH_DB_USER=nrich
NRICH_DB_PASS=nrich
NRICH_DB_TIMEOUT=5000
NRICH_DB_DEBUG=true
```
