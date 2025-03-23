const express = require('express');
const router = express.Router();
const Data=require("../Controllers/chart.controllers")


router.get('/data',Data);

module.exports=router


