
const express = require('express')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')

const Routes = require('./routes')


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//app.use('/', Routes)

//Swagger
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


module.exports = app



