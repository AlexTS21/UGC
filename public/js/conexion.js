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

const usuarios = "SELECT * FROM usuarios";
conexion.query(usuarios, function(error, list){
    if(error){
        throw error;
    }else{
        console.log(list);
    }
})

conexion.end();