

	  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUOtwdm9arUDIVwEEKLkwcYKtXM1opCUo",
    authDomain: "media-63808.firebaseapp.com",
    databaseURL: "https://media-63808.firebaseio.com",
    projectId: "media-63808",
    storageBucket: "media-63808.appspot.com",
    messagingSenderId: "351077845818"
  };
  firebase.initializeApp(config);
////////////////
	var defaultStorage = firebase.storage();
	var storageRef = defaultStorage.ref();
	var imageRef = storageRef.child('a7dv5q2_460s.jpg');
	var imgEl = document.getElementById('imgtest');

  //push media
  const upload = document.getElementById('upload');
  const button = document.getElementById('btnupload');

 /* button.addEventListener('click',()=>{
    //get file
    var file = upload.target.files[0];
    console.log(file);
  });*/
  upload.addEventListener('change', (e)=>{
  //get file
  var file =   e.target.files[0];
  //get ref
  var storageRefforupload = defaultStorage.ref('ikhsan/'+file.name);

  storageRefforupload.put(file);
  });

  //donwload image
	imageRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
	imgEl.src = url;
}).catch(function(error) {


});

	var database = firebase.database().ref();
   var object = database.child('object');
   var target = document.getElementById('target');
   object.on('value', snap => {
   	target.innerText = JSON.stringify(snap.val(),null, 3);
   	console.log(snap.val());
   });

   var auth = firebase.auth();
   const btnlogin = document.getElementById('login');
   const btnsignup = document.getElementById('signup');
   const btnlogout = document.getElementById('logout');

   //login
   btnlogin.addEventListener('click',()=>{
   var email = document.getElementById('email').value;
   var pass = document.getElementById('pass').value;
   auth.signInWithEmailAndPassword(email,pass)
   	.catch(e=>{
   		if(e){
   			console.log(e.message);
   		}
   });
});
   //signup

   btnsignup.addEventListener('click',()=>{
   var email = document.getElementById('email').value;
   var pass = document.getElementById('pass').value;
   auth.createUserWithEmailAndPassword(email, pass)
    .catch(function(error) {
  // Handle Errors here.
  if(error)
  	console.log(error.message);
  else
  	console.log("berhasil");

});
  });

   //sign out
   btnlogout.addEventListener('click',()=>{
   var email = document.getElementById('email').value;
   var pass = document.getElementById('pass').value;
   auth.signOut();
  });

   firebase.auth().onAuthStateChanged(function(user) {
  if (user) 
    console.log("user signIn");
  else
  	console.log("user Logout");
  
});

