// Importamos la libreria express::::::::::::::::::::::::::::::::::::::::::::::::::::::
const { openDelimiter } = require("ejs");
const express = require("express"); 

// Objetos para llamar los metodos de express::::::::::::::::::::::::::::::::::::::::::
const app = express();

// Conexion con la base de datos:::::::::::::::::::::::::::::::::::::::::::::::::;:::::
const conexion = require("./database/db");

// Configuraciones de las diferentes paginas::::::::::::::::::::::::::::::::::::::::::::::::
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: false})); // Es para analizar los datos que venga de un html



app.use("/", require("./router"));

// Middleware:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
app.use(express.static("public"));

// configurar el puerto usado por el servidor local:::::::::::::::::::::::::::::::::::::
app.listen(5000, function(){
});


