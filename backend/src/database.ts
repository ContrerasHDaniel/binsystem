import { createPool } from 'mysql2/promise'
const dbConfig =  require('./db.config')

// const connection = mysql.createConnection({
//     host: dbConfig.HOST,
//     user: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB
// })

// connection.connect(error => {
//     if (error) throw error;
//     console.log("Conectado a la BD");
// })

// module.exports = connection

export async function connect() {
    const connection = await createPool({
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB,
        connectionLimit: 10
    })

    return connection
}