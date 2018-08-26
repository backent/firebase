//initial
const auth = firebase.auth();
var Auth ={};

//login handler
Auth.logIn = function(email,pass){
  emailRegister = email.trim();
  passRegister = pass.trim();
  
  if(emailRegister == "" || emailRegister == null){
    return alert("email Required");
  }
  if(passRegister == "" || passRegister == null){
    return alert("pass Required");
  }
	auth.signInWithEmailAndPassword(emailRegister, passRegister)
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
  emailRegister = email.trim();
  passRegister = pass.trim();
  namaRegister = nama.trim();

  if(emailRegister == "" || emailRegister == null){
    return alert("email Required");
  }
  if(passRegister == "" || passRegister == null){
    return alert("pass Required");
  }
  if(namaRegister == "" || namaRegister == null){
    return alert("nama Required");
  }

	 auth.createUserWithEmailAndPassword(emailRegister, passRegister)
    .then(()=>{
      //when success
      console.log("create email success");
      auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
      Database.createData(namaRegister,emailRegister,user.uid);
      console.log("create user's database success");
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
