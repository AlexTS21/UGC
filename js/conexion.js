let mysql = require("mysql");
let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'maquiladora_ugc',
    user: 'root',
    password: ''
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Exit connection");
    }
});

conexion.end();