var http = require("http");
const fs = require('fs'); 

http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/html'});
	res.end("Hello nik!");
  
	// Function to get current filenames 
	// in directory 
	fs.readdir(__dirname, (err, files) => { 
	  if (err) 
	    console.log(err); 
	  else { 
	    console.log("\nCurrent directory filenames:"); 
	    files.forEach(file => { 
	      console.log(file); 
	    }) 
	  } 
	}) 

}).listen(8080);