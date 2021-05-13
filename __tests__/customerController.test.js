const app = require('../src/index')
const request = require('supertest')
jest.mock('../src/controller/customerController.js')

describe("Customer Controller Suite", () => {
    test("Create User Create a User and should response status 201", async() => {
        const body = {
            name: "Shakib AL Hasan",
            email: "shakib75@gmail.com"
        }
        const response = await request(app).post('/customer/createuser').send(body);
        expect(response.statusCode).toBe(201)

        //varrify by id that user created 
        const user_id = response.body._id
        const getUserResponse = await request(app).get('/customer/user/' + user_id);
        expect(getUserResponse.statusCode).toBe(200)
        expect(getUserResponse.body.name).toBe(body.name)
        console.log(getUserResponse.body)
    })

    test.only("Update User Should return status code 202 and update user", async() => {
        const body = {
            name: "Mashrafi Bi Mortaza",
            email: "mash2@gmail.com"
        }
        const res = await request(app).put('/customer/user/' + '609cfc1273b10e3d5263200f').send(body)
        expect(res.statusCode).toBe(202)
        console.log(res.body)
    })

    test.only("Delete User Should return status code 204 and update user list", async() => {
        const res = await request(app).delete('/customer/user/' + '609cfc1273b10e3d5263200f')
        expect(res.statusCode).toBe(204)
        console.log(res.body)
    })



})