import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore,setDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Setup
const app = express();
const port = 5500;
// app.set('view engine', 'ejs');
app.use(express.json());
res.setHeader('Content-Type', 'application/json');

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

app.post('/signin', (req, res, next) => {
  usercredintials=req.body
  let email=usercredintials.email;
	let password=usercredintials.pass;
	const auth = getAuth(app);
	function signin() {
		const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
  	.then((userCredential) => {
 	   const user = userCredential.user;
		arr.set(email);	
		location.href = '/home';
  	})
  	.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
	alert(errorMessage);
  });
				
	}
  next()
});


app.get('/signup', (req, res, next) => {
  const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user;
				try {
		const docRef = await setDoc(doc(db, 'user',email), {
		
		});
		// console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
				arr.set(email);	
				location.href = '/editor';
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
});

// Server Initialization
app.listen(port);
console.log('Server started at http://localhost:' + port);