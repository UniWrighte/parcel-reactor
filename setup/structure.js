const fs = require('fs');


exports.directory = function(name){

	fs.mkdirSync(name, {recursive: true}, (err)=>{
		if(err)throw err;
		console.log('a directory was created');
	});
	return true;

}

exports.createFile = function(name, data){
        const d = new Uint8Array(Buffer.from(data));

        fs.writeFileSync(name, d, (err)=>{
                if(err)throw err;
                console.log('file saved')
        });
}

exports.createBasicFiles = function(name, path, files=['index.html', 'src/App.js', '.babelrc', '.eslintrc.json']){
	
	const p = path + '/static/parcel-react/';

	files.forEach((file)=>{
		fs.copyFile(`${p}${file}`, `${name}/${file}`, (err)=>{
			if(err)throw err;
			console.log(file + ' copy success');
		});
	});

	


}
