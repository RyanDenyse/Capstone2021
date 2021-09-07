/* eslint-disable prettier/prettier */
const { Router } = require("express");
const router = Router();
const breed = require("../models/breed");

// Create record in MongoDB
router.post('/breeds', (request, response) => {
  const newBreed = new breed.model(request.body);
  newBreed.save((err, breed) => {

    return err ? response.sendStatus(500).json(err) : response.json(breed)
  });
});

// Get all breed records
router.get('/breeds', (request, response) => {
  breed.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Get a breed by ID
router.get('/breeds/:id', (request, response) => {
  breed.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data)
  });
});

// Delete a breed by ID
router.delete('/breeds/:id', (request, response) => {
  breed.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Update a breed by ID
router.put('/breeds/:id', (request, response) => {
  const body = request.body;
  breed.model.findByIdAndUpdate(
    request.params.id,
    { $set: {
      "name": body.name,
      "size": body.size,
      "grooming": body.grooming,
      "energy": body.energy
    } },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});



module.exports = router;
