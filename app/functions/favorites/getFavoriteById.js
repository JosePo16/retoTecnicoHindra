const AWS = require("aws-sdk");

const getFavoriteById = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const result = await dynamodb
      .get({
        TableName: process.env.FAVORITE_TABLE,
        Key: {
          id
        },
      })
      .promise();

    const favorite = result.Item;

    return {
      status: 200,
      body: {
        favorite,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getFavoriteById,
};
