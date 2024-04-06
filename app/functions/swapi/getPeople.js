const getSwapiPeople = require("../../providers/people-swapi.provider");

const getPeople = async () => {
  try {
    const result = await getSwapiPeople();

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
  getPeople,
};
