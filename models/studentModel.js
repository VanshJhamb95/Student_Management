const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide the 'firstName' field."],
  },
  lastName: {
    type: String,
    required: [true, "Please provide the 'lastName' field."],
  },
  rollNo: {
    type: Number,
    required: [true, "Please provide the 'rollNo' field."],
  },
  email: {
    type: String,
    required: [true, "Please provide the 'email' field."],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide the 'phoneNumber' field."],
  },
  class: {
    type: Number,
    required: [true, "Please provide the 'class' field."],
  },
  results: {
    type: Array,
    required: [true, "Please provide the 'results' field."],
  },
  marksheet: {
		type: [String], // Store multiple image URLs as an array of strings
	  },
  
});

module.exports = mongoose.model("students", studentSchema);
