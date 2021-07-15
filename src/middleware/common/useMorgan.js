const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const path = require('path')

module.exports = function (app) {

    // select a format for arrange log
    const format = typeof (process.env.NODE_ENV) === 'string' && process.env.NODE_ENV === 'production' ? 'combined' : 'dev'

    // create rotatinf file write strem for response error
    const accessLogStreamError = rfs.createStream('accessError.log', {
        size: "20M", // rotate every 20 MegaBytes written
        interval: '1d', // rotate daily
        path: path.join(__dirname, '../../../logs')
    })

    // create rotatinf file write strem for response without error
    const accessLogStreamWithoutError = rfs.createStream('accessWithoutError.log', {
        size: "20M", // rotate every 20 MegaBytes written
        interval: '1d', // rotate daily
        path: path.join(__dirname, '../../../logs')
    })

    // log only 4xx and 5xx responses
    app.use(
        morgan(format, {
            skip: (req, res) => {
                return res.statusCode < 400
            },
            stream: process.env.NODE_ENV === 'production' ? accessLogStreamError : process.stderr
        })
    )

    // log only 2xx and 3xx responses
    app.use(
        morgan(format, {
            skip: (req, res) => {
                return res.statusCode > 399
            },
            stream: process.env.NODE_ENV === 'production' ? accessLogStreamWithoutError : process.stderr
        })
    )
}