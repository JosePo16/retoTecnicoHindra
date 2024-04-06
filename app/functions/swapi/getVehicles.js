const getSwapiVehicles = require("../../providers/vehicles-swapi.providers");

const getVehicles = async () => {
  try {
    const result = await getSwapiVehicles();

    return {
      status: 200,
      body: {
        result,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getVehicles,
};
