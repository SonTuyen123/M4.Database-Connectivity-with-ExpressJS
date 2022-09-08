const mysql = require('mysql')
class DBConnect {
    connect() {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'dbtest',
            password: '123456'
        })
    }
}

module.exports = DBConnect;