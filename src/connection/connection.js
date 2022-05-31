const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECT).then(() =>{
    console.log("connection is successful ");
}).catch((err) =>{
    console.log("no connection", err);
})