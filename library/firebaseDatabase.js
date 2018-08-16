//initial
const database = firebase.database();

var Database = {};

Database.createData = function(nama,email,uid){
	var ref = database.ref('users/'+uid);
    ref.set({
      'email' : email,
      'nama' : nama, 
      'photoProfulUrl' : '',
      'statusProfil': '',
  
    })
    .then(()=>{
    	//callback when success
      console.log("create success");
    })
    .catch(function(error) {
    	//when error
    console.log('Synchronization failed');
  });
};

Database.updateData = function(data,uid){
	var ref = database.ref('users/'+uid);
	ref.update(data)
	.then(()=>{
		//callback when success
	})
	.catch(error=>{
		//when error

	});
};