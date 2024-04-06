const { _http } = require("../utils/http");

const getSwapiSpecies = async () => {
  try {
    const response = await _http.get("/species");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = getSwapiSpecies;
