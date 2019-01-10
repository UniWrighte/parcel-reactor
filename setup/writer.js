const fs = require('fs');
const {createFile} = require('./structure');
const {package} = require('./placer');


exports.makePackage = function(name, installPath, test){

	return createFile(`${name}/package.json`, JSON.stringify(package(name, installPath, test), null, 4));

}
	
	

