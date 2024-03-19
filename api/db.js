import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Juliae090320132023",
    database: "crud"
})

db.connect((error) => {
    if (error) console.log(error.message)
    else console.log("Conexão com o banco de dados!!!")
})