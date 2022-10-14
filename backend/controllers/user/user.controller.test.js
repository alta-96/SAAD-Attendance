const app = require('../../server');
const server = require('supertest').agent(app);

// sample endpoint test
it("Gets the /users endpoint", async (done) => {
    const response = server.get("/users");
    
    expect(response).toBe(200);
})