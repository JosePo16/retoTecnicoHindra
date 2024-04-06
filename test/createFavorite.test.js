
const axios = require('axios');
require('dotenv').config()

const url = 'https://waanrj5x37.execute-api.sa-east-1.amazonaws.com'
test("favorites success", async () => {
    const res = await axios.get(`${url}/favorites`)
    expect(res.status).toEqual(200)
})