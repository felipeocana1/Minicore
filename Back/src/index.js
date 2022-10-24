require('dotenv').config();
const express = require("express");
const cors = require("cors");

const bodyParser = require('body-parser');
const passesRoute = require("./app/routes/passesRoutes");
const usersRoute = require("./app/routes/usersRoutes");
const router = express.Router();
const {dbConnection} = require('./app/config/DB');

const app = express();

app.use(cors());
app.use(router);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

passesRoute(router);
usersRoute(router);

router.get('/', (req, res) => {
    res.send('MiniCore Parking Passes');
});

dbConnection();

app.listen(3000, () => {
    console.log(`Escuchando el puerto: ${3000}`)
});


