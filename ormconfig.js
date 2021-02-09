module.exports = {
   "type": "postgres",
   "host": "db",
   "port": process.env.POSTGRES_PORT,
   "username": process.env.POSTGRES_USER,
   "password": process.env.POSTGRES_PASSWORD,
   "database": process.env.POSTGRES_DB,
   "synchronize": true,
   "logging": false,
   "entities": [
      "dist/Models/*.js"
   ],
   "migrations": [
      "dist/Database/migrations/**/*.js"
   ],
   "subscribers": [
      "dist/Listeners/**/*.js"
   ]
}