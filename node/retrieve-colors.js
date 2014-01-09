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

        // -- process and write data
        // process.stdout.write( d );
        // console.log( d );

        // -- write to file with 'createWriteStream'
        stream.write( d );
        stream.end();

    });
});

req.end();

req.on('error', function(e) {
    console.error(e);
});
