//Retos 1
//Conexión con mySQL
let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Jaime687460307.",
        database: "codenotch"
    }
);

connection.connect(function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Conexión correcta: ");
    }
});

//Eliminar una columna de una tabla
// let sql = "ALTER TABLE alumnos DROP COLUMN borrarCol";
// connection.query(sql, function (err, result) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("Columna eliminada");
//         console.log(result);
//     }
// });

//Añadir una columna a una tabla
// let sql1 = "ALTER TABLE alumnos ADD COLUMN holaP VARCHAR(45) NULL AFTER edad";
// connection.query(sql1, function (err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Columna añadida");
//         console.log(result);
//     }
// });

//Eliminar una tabla completa
// let sql2 = "DROP TABLE profesores";
// connection.query(sql2, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Tabla eliminada");
//         console.log(result);
//     }
// });