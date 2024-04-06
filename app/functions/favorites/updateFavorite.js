const AWS = require("aws-sdk");

const updateFavorite = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const { description } = JSON.parse(event.body);

    const result = await dynamodb
      .update({
        TableName: process.env.FAVORITE_TABLE,
        UpdateExpression: "set description = :description",
        ExpressionAttributeValues: {
          ":description": description,
        },
        Key: {
          id,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      status: 200,
      body: JSON.stringify({
        message: "Favorite updated",
      }),
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updateFavorite,
};
