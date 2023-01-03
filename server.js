const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');


//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });


















app.listen(process.env.port, () => {
  console.log(`Listening for 636s on port ${port}`)
})