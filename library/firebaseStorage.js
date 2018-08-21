var Storage = {};


Storage.createMedia = function(referensi,media,progressElement,callback){
	var storageRef = firebase.storage().ref(referensi);
	var task = storageRef.put(media);
	task.on('state_changed',
		function progress(snap){
			var percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
			console.log(percentage);
			if (progressElement) {
			progressElement.value = percentage;
		}

		},
		function error(err){

		},
		function complete(){
			console.log("hai");
		storageRef.getDownloadURL().then(url=>{
		databuffer['photoProfileUrl'] = url.toString();
		firebase.database().ref('users/'+ uid).update(databuffer).then(()=>{
			window.location.assign('C:/Users/L1-11/Desktop/New folder/beranda.html');
		})
		.catch(e=>{
			console.log("error code" +e);
		});
		});
			});
	if(callback){
	return callback();
	}


};
