const { _http } = require("../utils/http");

const getSwapiPlanets = async () => {
  try {
    const response = await _http.get("/planets");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = getSwapiPlanets;
