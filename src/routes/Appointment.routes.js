const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/Appointment.controller.js");

// Rutas que llevan al controlador de citas
router.get("/", appointmentController.listAppointments);
router.post("/", appointmentController.createAppointment);

module.exports = router;
