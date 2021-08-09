//Conexión con mySQL
let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Jaime687460307.",
        database: "prueba"
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

//Crear tablas desde node
// let sql = "CREATE TABLE direccion (id INT AUTO_INCREMENT PRIMARY KEY, calle VARCHAR(200), numero INT, cuidad VARCHAR(60))";

// connection.query(sql, function (err, result)
// {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("Tabla creada");
//         console.log(result);
//     }
// });

//Borrar tabla
// let sql = "DROP TABLE direccion";
// connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Tabla eliminada");
// })

//Operaciones CRUD (Create, Read, Update, Delete)

//Insert
// let sql2 = "INSERT INTO direccion (calle, numero, cuidad) VALUES ('c/tonto', 3, 'Segovia')";
// connection.query (sql2, function(err, result)
// {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato Insertado");
//         console.log(result);
//     }
// });

//Update
// let sql3 = "UPDATE direccion SET cuidad = 'Cadiz'";
// connection.query(sql3, function (err, result)
// {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

//Delete
// let sql4 = "DELETE FROM direccion";
// connection.query(sql4, function(err, result)
// {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("Datos borrados");
//         console.log(result);
//     }
// });

//Select
// let sql5 = "SELECT cuidad FROM direccion";
// connection.query(sql5, function (err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Selección de datos");
//         console.log(result);
//     }
// });

//Select con condiccionales (WHERE)
// let sql6 = "SELECT calle FROM direccion WHERE cuidad = 'madrid'"
// connection.query(sql6, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Selección de datos con filtro");
//         console.log(result);
//     }
// })