const express = require('express');
const app = express();
require("./bd/bd")
const cors = require('cors');
const chartDataRoutes = require('./routes/chart.routes');
// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/api', chartDataRoutes);

// Démarrer le serveur
app.listen(3003, () => {
  console.log(`Server is running on port 3003`);
});