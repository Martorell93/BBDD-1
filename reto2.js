//Reto 2

//Conexión con mySQL
let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Jaime687460307.",
        database: "reto2"
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

//Incluir 5 entradas por tabla
//Tabla teachers
// let sql_1 = "INSERT INTO teachers (first_name, last_name) VALUES ('Juan', 'Ruiz')";
// let sql_2 = "INSERT INTO teachers (first_name, last_name) VALUES ('Maria', 'Benth')";
// let sql_3 = "INSERT INTO teachers (first_name, last_name) VALUES ('Alejandro', 'Torlo')";
// let sql_4 = "INSERT INTO teachers (first_name, last_name) VALUES ('Ana', 'Seco')";
// let sql_5 = "INSERT INTO teachers (first_name, last_name) VALUES ('Javier', 'Gorgo')";

// connection.query(sql_1, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

// connection.query(sql_2, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

// connection.query(sql_3, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

// connection.query(sql_4, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

// connection.query(sql_5, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

//Tabla 
// let sql_1 = "INSERT INTO subjetcs (title) VALUES ('Música')";
// let sql_2 = "INSERT INTO subjetcs (title) VALUES ('Psicología')";
// let sql_3 = "INSERT INTO subjetcs (title) VALUES ('Gym')";
// let sql_4 = "INSERT INTO subjetcs (title) VALUES ('Plástica')";
// let sql_5 = "INSERT INTO subjetcs (title) VALUES ('Silencio')";

// connection.query(sql_1, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

// connection.query(sql_2, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

// connection.query(sql_3, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

// connection.query(sql_4, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

// connection.query(sql_5, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

//Setear todas las notas de los alumnos a 0
// let sql = "UPDATE marks SET mark = 0";
// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

//Obtener nombre y primer apellido de todos los estudiantes
// let sql = "SELECT first_name, last_name FROM students";
// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

//Obtener todos los datos de todos los profesores
// let sql = "SELECT teacher_id, first_name, last_name FROM teachers";
// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

//Eliminar las notas cuya fecha tenga más de 10 años
// let sql = "DELETE FROM marks WHERE date < '2011-08-09'";
// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

//Actualizar los datos de las notas a 5 por debajo de 5
let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";
connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Dato actualizado");
        console.log(result);
    }
});