//Formater
function formatParames(info) {
    const { timestamp, level, message, ...args } = info;
    const ts = timestamp.slice(0, 19).replace('T', ' ')

    return `${ts} ${level}: ${message} ${Object.keys(args).length ? JSON.stringify(args, '') : ''}`
}

module.exports = formatParames