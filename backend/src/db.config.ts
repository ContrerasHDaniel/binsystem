import  dotenv from "dotenv";
dotenv.config();

module.exports = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "testuser",
    PASSWORD: process.env.DB_PASSWORD || "123456",
    DB: process.env.DB_NAME || "testdb"
};