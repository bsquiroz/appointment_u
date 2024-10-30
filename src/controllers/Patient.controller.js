const Patient = require("../models/Patient.js");
const Appointment = require("../models/Appointment.js");

// Listar todos los pacientes
exports.listPatients = async (req, res) => {
  const patients = await Patient.find();
  res.render("patients", { patients, layout: "layout" });
};

// Crear un paciente
exports.createPatient = async (req, res) => {
  const { name, lastName, phone, codeEps } = req.body;
  const patient = new Patient({ name, lastName, phone, codeEps });
  await patient.save();
  res.redirect("/patients");
};

// Nos redirije al edit con los datos del paciente
exports.goToEditPatient = async (req, res) => {
  const id = req.params.patientId;
  const patient = await Patient.findById(id);
  res.render("patients/edit", { patient, layout: "layout" });
};

// Edita el paciente
exports.EditPatient = async (req, res) => {
  const patientId = req.params.patientId;
  const { name, lastName, phone, codeEps } = req.body;

  const objUpdate = { name, lastName, phone, codeEps };

  await Patient.findByIdAndUpdate(patientId, objUpdate);

  res.redirect("/patients");
};

// Eliminar el paciente
exports.DeletePatient = async (req, res) => {
  const patientId = req.params.patientId;

  const findAppointment = await Appointment.find({ ["patient"]: patientId });

  if (findAppointment.length) {
    res.status(202).json({
      message: "El paciente tiene citas asignadas, no se puede borrar",
    });
  } else {
    await Patient.findByIdAndDelete(patientId);

    res.status(200).json({ message: "Paciente eliminado exitosamente" });
  }
};
