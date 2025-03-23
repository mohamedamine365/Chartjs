const mongoose = require('mongoose');
const chartDataSchema = new mongoose.Schema({
  labels: [String],
  datasets: [{
    data: [Number],
    label: String,
    backgroundColor: String
  }]
});

module.exports = mongoose.model('ChartData', chartDataSchema);
