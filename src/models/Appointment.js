// Representación de una cita en la DB
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  date: Date,
  office: String,
  doctor: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);