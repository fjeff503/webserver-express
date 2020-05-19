//requires
const http = require('http');

//creamos el servidor
//req = peticion 
//res = respuesta
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Jefferson',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //res.write('Hola Mundo');
    res.end();
}).listen(8080);

console.log('escuchando el puerto 8080');