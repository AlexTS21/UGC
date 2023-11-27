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
    res.redirect("/Menu_Hilos");  
}