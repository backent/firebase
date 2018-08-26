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
			callback(true,err);
		},
		function complete(){
			console.log("hai");
		storageRef.getDownloadURL().then(url=>{
		databuffer['photoProfileUrl'] = url.toString();
		if(databuffer.photoProfileUrl){
					Database.updateData({'photoProfileUrl': databuffer.photoProfileUrl}, 'users/'+uid,(err,mess)=>{
						if (!err) {
						console.log(mess);
						callback(false, "upload Media Berhasil");
						}
						else if(err){
						callback(true,err);
						}
					});

				}
		callback(false,"media berhasil terupload");
		});
			});


};


Storage.createMediaMusic = function(referensi,musicName,media,progressElement,callback){
		var storageRef = firebase.storage().ref(referensi + musicName + ".mp3");
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
			callback(true,err);
		},
		function complete(){
			console.log("hai");
		storageRef.getDownloadURL().then(url=>{
			//get the url
			console.log('ini url : ' + url);
		var data = firebase.database().ref(referensi);
			var childAmount;
			var keyName;
			var theUrl = url.toString();
		//ambil keyname selanjutnya
			data.once('value',snap=>{
				console.log('ini urltostring' + theUrl);
				childAmount = snap.numChildren();
				!childAmount ? keyName = 'music1' : keyName = 'music' + (childAmount+1);
			//check how many child in data
			/*	snap.forEach(childSnap=>{
					childSnap.forEach(snapes=>{
						console.log(snapes.key + " : " + snapes.val());
					})
			*/	


			//cara push database
			
				var databuffer = {};
				databuffer[keyName] = theUrl;
				var theData = data.push(); 


				theData.set(databuffer);
					console.log('berhasil update');

				});
			});

				
			


		callback(false,"media berhasil terupload");
		});
			};

Storage.getNameMusic = function(url){
	var nameMusic = firebase.storage().refFromURL(url).name.split(".");
	return nameMusic[0].toLowerCase();
};

Storage.getOwnMusic = function(referensi,callback){
	allMusicData = firebase.database().ref(referensi);

	allMusicData.once('value',(snap)=>{
		allMusicObject = {};
		snap.forEach(music=>{
			music.forEach(musicUrl=>{
			var databuffer ={}
			var namaMusic =	Storage.getNameMusic(musicUrl.val());
			databuffer['nama'] = namaMusic;
			databuffer['url'] = musicUrl.val();
			allMusicObject[namaMusic] = databuffer;

			});

		});
		callback(allMusicObject);
	});
};