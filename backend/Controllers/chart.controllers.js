const ChartData = require('../model/chart')
const Data =async (req, res) => {
    try {
      const data = await ChartData.findOne();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  module.exports=Data