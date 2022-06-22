const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_ERROR') {
            console.error('connection error');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('connection error');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('connection error');
        }
    }
    if(connection) connection.release();
    console.log('connection');
    return;
});

pool.query = promisify(pool.query)

module.exports = pool;