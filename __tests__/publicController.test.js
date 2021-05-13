const app = require('../src/index')
const request = require('supertest')
jest.mock('../src/controller/publicController.js')



describe("PublicController Suite", () => {
    
    test("Home Controller should return array of service and review with status code 200", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200)
        let services = response.body.services
        expect(services.length).toBeGreaterThan(1)
        expect(services[0]._id).toBe(47982459842502348)
        let reviews = response.body.reviews
        expect(reviews.length).toBeGreaterThanOrEqual(0)
        console.log(reviews)
    })

    test.only("Contact Post Controller should return status code 200", async() => {
        const body = {
            name: "Saif Hasan",
            email: "hasan@gmail.com",
            description: "You are good"
        }

        const response = await request(app).post('/contact').send(body);
        expect(response.statusCode).toBe(200)
        console.log(response.body)
    })
})