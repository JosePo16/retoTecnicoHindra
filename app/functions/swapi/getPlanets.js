const getSwapiPlanets = require("../../providers/planets-swapi.providers");

const getPlanets = async () => {
  try {
    const result = await getSwapiPlanets();

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
  getPlanets,
};
