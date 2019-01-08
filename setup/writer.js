const fs = require('fs');
const {createFile} = require('./structure');
const {package} = require('./placer');


exports.makePackage = function(name, installPath){

	return createFile(`${name}/package.json`, JSON.stringify(package(name, installPath), null, 4));

}
	
	

