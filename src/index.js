require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const winston = require('winston')
const expressWinston = require('express-winston')
const winstonDailyRotate = require('winston-daily-rotate-file')
const winstonMongoDb = require('winston-mongodb')
const { ElasticsearchTransport } = require('winston-elasticsearch')

const Routes = require('./routes')


const app = express();
const mongo_uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.e3ps1.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const processRequest = async (req, res, next) => {
    let correlationId = req.headers['x-correlation-id'];
    if (!correlationId) {
        correlationId = Date.now().toString();
        req.headers['x-correlation-id'] = correlationId;
    }

    res.set('x-correlation-id', correlationId);

    return next();
}
app.use(processRequest)



const getMessage =  (req, res) => {
    let obj = {
        correlationId: req.headers['x-correlation-id'],
        requestBody: req.body
        
    };

    return JSON.stringify(obj);
}

const fileTransport = new winston.transports.DailyRotateFile({
    filename: 'log-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    maxSize: '20m',
    maxFiles: '14d'
})

const errorFileTransport = new winston.transports.DailyRotateFile({
    filename: 'errorlog-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    maxSize: '20m',
    maxFiles: '14d'
})

const mongoErrorTransport = new winston.transports.MongoDB({
    db: mongo_uri,
    metaKey: 'meta'
})

const eslsearch = new ElasticsearchTransport({
    level: 'info',
    clientOpts: { node: 'http://localhost:7000' },
    indexPrefix: 'log-drywash'
})

const infoLogger = expressWinston.logger({
    transports: [
        new winston.transports.Console(),
        fileTransport,
        eslsearch
        
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: false,
    msg: getMessage         //or calling function getMessage()
})

const errorLogger = expressWinston.errorLogger({
    transports: [
        new winston.transports.Console(),
        errorFileTransport,
        mongoErrorTransport,
        eslsearch
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    meta: true,
    msg: '{ "correlationId": "{{req.headers["x-correlation-id"]}}", "error": "{{err.message}}" }'
});

app.use(infoLogger)

app.use('/', Routes)

app.use(errorLogger)

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

module.exports = app;


