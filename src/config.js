var path = require('path'); 	//for parsing directory.
var fs = require('fs'); 		//for reading files.

var env = process.env['NODE_ENV'] || 'development'; //development if NODE_ENV is not defined
var json_path = path.join(__dirname, '../config', env + '.json'); //path to configuration file.

var config = JSON.parse(fs.readFileSync(json_path));

config.env = env;

module.exports = config; //public config pointer.
