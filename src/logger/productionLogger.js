const { createLogger, transports, format} = require('winston')
const formatParames = require('./loggerFormatter')

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
            new transports.File({ filename: 'logs/combined.log'})
        ]
    })
}

module.exports = productionLogger