// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let userRoute = express.Router() ;

let { getOriginalWebsite, postOriginalLink } = require("../controller/user.controller");

//Routing Code : 

userRoute.post("/" , postOriginalLink) ;

userRoute.get("/:shortId" , getOriginalWebsite) ;

// Exports Code :

module.exports = userRoute  ;
