// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let myServer = require("./app") ;

require("dotenv").config() ;

//Listen The Server : 

let PORT = process.env.PORT || 5000 ;

myServer.listen(PORT , function(){

    console.log(`Server is running @ http://localhost:${PORT}...✅`) ;

});

// Exports Code :


