// Representación de un paciente en la DB
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  phone: String,
  codeEps: String,
});

module.exports = mongoose.model('Patient', patientSchema);