require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./src/config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();

app.listen(process.env.PORT, ()=>{
    console.log("Server is listening at port 3000");
})