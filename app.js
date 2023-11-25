// Importamos la libreria express::::::::::::::::::::::::::::::::::::::::::::::::::::::
const express = require("express"); 
const mysql = require("mysql");


// Objetos para llamar los metodos de express::::::::::::::::::::::::::::::::::::::::::
const app = express();

// Conexion con la base de datos
let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'maquiladora_ugc',
    user: 'root',
    password: ''
});


// Configuraciones
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false})); // Es para analizar los datos que venga de un html

app.get("/", function(req, res){ //cuando yo ingrese al servidor se renderiza una pantalla
    res.render("Registro_Hilos"); // la respuesta del servidor, es renderizar la pagina
});

app.post("/validar", function(req, res){
    const Hilos = req.body;

    let codigo = Hilos.codigo;
    let name = Hilos.name;


    let buscar = "SELECT * FROM hilos WHERE codigo = "+codigo+" ";

    conexion.query(buscar, function(error, row){
        if(error){
            throw error;
        }else{
            if(row.length > 0){
                console.log("EL hilo ya existe");
            }else{
                let registrar = "INSERT INTO hilos (Codigo, Nombre) VALUES ('"+codigo+"', '"+name+"') ";

                conexion.query(registrar, function(error){
                    if(error){
                        throw error;
                    }else{
                        console.log("Datos almacenados correctamente");
                    }
                });
            }
        }
    });    
    res.redirect("/");
});

// Middleware:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
app.use(express.static("public")) 






// configurar el puerto usado por el servidor local:::::::::::::::::::::::::::::::::::::
app.listen(5000, function(){
    console.log("El servidor es: http://localhost:5000");
});