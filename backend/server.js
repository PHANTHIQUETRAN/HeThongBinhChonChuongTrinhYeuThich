const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');
const programRoutes = require('./src/routes/programRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Sử dụng Routes
app.use('/api/programs', programRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on: http://localhost:${PORT}`));