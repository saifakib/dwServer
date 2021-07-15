// external imports
require('dotenv').config()
const mongoose = require('mongoose')

// internal imports
const app = require('./index')
const logger = require('./logger')

// Mongo Atlas Connection string
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
        })
    })
    .catch(err => {
        logger.error(err.message)
    })




