const app = require('../src/index')
const request = require('supertest')


describe("app test suite", () => {
    test("my first test", async () => {
        console.log(process.env.NODE_ENV)
        console.log(process.env.ENVIRNMENT)
    })
})