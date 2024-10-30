const express = require("express");
const router = express.Router();

const patientRoutes = require("./Patient.routes");
const appointmentRoutes = require("./Appointment.routes");

router.use("/patients", patientRoutes);
router.use("/appointments", appointmentRoutes);
router.get("/", (_, res) => res.redirect("/patients"));

module.exports = router;
