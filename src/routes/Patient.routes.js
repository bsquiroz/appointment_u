const express = require("express");
const router = express.Router();
const patientController = require("../controllers/Patient.controller.js");

// Rutas que llevan al controlador de pacientes.
router.get("/", patientController.listPatients);
router.post("/", patientController.createPatient);
router.get("/edit/:patientId", patientController.goToEditPatient);
router.post("/edit/:patientId", patientController.EditPatient);
router.delete("/delete/:patientId", patientController.DeletePatient);

module.exports = router;
