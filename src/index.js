// external imports
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')


// internal imports 
const { notFoundHandler, errorHandler } = require('./middleware/common/errorHandler')
const morgan = require('./middleware/common/useMorgan')
const logger = require('./logger')
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


const mongo_uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.e3ps1.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
mongoose
    .connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        // server listen
        app.listen(process.env.PORT, () => {
            logger.info(`Server Listen On ${process.env.PORT}`)
            logger.error("this is warn test")
        })
    })
    .catch(err => {
        logger.error(err.message)
    })



