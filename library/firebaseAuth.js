//initial
const auth = firebase.auth();
var Auth ={};

//login handler
Auth.logIn = function(email,pass){
	auth.signInWithEmailAndPassword(email, pass)
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
    };

//logout handler
Auth.logOut = function(){
	auth.signOut();

};

//signup handler
Auth.signUp = function(email,pass,nama){
	 auth.createUserWithEmailAndPassword(email, pass)
    .then(()=>{
      //when success
      console.log("success");
      auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
      Database.createData(nama,email,user.uid);
      }
});

      
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
};
