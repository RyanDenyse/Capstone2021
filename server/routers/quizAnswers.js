/* eslint-disable prettier/prettier */
const { Router } = require("express");
const router = Router();
const quizAnswer = require("../models/quizAnswer");
const breed = require("../models/breed");

// Create record in MongoDB
router.post('/quizAnswers', (request, response) => {
  const newQuiz = new quizAnswer.model(request.body);
  newQuiz.save((err, quizAnswer) => {
    breed.model.findOne({ size: newQuiz.size, grooming: newQuiz.grooming, energy: newQuiz.energy }, (requestBreed, responseBreed) => {
      return err ? response.sendStatus(500).json(err) : response.json(responseBreed)
    });

    // return err ? response.sendStatus(500).json(err) : response.json(quizAnswer)
  });
});

// Get all quizAnswer records
router.get('/quizAnswers', (request, response) => {
  quizAnswer.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Get a quizAnswer by ID
router.get('/quizAnswers/:id', (request, response) => {
  quizAnswer.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data)
  });
});

// Delete a quizAnswer by ID
router.delete('/quizAnswers/:id', (request, response) => {
  quizAnswer.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Update a quizAnswer by ID
router.put('/quizAnswers/:id', (request, response) => {
  const body = request.body;
  quizAnswer.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        "name": body.name,
        "size": body.size,
        "grooming": body.grooming,
        "energy": body.energy
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});



module.exports = router;
