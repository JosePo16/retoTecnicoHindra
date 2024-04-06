
# reto-node-serverless

Aplicación API HTTP con Node.js ejecutándose en AWS Lambda y API Gateway utilizando Serverless Framework con conexión a DynamoDB.

### Información
* Serverless: v3
* Plataforma: AWS
* Lenguaje: javascript (nodeJS v18)
* Pruebas Unitarias: Jest
* Fecha Desarrollo: 04/04/2024
* Desarrollador: José Gabriel Ponte Sagastegui

### Explicación
* Invoke the endpoint to start registering favorites:
```
  POST - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/favorites
```

* Use the following scheme

```
}
    "type": "",
    "name": "",
    "gender": "",
    "homeworld": "",
    "species": "",
    "vehicles": "",
    "starships": "",
    "description": "my first favorite"
}
```

* You don't need to assign a value to all fields, I can insert like this:
```
{
    "type": "People",
    "name": "Tatooine",
    "species": "droip",
    "homeworld": "Naboo",
    "description": "mi primer favorito",
}
```

or 
```
{
    "name": "Tatooine",
    "species": "droip",
    "description": "mi primer favorito",
}
```
The only required field is description.
### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying reto-node-serverless to stage dev (sa-east-1)

✔ Service deployed to stack reto-node-serverless-dev (138s)

  POST - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/favorites
  GET - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/favorites
  GET - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/favorites/{id}
  PUT - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/favorites/{id}
  DELETE - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/favorites/{id}
  GET - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/swapi/films
  GET - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/swapi/people
  GET - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/swapi/planets
  GET - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/swapi/species
  GET - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/swapi/startship
  GET - https://waanrj5x37.execute-api.sa-east-1.amazonaws.com/swapi/vehicles
functions:
    createFavorite: reto-node-serverless-dev-createFavorite(20 MB)                                                       
    getFavorites: reto-node-serverless-dev-getFavorites (20 MB)
    getFavorite: reto-node-serverless-dev-getFavorite (20 MB)
    updateFavorite: reto-node-serverless-dev-updateFavorite (20 MB)
    deleteFavorite: reto-node-serverless-dev-deleteFavorite (20 MB)
    getSwapiFilms: reto-node-serverless-dev-getSwapiFilms (20 MB)
    getSwapiPeople: reto-node-serverless-dev-getSwapiPeople (20 MB)
    getSwapiPlanets: reto-node-serverless-dev-getSwapiPlanets (20 MB)
    getSwapiSpecies: reto-node-serverless-dev-getSwapiSpecies (20 MB)
    getSwapiStarships: reto-node-serverless-dev-getSwapiStarships (20 MB)
    getSwapiVehicles: reto-node-serverless-dev-getSwapiVehicles (20 MB)
```

### Invocation

After successful deployment, you can change the URL in serverless.yml:

```bash
URL=https://xxxxxxx.execute-api.sa-east-1.amazonaws.com/
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function getFavorites
```

Which should result in response similar to the following:

```
{
    "status": 200,
    "body": {
        "favorites": [
            {
                "species": "droip",
                "homeworld": "Naboo",
                "createdAt": "06/04/2024",
                "description": "mi primer favorito",
                "id": "7cdde1dc-f4c0-4b9f-a98e-14c95821e2b6",
                "name": "Tatooine",
                "type": "People"
            }
        ]
    }
}
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

My repository path [GitHub repository](https://github.com/JosePo16/retoTecnicoHindra).
