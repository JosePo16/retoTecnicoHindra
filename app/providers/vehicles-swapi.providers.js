const { _http } = require("../utils/http");

const getSwapiVehicles = async () => {
  try {
    const response = await _http.get("/vehicles");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = getSwapiVehicles;
