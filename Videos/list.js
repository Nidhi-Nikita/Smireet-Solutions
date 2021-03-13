var http = require("http");
// module for reading files
const fs = require('fs'); 
// array to store file names
var myData = []; 
var data = "im niks, yo!!";

// this is the main function
http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/html'});
  
  	// calling readFiles function which will give an array of file names and stored in var final
	var final = readFiles();	 
	
	// this is to display on html site
	// res.write(final);

	// this is to display on cmd
	console.log(final);

	// can use res.write as many times we want before res.end. 
	// Since js is asynchronous res.final is getting executed even before res.write is executed
	// hence first we'll check if data is there in final var then only res.end will be executed
	if (final) {
		res.end("hiiiee: ",data);
	}

}).listen(8080);


// Function to get current filenames in directory 

function readFiles(){

	fs.readdir(__dirname, (err, files) => { 
	  if (err) 
	    console.log(err); 
	  else { 
	    console.log("\nCurrent directory filenames:"); 
	    files.forEach(file => { 
	    	// this loop pushes filenames which have mp4 as an extension and won't push the same file
	    	if (!myData.includes(file) && file.endsWith("mp4")) {
	    		myData.push(file); 
	    	}
	    })
	  } 
	})

	return myData;
}

// var server = http.createServer(function (request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write(data); // You Can Call Response.write Infinite Times BEFORE response.end
//     response.end("Hello World\n");
// }).listen(8125);