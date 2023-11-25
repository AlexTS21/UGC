// Importamos la libreria express
const express = require("express"); 

// Objetos para llamar los metodos de express
const app = express();

//configurar el puerto usado por el servidor local
app.listen(5000, function(){
    console.log("El servidor es: http://localhost:3000");
});