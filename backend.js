import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const express = require('express');
const path = require('path');
const app = express();
const favicon = require('serve-favicon')
const port = process.env.PORT || 8080;
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
import { initializeApp } from 'firebase/app';
app.set('view engine', 'ejs');

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtLWxM_PGaHsZaRb4tL8nGjustB0j1B70",
  authDomain: "swe-445-f4645.firebaseapp.com",
  projectId: "swe-445-f4645",
  storageBucket: "swe-445-f4645.appspot.com",
  messagingSenderId: "538645544148",
  appId: "1:538645544148:web:6086a9b5807abb22778f41",
  measurementId: "G-WGFDTGGDVE"
};
const firebase = initializeApp(firebaseConfig);
   

app.get('/', function(req, res, next) {
    res.render(path.join(__dirname, '/index.html'));
    res.setHeader('Content-Type', 'text/plain');
    res.write("Hello KFUPM & SWE-445");
    res.end();
  
  });

app.get('/signin', (req, res, next)=>{
    res.render({firstName: 'David', lastName: 'Smith', age: 33});

});


app.get('/signup', (req, res, next)=>{
    res.render({firstName: 'David', lastName: 'Smith', age: 33});
});

app.listen(port);
console.log('Server started at http://localhost:' + port);