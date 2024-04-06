const { updateFavorite } = require('../app/functions/favorites/updateFavorite');
const AWS = require('aws-sdk');

// Mockear la función update de DynamoDB
AWS.DynamoDB.DocumentClient.prototype.update = jest.fn();

describe('updateFavorite', () => {
  it('Success', async () => {
    const event = {
      pathParameters: {
        id: '1'
      },
      body: JSON.stringify({
        description: 'mi nuevo favorito'
      })
    };

    AWS.DynamoDB.DocumentClient.prototype.update.mockReturnValueOnce({
      promise: jest.fn().mockResolvedValueOnce({
        Attributes: {
          description: 'mi nuevo favorito'
        }
      })
    });

    const result = await updateFavorite(event);

    expect(result.status).toBe(200);
    expect(JSON.parse(result.body)).toEqual({ message: 'Favorite updated' });
  });

  it('failure', async () => {
    const event = {
      pathParameters: {
        id: 'yourIdHere'
      },
      body: JSON.stringify({
        description: 'newDescription'
      })
    };

    AWS.DynamoDB.DocumentClient.prototype.update.mockReturnValueOnce({
      promise: jest.fn().mockRejectedValueOnce(new Error('DynamoDB error'))
    });

    const result = await updateFavorite(event);

    expect(result).toBeUndefined();
  });
});
