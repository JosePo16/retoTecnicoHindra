const AWS = require('aws-sdk')

const deleteFavorite = async (event) =>{
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters
        
        const result = await dynamodb.delete({
            TableName: process.env.FAVORITE_TABLE,
            Key: {
                id
            }
        }).promise();

        return {
            status: 200,
            body: JSON.stringify({ 
                message: 'Favorite deleted'
            })
        }
    }catch(error){
        console.log(error);
    }
};
module.exports = {
    deleteFavorite
}