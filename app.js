// Importamos la libreria express::::::::::::::::::::::::::::::::::::::::::::::::::::::
const { openDelimiter } = require("ejs");
const express = require("express"); 
const mysql = require("mysql");


// Objetos para llamar los metodos de express::::::::::::::::::::::::::::::::::::::::::
const app = express();

// Conexion con la base de datos:::::::::::::::::::::::::::::::::::::::::::::::::;:::::
let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'maquiladora_ugc',
    user: 'root',
    password: ''
});


// Configuraciones de las diferentes paginas::::::::::::::::::::::::::::::::::::::::::::::::
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false})); // Es para analizar los datos que venga de un html

// Pagina principal
app.get("/", function(req, res){ //cuando yo ingrese al servidor se renderiza una pantalla
    res.render("index"); // la respuesta del servidor, es renderizar la pagina
});

// Pagina de Registro de Hilos
app.get("/Registro_Hilos", function(req, res){ 
    res.render("Registro_Hilos"); // la respuesta del servidor, es renderizar la pagina
});

// Pagina de Registro de Estilos
app.get("/Registro_Estilo", function(req, res){ 
    res.render("Registro_Estilo"); // la respuesta del servidor, es renderizar la pagina
});

// Pagina de Registro de Cortes
app.get("/Registro_Cortes", function(req, res){ 
    res.render("Registro_Cortes"); // la respuesta del servidor, es renderizar la pagina
});

// Funcion para registrar los hilos en la base de datos
// Primero verifica que  no exista un hilo igual
app.post("/registrar_hilos", function(req, res){
    const Hilos = req.body;
    let codigo = Hilos.codigo;
    let name = Hilos.name;
    let buscar = "SELECT * FROM hilos WHERE codigo = '"+codigo+"' ";
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

// Funcion para registrar los estilos en la base de datos
// Primero verifica que  no exista un estilo igual
app.post("/registro_estilos", function(req, res){
    const estilos = req.body;
    let modelo = estilos.modelo;
    let descrip = estilos.descrip;
    let tela =  estilos.tela;
    let tallas = estilos.tallas;
    let guiaH = estilos.guiaH;
    let guiaC = estilos.guiaC;
    let presH = estilos.presH;
    let presC = estilos.presC;
    let combH = estilos.combH;
    let combC = estilos.combC;
    let sobreH = estilos.sobreH;
    let sobreC = estilos.sobreC;
    let seguridadH = estilos.seguridadH;
    let seguridadC = estilos.seguridadC;
    let cierre = estilos.cierre;

    let buscar_estilo = "SELECT * FROM estilos WHERE Modelo = '"+modelo+"' ";
    conexion.query(buscar_estilo, function(error, row){
        if(error){
            throw error;
        }else{
            if(row.length > 0){
                console.log("EL estilo ya existe");
            }else{
                let registrar = "INSERT INTO estilos (Modelo, Descripcion, Tela, Tallas, Guia_hilo, Guia_calibre, Presilla_hilo, Presilla_calibre, Combinacion_hilo, Combinacion_calibre, Sobrehilado_hilo, Sobrehilado_calibre, Seguridad_hilo, Seguridad_calibre, Cierre) VALUES ('"+modelo+"', '"+descrip+"', '"+tela+"', '"+tallas+"', '"+guiaH+"', '"+guiaC+"', '"+presH+"', '"+presC+"', '"+combH+"', '"+combC+"', '"+sobreH+"', '"+sobreC+"','"+seguridadH+"', '"+seguridadC+"', '"+cierre+"' ";
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

// Funcion para registrar los cortes en la base de datos
// Primero verifica que no exista un corte igual
app.post("/registro_cortes", function(req, res){
    const cortes = req.body;
    let FolioI = cortes.FolioInterno;
    let FechaP = cortes.FechaPedido;
    let Cliente = cortes.Cliente;
    let Tienda = cortes.Tienda;
    let Orden = cortes.Orden;
    let Modelo = cortes.Modelo;
    let descrip = cortes.descrip;
    let proporcion = cortes.proporcion;
    let DBTono = cortes.DBTono;
    let DBDobles = cortes.DBDobles;
    let RetazoTono = cortes.RetazoTono;
    let RetazoDobles = cortes.RetazoDobles;
    let cierre = cortes.cierre;
    let guiaH = cortes.guiaH;
    let guiaC = cortes.guiaC;
    let presH = cortes.presH;
    let presC = cortes.presC;
    let combH = cortes.combH;
    let combC = cortes.combC;
    let sobreH = cortes.sobreH;
    let sobreC = cortes.sobreC;
    let seguridadH = cortes.seguridadH;
    let seguridadC = cortes.seguridadC;

    let FechaED = cortes.FechaED;
    let SeEntD = cortes.SeEntD;
    let EntregoD = cortes.EntregoD;
    let HabiD = cortes.HabiD;
    let CobroD = cortes.CobroD;

    let FechaET = cortes.FechaET;
    let SeEntT = cortes.SeEntT;
    let EntregoT = cortes.EntregoT;
    let HabiT = cortes.HabiT;
    let CobroT = cortes.CobroT;

    let FechaEOP = cortes.FechaEOP;
    let SeEntOP = cortes.SeEntOP;
    let EntregoOP = cortes.EntregoOP;
    let HabiOP = cortes.HabiOP;
    let CobroOP = cortes.CobroOP;

    let FechaETE = cortes.FechaETE;
    let SeEntTE = cortes.SeEntTE;
    let EntregoTE = cortes.EntregoTE;
    let HabiTE = cortes.HabiTE;
    let CobroTE = cortes.CobroTE;

    let FechaEL = cortes.FechaEL;
    let SeEntL = cortes.SeEntL;
    let EntregoL = cortes.EntregoL;
    let HabiL = cortes.HabiL;
    let CobroL = cortes.CobroL;

    let buscar_corte = "SELECT * FROM cortes WHERE Folio_interno = '"+FolioI+"' ";
    conexion.query(buscar_corte, function(error, row){
        if(error){
            throw error;
        }else{
            if(row.length > 0){
                console.log("EL corte ya existe");
            }else{
                let registrar = "INSERT INTO cortes (Folio_interno, Fecha_pedido, Cliente, Tienda, Orden, Modelo, Descripcion, Proporcion_corte, TonoDB, DoblesDB, TonoRetazo, DoblesRetazo, Cierre, Guia_hilo, Guia_calibre, Presilla_hilo, Presilla_calibre, Combinacion_hilo, Combinacion_calibre, Sobre_hilo, Sobre_calibre, Seguridad_hilo, Seguridad_calibre, DelanteroFE, DelanteroSEA, DelanteroE, DelanteroH, DelanteroFC, TraseroFE, TraseroSEA, TraseroE, TraseroH, TraseroFC, OPFE, OPSEA, OPE, OPH, OPFC, TerminacionFE, TerminacionSEA, TerminacionE, TerminacionH, TerminacionFC, LavanderiaFE, LavanderiaSEA, LavanderiaE, LavanderiaH, LavanderiaFC) VALUES ('"+FolioI+"', '"+FechaP+"', '"+Cliente+"', '"+Tienda+"', '"+Orden+"', '"+Modelo+"', '"+descrip+"', '"+proporcion+"', '"+DBTono+"', '"+DBDobles+"', '"+RetazoTono+"', '"+RetazoDobles+"', '"+cierre+"', '"+guiaH+"', '"+guiaC+"', '"+presH+"', '"+presC+"', '"+combH+"', '"+combC+"', '"+sobreH+"', '"+sobreC+"','"+seguridadH+"', '"+seguridadC+"', '"+FechaED+"', '"+SeEntD+"', '"+EntregoD+"', '"+HabiD+"', '"+CobroD+"', '"+FechaET+"', '"+SeEntT+"', '"+EntregoT+"', '"+HabiT+"', '"+CobroT+"', '"+FechaEOP+"', '"+SeEntOP+"', '"+EntregoOP+"', '"+HabiOP+"', '"+CobroOP+"', '"+FechaETE+"', '"+SeEntTE+"', '"+EntregoTE+"', '"+HabiTE+"', '"+CobroTE+"', '"+FechaEL+"', '"+SeEntL+"', '"+EntregoL+"', '"+HabiL+"', '"+CobroL+"') ";
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
app.use(express.static("public"));






// configurar el puerto usado por el servidor local:::::::::::::::::::::::::::::::::::::
app.listen(5000, function(){
    console.log("El servidor es: http://localhost:5000");
});