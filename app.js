const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

require('dotenv').config();

const app = express();

// Configuración de MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(expressLayouts);

// Rutas
const patientRoutes = require('./src/routes/Patient.routes.js');
const appointmentRoutes = require('./src/routes/Appointment.routes');

app.use('/patients', patientRoutes);
app.use('/appointments', appointmentRoutes);

// Escuchar en el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}/patients`));