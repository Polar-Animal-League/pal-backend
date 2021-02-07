module.exports = {
   "type": "postgres",
   "host": "db",
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_NAME,
   "synchronize": true,
   "logging": false,
   "entities": [
      "dist/Models/*.js"
   ],
   "migrations": [
      "dist/Database/migrations/**/*.ts"
   ],
   "subscribers": [
      "dist/Listeners/**/*.ts"
   ]
}