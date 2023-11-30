const conexion = require("../database/db");

exports.registro_hilos = (req, res) => {
    const Hilos = req.body;
    let codigo = Hilos.codigo;
    let name = Hilos.name;
    let buscar = "SELECT * FROM hilos WHERE codigo = '"+codigo+"' ";
    conexion.query(buscar, function(error, row){
        if(error){
            throw error;
        }else{
            if(row.length > 0){
                res.render('Registro_Hilos', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "El hilo ya existe",
                    alertIcon: 'warning',
                    showConfirmButton: true,
                    timer: 3000,
                    ruta: ''
                });
            }else{
                let registrar = "INSERT INTO hilos (Codigo, Nombre) VALUES ('"+codigo+"', '"+name+"') ";
                conexion.query(registrar, function(error){
                    if(error){
                        throw error;
                    }else{  
                        res.render('Registro_Hilos', {
                            alert: true,
                            alertTitle: "Exito",
                            alertMessage: "El hilo se registro correctamente",
                            alertIcon: 'success',
                            showConfirmButton: true,
                            timer: 3000,
                            ruta: ''
                        });                    
                    }
                });
            }
        }
    });  
    //res.redirect("/Visualizar_Hilos");  
}


exports.edicion_hilos = (req, res) => {
    const Hilos = req.body;
    let codigo = Hilos.codigo;
    let name = Hilos.name;
    conexion.query("UPDATE hilos SET ? WHERE Codigo = ? ", [{Nombre:name}, codigo], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('index', {
                alert: true,
                alertTitle: "Exito",
                alertMessage: "El hilo se editado correctamente",
                alertIcon: 'success',
                showConfirmButton: true,
                timer: 3000,
                ruta: ''
            }); 
            console.log("Datos corregidos correctamente");
        }
    });
    //res.redirect("/Visualizar_Hilos");
}

exports.edicion_cortes = (req, res) => {
    const cortes = req.body;
    console.log(cortes);
    let Folio_Interno = cortes.FolioInterno;
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
    
    conexion.query("UPDATE cortes SET ? WHERE Folio_interno = ?", [{Fecha_pedido:FechaP, Cliente:Cliente, Tienda:Tienda, Orden:Orden, Modelo:Modelo, Descripcion:descrip, Proporcion_corte:proporcion, TonoDB:DBTono, DoblesDB:DBDobles, TonoRetazo:RetazoTono, DoblesRetazo:RetazoDobles, Cierre:cierre, Guia_hilo:guiaH, Guia_calibre:guiaC, Presilla_hilo:presH, Presilla_calibre:presC, Combinacion_hilo:combH, Combinacion_calibre:combC, Sobre_hilo:sobreH, Sobre_calibre:sobreC, Seguridad_hilo:seguridadH, Seguridad_calibre:seguridadC, DelanteroFE:FechaED, DelanteroSEA:SeEntD, DelanteroE:EntregoD, DelanteroH:HabiD, DelanteroFC:CobroD, TraseroFE:FechaET, TraseroSEA:SeEntT, TraseroE:EntregoT, TraseroH:HabiT, TraseroFC:CobroT, OPFE:FechaEOP, OPSEA:SeEntOP, OPE:EntregoOP, OPH:HabiOP, OPFC:CobroOP, TerminacionFE:FechaETE, TerminacionSEA:SeEntTE, TerminacionE:EntregoTE, TerminacionH:HabiTE, TerminacionFC:CobroTE, LavanderiaFE:FechaEL, LavanderiaSEA:SeEntL, LavanderiaE:EntregoL, LavanderiaH:HabiL, LavanderiaFC:CobroL}, Folio_Interno], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('index', {
                alert: true,
                alertTitle: "Exito",
                alertMessage: "El corte se editado correctamente",
                alertIcon: 'success',
                showConfirmButton: true,
                timer: 3000,
                ruta: ''
            }); 
            console.log("Datos corregidos correctamente");
            
        }      

    });
    //res.redirect("/Visualizar_cortes");    
};

    

exports.edicion_estilos = (req, res) => {
    
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
    console.log(estilos);
    conexion.query("UPDATE estilos SET ? WHERE Modelo = ?", [{Descripcion:descrip, Tela:tela, Tallas:tallas, Guia_hilo:guiaH, Guia_calibre:guiaC, Presilla_hilo:presH, Presilla_calibre:presC, Combinacion_hilo:combH, Combinacion_calibre:combC, Sobrehilado_hilo:sobreH, Sobrehilado_calibre:sobreC, Seguridad_hilo:seguridadH, Seguridad_calibre:seguridadC, Cierre:cierre}, modelo], (error, results)=>{
        if(error){
            throw error;
        }else{
            console.log(results);
            res.render('index', {
                alert: true,
                alertTitle: "Exito",
                alertMessage: "El estilo se editado correctamente",
                alertIcon: 'success',
                showConfirmButton: true,
                timer: 3000,
                ruta: ''
            });
            console.log("Datos corregidos correctamente");
        }
    });    
    //res.redirect("/Visualizar_estilos");
};

// Funcion para registrar los estilos en la base de datos
// Primero verifica que  no exista un estilo igual
exports.registro_estilos = (req, res) => {
    
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
                res.render('Registro_Estilo', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "El estilo ya existe",
                    alertIcon: 'warning',
                    showConfirmButton: true,
                    timer: 3000,
                    ruta: ''
                });
                console.log("EL estilo ya existe");
            }else{
                let registrar = "INSERT INTO estilos (Modelo, Descripcion, Tela, Tallas, Guia_hilo, Guia_calibre, Presilla_hilo, Presilla_calibre, Combinacion_hilo, Combinacion_calibre, Sobrehilado_hilo, Sobrehilado_calibre, Seguridad_hilo, Seguridad_calibre, Cierre) VALUES ('"+modelo+"', '"+descrip+"', '"+tela+"', '"+tallas+"', '"+guiaH+"', '"+guiaC+"', '"+presH+"', '"+presC+"', '"+combH+"', '"+combC+"', '"+sobreH+"', '"+sobreC+"','"+seguridadH+"', '"+seguridadC+"', '"+cierre+"') ";
                conexion.query(registrar, function(error){
                    if(error){
                        throw error;
                    }else{
                        res.render('Registro_Estilo', {
                            alert: true,
                            alertTitle: "Exito",
                            alertMessage: "El estilo se registro correctamente",
                            alertIcon: 'succes',
                            showConfirmButton: true,
                            timer: 3000,
                            ruta: ''
                        });
                        console.log("Datos almacenados correctamente");
                    }
                });
            }
        }
    });    
    //res.redirect("/Visualizar_estilos");
};

// Funcion para registrar los cortes en la base de datos
// Primero verifica que no exista un corte igual
exports.registro_cortes = (req, res) => {
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
                res.render('Registro_Cortes', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "El corte ya existe",
                    alertIcon: 'warning',
                    showConfirmButton: true,
                    timer: 3000,
                    ruta: ''
                });
                console.log("EL corte ya existe");
            }else{
                let registrar = "INSERT INTO cortes (Folio_interno, Fecha_pedido, Cliente, Tienda, Orden, Modelo, Descripcion, Proporcion_corte, TonoDB, DoblesDB, TonoRetazo, DoblesRetazo, Cierre, Guia_hilo, Guia_calibre, Presilla_hilo, Presilla_calibre, Combinacion_hilo, Combinacion_calibre, Sobre_hilo, Sobre_calibre, Seguridad_hilo, Seguridad_calibre, DelanteroFE, DelanteroSEA, DelanteroE, DelanteroH, DelanteroFC, TraseroFE, TraseroSEA, TraseroE, TraseroH, TraseroFC, OPFE, OPSEA, OPE, OPH, OPFC, TerminacionFE, TerminacionSEA, TerminacionE, TerminacionH, TerminacionFC, LavanderiaFE, LavanderiaSEA, LavanderiaE, LavanderiaH, LavanderiaFC) VALUES ('"+FolioI+"', '"+FechaP+"', '"+Cliente+"', '"+Tienda+"', '"+Orden+"', '"+Modelo+"', '"+descrip+"', '"+proporcion+"', '"+DBTono+"', '"+DBDobles+"', '"+RetazoTono+"', '"+RetazoDobles+"', '"+cierre+"', '"+guiaH+"', '"+guiaC+"', '"+presH+"', '"+presC+"', '"+combH+"', '"+combC+"', '"+sobreH+"', '"+sobreC+"','"+seguridadH+"', '"+seguridadC+"', '"+FechaED+"', '"+SeEntD+"', '"+EntregoD+"', '"+HabiD+"', '"+CobroD+"', '"+FechaET+"', '"+SeEntT+"', '"+EntregoT+"', '"+HabiT+"', '"+CobroT+"', '"+FechaEOP+"', '"+SeEntOP+"', '"+EntregoOP+"', '"+HabiOP+"', '"+CobroOP+"', '"+FechaETE+"', '"+SeEntTE+"', '"+EntregoTE+"', '"+HabiTE+"', '"+CobroTE+"', '"+FechaEL+"', '"+SeEntL+"', '"+EntregoL+"', '"+HabiL+"', '"+CobroL+"') ";
                conexion.query(registrar, function(error){
                    if(error){
                        throw error;
                    }else{                        
                        res.render('Registro_Cortes', {
                            alert: true,
                            alertTitle: "Exito",
                            alertMessage: "El corte se registro correctamente",
                            alertIcon: 'succes',
                            showConfirmButton: true,
                            timer: 3000,
                            ruta: ''
                        });
                        console.log("Datos almacenados correctamente");
                    }
                });
            }
        }
    });    

    //res.redirect("/Visualizar_Cortes");
};