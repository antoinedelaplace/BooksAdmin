const express       = require('express');
const statsRoutes   = require('./src/api/routes/statsRoutes');
const adminRoutes   = require('./src/api/routes/adminRoutes');
const comicsRoutes   = require('./src/api/routes/comicsRoutes');
const cors          = require('cors');
const bodyParser    = require('body-parser');

const app           = express();
const port          = 3000;
const distDir = __dirname + "/dist/";


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//API
statsRoutes(app);
adminRoutes(app);
comicsRoutes(app);

//Serveur
app.listen(port);

//Serving angular
app.use(express.static(distDir));

console.log('Api start on ' + port);
console.log('Files serve on ' + distDir);
