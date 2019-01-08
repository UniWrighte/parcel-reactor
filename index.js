#!/usr/bin/env node
const fs = require('fs');
const {directory, createBasicFiles} = require('./setup/structure');
const {makePackage} = require('./setup/writer');
const {readJSON} = require('./setup/parser');
//const test = require.resolve('.');


//console.log({test});
const {argv} = process;
//console.log({argv});
const name = argv[argv.length - 1];
//const installPath = argv[1];

//console.log({__dirname});

//console.log(readJSON(__dirname + '/static/parcel-react/package.json'));

directory(name);
directory(name + '/src');
makePackage(name, __dirname);
createBasicFiles(name, __dirname);



