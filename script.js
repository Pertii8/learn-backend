//let  significa q puede cambiar la variable
//const significa q no va acambiar nunca
require('dotenv').config()
const http = require("http")// './' accede al directorio dnd estas desp podes importarle alguna carpeta d ahi

function requestController(req, res){
    //logica funcion
    console.log("hola paa");
    res.end("Hello, world");
}

//configurar nuestro sv
const server = http.createServer(requestController);

const PORT = process.env.PORT
server.listen(PORT, function () {
    console.log("Aplicacion corriendo en puerto : " + PORT);
});

//server.listen(4000)
//const person = {name :  "valen"};

//console.log(person.name);