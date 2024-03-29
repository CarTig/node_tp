const mariadb = require('mariadb')
require('dotenv').config()

const pool = mariadb.createPool({
    host: process.env.DBHOST,
    database: process.env.DBDATABASE,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    port:3307
})

module.exports = pool