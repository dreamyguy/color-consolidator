// -- node script to retrieve the latest colors from firebase
// -- it should be run from terminal [ $ node retrieve-colors.js ]

// -- node - require https module
var https = require('https');
// -- node - require fs [file system] module
var fs = require('fs');
// -- set which way node will write to file
var stream = fs.createWriteStream("sample/colors-latest.json");
// -- set options for https module
var options = {
  hostname: 'color-consolidator.firebaseio.com',
  port: 443,
  path: '/.json?print=pretty',
  method: 'GET'
};
// -- create request
var req = https.request(options, function( res ) {

    res.on( 'data', function( d ) {

    //  -- process and write data
    //  process.stdout.write( d );                        // gets interrupted by "dest.on('drain', ondrain); has no method 'on'"
    //  process.stdin.pipe(process.stdout.write ( d ));   // gets interrupted by "dest.on('drain', ondrain); has no method 'on'"
    //  console.log( d );

    //  -- write to file with 'createWriteStream'
    //  stream.pipe( d );                                 // gets interrupted by "dest.on('drain', ondrain); has no method 'on'"
        stream.write( d );                                // error: throw arguments[1]; // Unhandled 'error' event
        stream.end();

    });
});

req.end();

req.on('error', function(e) {
    console.error(e);
});
