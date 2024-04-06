const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const middy = require("middy");
const favoriteInterface = require("../../interfaces/favorite.interface");
const { bodyValidator } = require("../../middlewares/validator");
const { errorHandler } = require("../../middlewares/errorHandler");
const schemaFavorite = require("../../schemas/createFavorite.schema");
const getDateFormat = require("../../utils/getDateFormat");

const saveFavorite = middy(async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const json = JSON.parse(event.body);

  favoriteInterface.createdAt = getDateFormat();
  favoriteInterface.id = v4();

  const favorite = { ...json, ...favoriteInterface };

  await dynamodb
    .put({
      TableName: process.env.FAVORITE_TABLE,
      Item: favorite,
    })
    .promise();

  return {
    status: 200,
    body: JSON.stringify(favorite),
  };
})
  .use(bodyValidator(schemaFavorite))
  .use(errorHandler());

module.exports = {
  saveFavorite,
};
