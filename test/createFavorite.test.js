
const AWS = require("aws-sdk");
const { saveFavorite } = require("../app/functions/favorites/createFavorite"); // Asegúrate de importar correctamente tu función lambda


jest.mock("aws-sdk", () => {
  const putMock = jest.fn().mockReturnThis();
  const promiseMock = jest.fn();
  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => ({
        put: putMock,
      })),
    },
  };
});

describe("saveFavorite Lambda Function", () => {
  let event;
  let context;
  let callback;

  beforeEach(() => {
    event = {
      body: JSON.stringify({
        type: "People",
        name: "Tatooine",
        species: "droip",
        homeworld: "Naboo",
        description: "mi primer favorito",
      }),
    };
    context = {};
    callback = jest.fn();
  });

  it("should save favorite correctly", async () => {
    // Ejecutar la función lambda
    await saveFavorite(event, context, callback);

    // Verificar que se haya llamado correctamente al método put de DynamoDB
    expect(AWS.DynamoDB.DocumentClient).toHaveBeenCalled();
    expect(AWS.DynamoDB.DocumentClient().put).toHaveBeenCalledWith({
      TableName: 'favoritesTable',
      Item: expectedFavorite,
    });

    // Verificar que se haya llamado correctamente al callback con el resultado esperado
    expect(callback).toHaveBeenCalledWith(null, {
      status: 200,
      body: JSON.stringify(expectedFavorite),
    });
  });
});
