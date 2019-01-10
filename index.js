#!/usr/bin/env node
const fs = require('fs');
const {directory, createBasicFiles} = require('./setup/structure');
const {makePackage} = require('./setup/writer');
const {readJSON} = require('./setup/parser');
const {parseArgv} = require('./helpers/clean.js');
//const test = require.resolve('.');


//console.log({test});
const {argv} = process;
//const name = argv[argv.length - 1];

const {name, test} = parseArgv(argv);
console.log({name});
//const installPath = argv[1];

//console.log({__dirname});

//console.log(readJSON(__dirname + '/static/parcel-react/package.json'));

directory(name);
directory(name + '/src');
makePackage(name, __dirname, test);
createBasicFiles(name, __dirname, test);



