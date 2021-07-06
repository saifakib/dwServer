// external imports
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


// internal imports 
const { notFoundHandler, errorHandler } = require('./middleware/common/errorHandler')
const Routes = require('./routes')


const app = express();

app.use(cors());

// request parsers
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

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
            console.log(`Server Listen On ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log(err.message)
    })



