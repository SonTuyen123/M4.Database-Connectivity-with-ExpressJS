const DBConnect = require("./DBConnect");

class Model {
    conn;

    constructor() {
        let db = new DBConnect();
        this.conn = db.connect();
    }

    querySQL(sql) {
        return new Promise((resolve, reject) => {
            this.conn.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    }
}

module.exports = Model;