const { createLogger, transports, format} = require('winston');require('winston-mongodb')
const formatParames = require('./loggerFormatter')
const os = require('os')

const level = process.env.LOG_LEVEL || 'debug';

const prodFormat = format.combine(
    format.timestamp(),
    format.printf(formatParames)
)

const productionLogger = () => {
    return createLogger({
        level,
        format: prodFormat,
        transports: [
            new transports.File({ filename: 'logs/error.log', level: 'error'}),
            new transports.File({ filename: 'logs/combined.log'}),
            new transports.MongoDB({ 
                level: 'error',
                db: process.env.MongoURI,
                collection: 'errorLog',
                options: { useUnifiedTopology: true },
                storeHost: os.hostname()
            })
        ]
    })
}

module.exports = productionLogger