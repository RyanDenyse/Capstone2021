/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");

const quizAnswerSchema = new mongoose.Schema({
  size: String,
  grooming: String,
  energy: String
});

const Quiz = mongoose.model('Quiz', quizAnswerSchema);

module.exports = {
  model: Quiz,
  schema: quizAnswerSchema
};
