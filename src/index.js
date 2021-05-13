
const express = require('express')
const cors = require('cors')

const Routes = require('./routes')


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/', Routes)


module.exports = app



