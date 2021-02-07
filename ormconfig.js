module.exports = {
   "type": "postgres",
   "host": "db",
   "port": process.env.DB_PORT,
   "username": process.env.POSTGRES_USER,
   "password": process.env.POSTGRES_PASSWORD,
   "database": process.env.POSTGRES_DB,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/Models/*.ts"
   ],
   "migrations": [
      "src/Database/migrations/**/*.ts"
   ],
   "subscribers": [
      "src/Listeners/**/*.ts"
   ]
}