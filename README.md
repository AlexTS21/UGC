# UGC
UGC Software



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