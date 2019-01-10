const {readJSON} = require('./parser');

exports.package = function(name, path, test){
	//TODO - add other variables for description/keywords
	const type = test ? 'parcel-react-test' : 'parcel-react';
	return {...readJSON(`${path}/static/${type}/package.json`), name}
}
