const mysql = require('mysql');

const connection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'abc123',
        database: 'news_portal'
    });
};

module.exports = () => (connection);