const mysql = require("mysql");

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'maquiladora_ugc',
    user: 'root',
    password: ''
});

conexion.connect((err)=>{
    if(err){
        console.log("El error de conexion es: "+err);
        return;
    }else{
        console.log("Base de datos conectada");
    }
})

module.exports = conexion;