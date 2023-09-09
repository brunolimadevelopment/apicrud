import mysql from "mysql"


export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});


// localhost
/*export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud",
});*/