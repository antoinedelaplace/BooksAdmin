const express       = require('express');
const statsRoutes   = require('./routes/statsRoutes');
const adminRoutes   = require('./routes/adminRoutes');
const comicsRoutes   = require('./routes/comicsRoutes');
const cors          = require('cors');
const bodyParser    = require('body-parser');

const app           = express();
const port          = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//API
statsRoutes(app);
adminRoutes(app);
comicsRoutes(app);

//Serveur
app.get('/', function(req, res) {
    res.json({ message: 'BooksAdmin API' });
});
app.listen(port);

console.log('Api start on ' + port);
