const mongoose = require('mongoose')

describe("Test the app envirnment", () => {
    test("Envirnment Test", async () => {
        console.log(process.env.NODE_ENV)
    })
    
    afterAll(() => {
        mongoose.connection.close()
    })
})