//reuires
const express = require('express');
//importacion
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');


//obtener el puerto de heroku
const port = process.env.PORT || 3000;

//middleware sirve para que express sepa cual folder queremos servir(que se muestre)
//con esto hacemos publica la carpeta
app.use(express.static(__dirname + '/public'));

//EXPRESS HBS engine
//antes ejecutar npm install hbs --save
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//pagina principal
app.get('/', (req, res) => {
    res.render('home', { //con el objeto envio la info a la pagina
        nombre: 'Jefferson Pineda'
    });
});

app.get('/about', (req, res) => {
    res.render('about', { //con el objeto envio la info a la pagina
    });
});

//app.listen(3000)
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});