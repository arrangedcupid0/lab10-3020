function notLarsMap(arr, key, callback)
{
	var Parallel = require('paralleljs');
	var parr = new Parallel(arr);

	try {
		global.process.env.key = key
		parr = parr.map((piece) => piece == global.process.env.key).reduce((sum) => sum[0] + sum[1]).then(callback);
	} catch (e) {

	}
	return;
}

function cb(printer)
{
	console.log("Number of matches: " + printer);
}

function testThisBS()
{
	var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
	notLarsMap(arr, 3, cb);
	arr = [ 18, 11, 25, 8, 23, 4, 8, 1, 16, 15, 0, 4, 4, 4 ];
	notLarsMap(arr, 4, cb);
	arr = [ 32, 12, 10, 2, 15, 10, 9, 17, 11, 10, 0, 3, 12, 6 ];
	notLarsMap(arr, 999, cb);
	arr = [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ];
	notLarsMap(arr, 4, cb);
	arr = [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ];
	notLarsMap(arr, 5, cb);
	arr = [];
	notLarsMap(arr, 2, cb);
}

testThisBS();
