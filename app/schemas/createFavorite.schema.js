const Joi = require("joi");

const schemaFavorite = Joi.object({
  type: Joi.string().required(),
  name: Joi.string().optional(),
  gender: Joi.string().optional(),
  homeworld: Joi.string().optional(),
  species: Joi.string().optional(),
  vehicles: Joi.string().optional(),
  starships: Joi.string().optional(),
  description: Joi.string().required(),
});

module.exports = schemaFavorite;
