var config = {
    apiKey: "AIzaSyCUOtwdm9arUDIVwEEKLkwcYKtXM1opCUo",
    authDomain: "media-63808.firebaseapp.com",
    databaseURL: "https://media-63808.firebaseio.com",
    projectId: "media-63808",
    storageBucket: "media-63808.appspot.com",
    messagingSenderId: "351077845818"
  };
  firebase.initializeApp(config);

//user id
 const auth = firebase.auth();

 //initial var
  var uid = '';
  //onStateAuthChange
   auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   uid = user.uid;
   console.log("uid: " + uid);
     const database = firebase.database();
  const refdata = database.ref('users/'+uid);

  refdata.on('value',snap=>{
    console.log(snap.val());
  });


  //get button element
  var button = document.getElementById('save');
  button.addEventListener('click',()=>{
    //get nama and umur
    var nama = document.getElementById('nama');
    var umur = document.getElementById('umur');
    createData(nama.value,umur.value);

  });

  function createData(nama,umur){
    console.log('halo');
    var ref = database.ref('users/'+uid);
    ref.set({
      'nama' : nama, 
      'umur' : umur
    }).then(()=>{
      console.log("success");
    }).catch(function(error) {
    console.log('Synchronization failed');
  });

 /* var adaNameRef = database.ref('users/'+nama);
adaNameRef.child('nama').set(nama);
adaNameRef.child('umur').set(umur);
 */ }
  }
  else{

   uid= '';
   console.log("uid: " + uid);
   window.location.assign('C:/Users/L1-11/Desktop/New folder/index.html');
  }
});
 /*
 @TODO: biodata user
        update biodata user
      */  