
var Middleware= {};

Middleware.pageLoginAndSignup = function(){

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   uid = user.uid;
   window.location.assign("C:/Users/L1-11/Desktop/New folder/index.html");

  }
  else{

  }
});
};

Middleware.pageUser = function(){
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   uid = user.uid;

  }
  else{
  
   window.location.assign("C:/Users/L1-11/Desktop/New folder/login.html");
  }
});
};
