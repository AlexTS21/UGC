// Importamos la libreria express::::::::::::::::::::::::::::::::::::::::::::::::::::::
const express = require("express"); 



// Objetos para llamar los metodos de express::::::::::::::::::::::::::::::::::::::::::
const app = express();



// Configuraciones
app.set("view engine", "ejs");

app.get("/", function(req, res){ //cuando yo ingrese al servidor se renderiza una pantalla
    res.render("index"); // la respuesta del servidor, es renderizar la pagina
});

// Middleware:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
app.use(express.static("public")) 






// configurar el puerto usado por el servidor local:::::::::::::::::::::::::::::::::::::
app.listen(5000, function(){
    console.log("El servidor es: http://localhost:5000");
});