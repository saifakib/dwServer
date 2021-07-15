const { createLogger, format, transports } = require('winston')
const formatParames = require('./loggerFormatter')

const level = process.env.LOG_LEVEL || 'debug';

const devFormat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf(formatParames)
)

const developmentLogger = () => {
    return createLogger({
        level,
        format: devFormat,
        transports: [
            new transports.Console()
        ]
    })
}

module.exports = developmentLogger