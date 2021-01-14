"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
const dbConfig = require('./db.config');
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
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield promise_1.createPool({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            database: dbConfig.DB,
            connectionLimit: 10
        });
        return connection;
    });
}
exports.connect = connect;
