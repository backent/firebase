
var Middleware= {};

Middleware.unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
});
Middleware.pageLoginAndSignup = function(){
    // handle it

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   uid = user.uid;
   window.location.assign("./home.html");
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
  
   window.location.assign("./login.html");
  }
});
};
