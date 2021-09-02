/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");

const breedSchema = new mongoose.Schema({
  "name": "String",
  "size": "String",
  "grooming": "String",
  "energy": "String"
});

const Breed = mongoose.model('Breed', breedSchema);

module.exports = {
  model: Breed,
  schema: breedSchema
};
