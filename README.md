# UGC
UGC Software

///////// NOTAS /////////

Cuando creamos la carpeta public, le decimos al host, que ahi estaran todos nuestros archivos estaticos (Aquellos que no se comunicaran con el servidor, ni haciendo peticciones ni conexiones a bases de datos.estilos, imagenes, javascript, etc.), entonces, buscara automaticamente esa carpeta. A eso se le llama MIDDLEWARES y puede haber varias carpetas.

La mayoria de hostings buscaran por defecto los archivos que se llamen index.

En la carpeta views, estaran todas aquellas paginas que son dinamicas, osea que de alguna manera, se comunicaran con el servidor.

Como estamos ocupando un motor de plantillas, creamos una nueva carpeta, para diferenciar, y en las rutas, cuando se busquen .ejs, se pondran sin extension, por que ya lo fijamos de esa manera y se buscaran en views y cuando tengan extension .html, entonces se buscaran en la carpeta de public


///////// CARPETAS ///////////

package .json -> archivos de configuracion
app.js -> Contiene la informacion de las rutas y las consultas
public => todos los archivos que van a cargar, aquello que no tiene qe ver con la configuracion

////////// CONEXION A LA BASE DE DATOS ///////////

1. Lo que se hizo primero fué instalar Node.js, en la versión mas reciente.
2. Después nos posicionamos en la carpeta principal, y entonces ocupamos el comando "npm init -y", para crear un archivo package .json. 
3. Al crearse correctamente, entonces verificamos las carpetas que ocuparemos en nuestro archivo .json.
4. Después descargamos el módulo mysql de Node con el comando "nmp install mysql".
3. Para hacer la conexion con la base de datos ocupamos mysql, por ello, necesitas tener un gestor de bases de datos como XAMPP (que es el que estamos utilizando), y claramente una base de datos con la cual haras conexion.
4. Teniendo eso en cuenta, entonces en el archivo conexion.js vamos a hacer la conexion con cuatro parametros base: 
    host: 'localhost', 
    database: 'maquiladora_ugc',
    user: 'root',
    password: ''
5. Teniendo esto en cuenta, solo hace falata revisar que esta conectando correctamente y entonces terminar la cconexion.