


exports.parseArgv = function(argv){

	const args = argv.slice(2);

	const test = args.indexOf('-t') !== -1;

	return {name: args.filter(arg=>arg !== '-t')[0], test}
}
