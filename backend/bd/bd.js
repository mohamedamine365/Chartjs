const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/chart")
.then(
    ()=>{
        console.log("connect bd")
    }
)
.catch(
    ()=>{
        console.log("err")
    }
)