// external imports
const express = require('express')
const cors = require('cors')
const path = require('path')


// internal imports 
const { notFoundHandler, errorHandler } = require('./middleware/common/errorHandler')
const morgan = require('./middleware/common/useMorgan')
const Routes = require('./routes')

const app = express();

app.use(cors());
morgan(app)

// request parsers
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// set static folder
app.use(express.static(path.join(__dirname, "public")))

//routing setup
app.use('/', Routes)

// error handling
app.use(notFoundHandler)
app.use(errorHandler)


module.exports = app



