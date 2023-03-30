const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const morgan = require("morgan");
const cors = require('cors');

// Cors Middleware
app.use(cors({
  origin: "",
  methods: ['GET', 'POST']
}))

// Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Static Folder
app.use(express.static("public"));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(morgan("dev"));


// Connect Mongo DB
// deprecation warning otherwise
mongoose.set('strictQuery', false)
mongoose.connect(
  `${process.env.DB_STRING_MAIN}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(
    console.log('Connected to DB')
)
  .catch((err) => {
    console.log(err)
  }
);

// Sessions 
const store = new MongoDBStore({
  uri: process.env.DB_STRING_MAIN,
  collection: 'Sessions'
});

// Catch errors
store.on('error', (error) => {
  console.log(error);
});

app.use(session({
  secret: 'berty',
  store: store,
  resave: false,
  saveUninitialized: false,
}));





app.get('/', (req, res) => {
  res.send('Hello World!')
})









app.listen(process.env.port, () => {
  console.log(`Listening for 636s on port ${process.env.port}`)
})