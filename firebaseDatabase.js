var config = {
    apiKey: "AIzaSyCUOtwdm9arUDIVwEEKLkwcYKtXM1opCUo",
    authDomain: "media-63808.firebaseapp.com",
    databaseURL: "https://media-63808.firebaseio.com",
    projectId: "media-63808",
    storageBucket: "media-63808.appspot.com",
    messagingSenderId: "351077845818"
  };
  firebase.initializeApp(config);

  //initial firbase authentication
  const auth = firebase.auth();

  //initial var user id
  var uid = '';
  //onStateAuthChange
   auth.onAuthStateChanged(function(user) {
  if (user) {
  // when User is signed in.

    //getuser id
   uid = user.uid;
   console.log("uid: " + uid);

   //initial firebase database
    const database = firebase.database();
  
  //initial ref data for user database
  const refdata = database.ref('users/'+uid);

  //event on value change
  refdata.on('value',snap=>{
    console.log(snap.val());
  });


  //get button element
  var button = document.getElementById('save');
  button.addEventListener('click',()=>{
    //get nama and umur
    var nama = document.getElementById('nama');
    createData(nama.value);

  });


  }
  else{

   uid= '';
   console.log("uid: undefined" );
   window.location.assign('C:/Users/L1-11/Desktop/New folder/index.html');
  }
});


 /*
 @TODO: biodata user
        update biodata user
      */  

  //RESTFUL API
    //Create Data
  function createData(nama){
    console.log('halo');
    var ref = database.ref('users/'+uid);
    ref.set({
      'nama' : nama, 
      'photoProfulUrl' : '',
      'statusProfil': '',
  
    }).then(()=>{
      console.log("success");
    }).catch(function(error) {
    console.log('Synchronization failed');
  });
   }

  //Update Data
  function updateData(dataObject){
    var ref = firebase.database().ref('users/' + uid);

    ref.update(dataObject);
  }