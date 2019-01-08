const fs = require('fs');


exports.readJSON = function(path){
	return JSON.parse(fs.readFileSync(path, 'utf8'));
}

