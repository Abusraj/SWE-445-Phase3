import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// import collection  from 'firebase/firestore/lite';
// import getDocs from 'firebase/firestore/lite';

// Setup
const app = express();
const port = 5500;
// app.set('view engine', 'ejs');
app.use(express.json());

// CORS Configuration
const cors = require('cors');
app.use(cors()); // Use CORS package to allow cross-origin requests

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyARVSNGPiq0VmNDmlci3Vigii2rV79eCp8",
  authDomain: "swe445-project-ff236.firebaseapp.com",
  projectId: "swe445-project-ff236",
  storageBucket: "swe445-project-ff236.appspot.com",
  messagingSenderId: "509786107712",
  appId: "1:509786107712:web:338f5ee9de91e2913294a5",
  measurementId: "G-Y5K6C4KDNE"
}
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);


// Route Handlers

app.get('/api/data', (req, res) => {
  res.json({ message: "This is your API response!" });
});

app.get('/', function (req, res, next) {
  res.render('index');
  // next();

});

app.get('/signin', (req, res, next) => {
  res.render('signin');
  // next()
});


app.get('/signup', (req, res, next) => {
  res.render('signup');

  // next()
});


// Server Initialization
app.listen(port);
console.log('Server started at http://localhost:' + port);