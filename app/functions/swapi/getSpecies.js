const getSwapiSpecies = require("../../providers/species-swapi.providers");

const getSpecies = async () => {
  try {
    const result = await getSwapiSpecies();

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
  getSpecies,
};
