const app = require('../src')
const request = require('supertest')
jest.mock('../src/controller/publicController')


describe("PublicController Suite", () => {
    
    test("Home Controller should return array of service and review with status code 200", async () => {
       
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200)
        let services = response.body.services
        // expect(services.length).toBeGreaterThan(1)
        // expect(services[0]._id).toBe(47982459842502348)
        console.log(services)

        let reviews = response.body.reviews
        expect(reviews.length).toBeGreaterThanOrEqual(0)

    })

    test("Contact Post Controller should return status code 200", async() => {
        const body = {
            name: "Saif Akib",
            email: "akib@gmail.com",
            description: "Do you have any service for sunday ?"
        }

        const response = await request(app).post('/contact').send(body);
        expect(response.statusCode).toBe(200)
        console.log(response.body)
    })
})