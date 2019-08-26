const dbConn = require('../config').dbconnection;


const dbConfig = {
    url: dbConn, //"mongodb+srv://root:root@cluster-60e8l.mongodb.net/test?retryWrites=true&w=majority",
    options: {}
}

module.exports = dbConfig;