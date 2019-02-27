const express       = require('express');
const routes        = require('./routes/statsRoutes');
const bodyParser    = require('body-parser');
const cors          = require('cors');

const app           = express();
const port          = 3000;

app.use(cors());

//API
routes(app);


//Serveur
app.get('/', function(req, res) {
    res.json({ message: 'BooksAdmin API' });
});
app.listen(port);

console.log('Api start on ' + port);
