const express = require("express");
const router = express.Router();


const conexion = require("./database/db");
const { render } = require("ejs");

const crud = require("./controllers/crud");

//////////////////////////////////////////////

const dotenv = require('dotenv');
dotenv.config({path: './env/.env'});

const bcryptsjs = require('bcryptjs');

const session = require('express-session');
router.use(session({
    secret: '1234578',
    resave: true,
    saveUninitialized: true
}));

router.post('/register', async (req, res) =>{
    const user = req.body;
    const Nombre = user.name;
    const password = user.password;
    let Contrasena = await bcryptsjs.hash(password, 8);

    conexion.query('INSERT INTO usuarios SET ?', [{Nombre:Nombre, Contrasena:Contrasena}], (error, results) =>{
        if(error){
            throw error;
        }else{/*
            res.redirect('register', {
                alert: true,
                alertTitle: "Registrado",
                alertMessage: "Correctemente registrado",
                alertIcon: 'success',
                showConfirmButton: false,
                timer: 1500,
                ruta: ''
            });*/
            res.redirect('Login');
            console.log('usuario registrado');
        }
    })
});

router.post('/login', async (req, res) =>{
    const user = req.body;
    const name = user.name;
    const password = user.password;
    let Contrasena = await bcryptsjs.hash(password, 8);
    if ( name && password ){
        conexion.query('SELECT * FROM usuarios WHERE Nombre = ?', [name], async (error, results) => {
            if(results.length == 0 || !(await bcryptsjs.compare(password, results[0].Contrasena))){
                console.log("incorrecto");
                res.redirect('Login');
            }else{
                console.log('correcto');
                res.redirect('/');
            }
        });
    }

});
/////////////////////////// PAGINAS - RENDERIZADO /////////////////////////////
// Pagina principal
router.get("/", function(req, res){ //cuando yo ingrese al servidor se renderiza una pantalla
    res.render("index"); // la respuesta del servidor, es renderizar la pagina
});


// Pagina de Registro de Hilos
router.get("/Registro_Hilos", function(req, res){ 
    res.render("Registro_Hilos"); // la respuesta del servidor, es renderizar la pagina
});
router.post('/registro_hilos', crud.registro_hilos);


router.get("/Login", function(req, res){
    res.render("Login");
});

router.get("/Register", function(req, res){
    res.render("Register");
});

// Pagina de Registro de Estilos
router.get("/Registro_Estilo", function(req, res){ 
    res.render("Registro_Estilo"); // la respuesta del servidor, es renderizar la pagina
});
router.post('/registro_estilos', crud.registro_estilos);

// Pagina de Registro de Cortes
router.get("/Registro_Cortes", function(req, res){ 
    res.render("Registro_Cortes"); // la respuesta del servidor, es renderizar la pagina
});
router.post('/registro_cortes', crud.registro_cortes);


// Pagina de visualizacion de Hilos
router.get("/Visualizar_Hilos", (req, res) => {

    conexion.query("SELECT * FROM hilos ", (error, results) => {
        if(error){
            throw error;
        }else{
            res.render("Visualizar_Hilos", {results : results});
        }
    });
    
});

// Ruta para visualizar los cortes
router.get("/Visualizar_cortes", (req, res) => {

    conexion.query("SELECT * FROM cortes ", (error, results) => {
        if(error){
            throw error;
        }else{
            res.render("Visualizar_cortes", {results : results});
        }
    });
    
});

router.get("/Visualizar_estilos", (req, res) => {

    conexion.query("SELECT * FROM estilos ", (error, results) => {
        if(error){
            throw error;
        }else{
            res.render("Visualizar_estilos", {results : results});
        }
    });
    
});

// Ruta para editar los hilos
router.get("/Edicion_Hilos/:Codigo", (req, res) =>{
    const Codigo = req.params.Codigo;
    conexion.query("SELECT * FROM hilos WHERE Codigo = ?", [Codigo], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render("Edicion_Hilos", {hilo: results[0]});
        }
    });
});
router.post('/edicion_hilos', crud.edicion_hilos);

// Ruta para editar los cortes
router.get("/Edicion_cortes/:Folio_interno", (req, res) =>{
    const Folio_interno = req.params.Folio_interno;
    conexion.query("SELECT * FROM cortes WHERE Folio_interno = ?", [Folio_interno], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render("Edicion_cortes", {corte: results[0]});
        }
    });
});
router.post('/edicion_cortes', crud.edicion_cortes);

// Ruta para editar los estilos
router.get("/Edicion_estilos/:Modelo", (req, res) =>{
    const Modelo = req.params.Modelo;
    conexion.query("SELECT * FROM estilos WHERE Modelo = ?", [Modelo], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render("Edicion_estilos", {estilo: results[0]});
        }
    });
});
router.post('/edicion_estilos', crud.edicion_estilos);


// Ruta para eliminar los Hilos
router.get("/Eliminar_hilos/:Codigo", (req, res) =>{
    const Codigo = req.params.Codigo;
    conexion.query("DELETE FROM hilos WHERE Codigo = ?", [Codigo], (error, results) => {
        if(error){
            throw error;
        }else{
            res.redirect("../Visualizar_Hilos");
        }
    });
});

// Ruta para eliminar ccortes
router.get("/Eliminar_cortes/:Folio_interno", (req, res) =>{
    const Folio_interno = req.params.Folio_interno;
    conexion.query("DELETE FROM cortes WHERE Folio_Interno = ?", [Folio_interno], (error, results) => {
        if(error){
            throw error;
        }else{
            res.redirect("../Visualizar_cortes");
        }
    });
});


// Ruta para eliminar ccortes
router.get("/Eliminar_estilos/:Modelo", (req, res) =>{
    const Modelo = req.params.Modelo;
    conexion.query("DELETE FROM estilos WHERE Modelo = ?", [Modelo], (error, results) => {
        if(error){
            throw error;
        }else{
            res.redirect("../Visualizar_estilos");
        }
    });
});

// Ruta para ver completo el corte
router.get("/Corte_completo/:Folio_interno", (req, res) =>{
    const Folio_interno = req.params.Folio_interno;
    conexion.query("SELECT * FROM cortes WHERE Folio_interno = ?", [Folio_interno], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render("Corte_completo", {corte: results[0]});
        }
    });
});

// Ruta para ver completo el estilo
router.get("/Estilo_completo/:Modelo", (req, res) =>{
    const Modelo = req.params.Modelo;
    conexion.query("SELECT * FROM estilos WHERE Modelo = ?", [Modelo], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render("Estilo_completo", {estilo: results[0]});
        }
    });
});



module.exports = router;