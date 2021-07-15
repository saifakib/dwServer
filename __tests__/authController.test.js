const app = require('../src')
const request = require('supertest')
jest.mock('../src/controller/authController')

describe("Auth Controller Suite", () => {
    
    test("Auth Controller should return array of users with status code 200", async () => {
       
        const response = await request(app).get("/auth/user/users");
        expect(response.statusCode).toBe(200)

        let users = response.body
        console.log(users)

    })
})

