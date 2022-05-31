require("dotenv").config();
require('./connection/connection');
const express = require("express");
const router = require('./routes/route');

const port = 8000;
const app = express();


app.use(express.json());
app.use('/websitedata',router)

app.listen(port , () =>{
    console.log(`listening to the port on port no ${port} `);
})