//initial
const database = firebase.database();

var Database = {};

Database.createData = function(nama,email,uid){
	var ref = database.ref('users/'+uid);
    ref.set({
      'email' : email,
      'nama' : nama, 
      'photoProfileUrl' : '',
      'statusProfil': '',
      'musicAlbum' :'',
      
  
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

Database.updateData = function(data,referensi,callback){
	var ref = database.ref(referensi);
	ref.update(data)
	.then(()=>{  
		//callback when success 
    callback(false,"update data berhasil");
	})
	.catch(error=>{
		//when error
    callback(error,"error")
	});
};

Database.readData = function(uid){
	var ref = database.ref('users'+uid);
}