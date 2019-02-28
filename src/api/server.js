const express       = require('express');
const statsRoutes   = require('./routes/statsRoutes');
const adminRoutes   = require('./routes/adminRoutes');
const cors          = require('cors');

const app           = express();
const port          = 3000;

app.use(cors());

//API
statsRoutes(app);
adminRoutes(app);

//Serveur
app.get('/', function(req, res) {
    res.json({ message: 'BooksAdmin API' });
});
app.listen(port);

console.log('Api start on ' + port);
