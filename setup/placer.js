const {readJSON} = require('./parser');

exports.package = function(name, path){
	//TODO - add other variables for description/keywords
	return {...readJSON(`${path}/static/parcel-react/package.json`), name}
}
