
exports.setHeader = ( req, res, next ) => {
    res.type('json')
    next()
}