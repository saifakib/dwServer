require('dotenv').config()
const app = require('./index')
const mongoose = require('mongoose')

const mongo_uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.e3ps1.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`


const PORT = process.env.PORT || 8000;

mongoose
    .connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Listen On ${PORT}`)
        })
    })
    .catch(err => {
        console.log(err.message)
    })





