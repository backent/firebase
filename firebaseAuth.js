
var config = {
    apiKey: "AIzaSyCUOtwdm9arUDIVwEEKLkwcYKtXM1opCUo",
    authDomain: "media-63808.firebaseapp.com",
    databaseURL: "https://media-63808.firebaseio.com",
    projectId: "media-63808",
    storageBucket: "media-63808.appspot.com",
    messagingSenderId: "351077845818"
  };
  firebase.initializeApp(config);
////////////PUSH MEDIA
  /*const upload = document.getElementById('upload');


  upload.addEventListener('change', (e)=>{
  //get file
  var file =   e.target.files[0];
  //get ref
  var storageRefforupload = storage.ref('ikhsan/'+file.name);

  storageRefforupload.put(file);

});
*/
//GET URL MEDIA
/*var refmedia = storage.child('ikhsan/user.namafileprofil' + '.jpg');
var fotoprofil = document.getElementById('pp');
refmedia.getDownloadURL().then(url=>{
  fotoprofil.src = url;
});*/

  //initial storage ref
  var storage = firebase.storage().ref();

/*
***
****
*****AUTH
****
***
**
*/  
const auth = firebase.auth();
//get element
  var email = document.getElementById('email');
  var pass = document.getElementById('pass');
  var login = document.getElementById('login');
  var signup = document.getElementById('signup');
  var logout = document.getElementById('logout');
  var log = document.getElementById('log');

  //initial var
  var uid = 'DIGIDAW';
  //onStateAuthChange
   auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   uid = user.uid;
  console.log(uid);

  }
  else{

    login.style.display = "initial";
   logout.style.display = "none";
    log.innerText = "please login";
  }
});
 
  //logIn
  login.addEventListener('click',()=>{
    
    auth.signInWithEmailAndPassword(email.value, pass.value)
      .then(data=>{
        console.log(data);
      })
      .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
     });
    });
  //signup
  signup.addEventListener('click', ()=>{
    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
    .then(()=>{
      //when success
      console.log("success");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  });



  //signout
  if(logout){
  logout.addEventListener('click',()=>{
    auth.signOut();
    console.log("d");
  });
}


console.log(uid);
document.getElementById('klik').addEventListener('click',()=>{
  console.log(uid);
});