const Appointment = require("../models/Appointment.js");
const Patient = require("../models/Patient.js");

// Listar todas las citas
exports.listAppointments = async (req, res) => {
  const appointments = await Appointment.find().populate("patient");
  const patients = await Patient.find();
  res.render("appointments/index", {
    appointments,
    patients,
    layout: "layout",
  });
};

// Crear una cita
exports.createAppointment = async (req, res) => {
  const { patientId, date, office, doctor } = req.body;

  const appointment = new Appointment({
    patient: patientId,
    date,
    office,
    doctor,
  });
  await appointment.save();
  res.redirect("/appointments");
};
