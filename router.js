const express = require("express");
const router = express.Router();


// Pagina principal
router.get("/", function(req, res){ //cuando yo ingrese al servidor se renderiza una pantalla
    res.render("index"); // la respuesta del servidor, es renderizar la pagina
});

// Renderiza el menu de los cortes 
router.get("/Menu_Cortes", function(req, res){
    res.render("Menu_Cortes");
});

router.get("/Menu_Estilos", function(req, res){
    res.render("Menu_Estilos");
});

router.get("/Menu_Hilos", function(req, res){
    res.render("Menu_Hilos");
});


// Pagina de Registro de Hilos
router.get("/Registro_Hilos", function(req, res){ 
    res.render("Registro_Hilos"); // la respuesta del servidor, es renderizar la pagina
});

const crud = require("./controllers/cruds");
router.post('/registro_hilos', crud.registro_hilos);

// Pagina de Registro de Estilos
router.get("/Registro_Estilo", function(req, res){ 
    res.render("Registro_Estilo"); // la respuesta del servidor, es renderizar la pagina
});

// Pagina de Registro de Cortes
router.get("/Registro_Cortes", function(req, res){ 
    res.render("Registro_Cortes"); // la respuesta del servidor, es renderizar la pagina
});


// Pagina de visualizacion de Hilos
router.get("/Visualizar_Hilos", function(req, res){
    res.render("Visualizar_Hilos");
});

module.exports = router;