const AWS = require('aws-sdk')

const getFavoritesAll = async () =>{
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const result = await dynamodb.scan({
            TableName: process.env.FAVORITE_TABLE,
        }).promise();

        const favorites = result.Items

        return {
            status: 200,
            body: {
                favorites
            }
        }
    }catch(error){
        console.log(error);
    }
};

module.exports = {
    getFavoritesAll
}