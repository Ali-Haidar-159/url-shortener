// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let app = express() ;

let cors = require("cors") ;
let morgan = require("morgan") ;
let ejs = require("ejs") ;

let path = require("path") ;
let http = require("http") ;

const userRoute = require("./router/user.router");

//Creating Server : 

let myServer = http.createServer(app) ;

// Connect With Server : 

app.use(express.urlencoded({extended:true})) ;
app.use(express.json()) ;
app.use(express.static(path.join(__dirname , "public"))) ;

app.use(morgan("dev")) ;
app.use(cors()) ;

app.set("view engine" , "ejs") ;
app.set("views" , path.join(__dirname , "view")) ;

app.use(userRoute) ;

// Request-Response-Cycle : 

app.get("/" , function(req,res){

    res.status(200).render("index.ejs") ;

}) ;

// Handle The Route Error 

app.use(function(req,res,next){

    res.status(404).json({

        status : 404 ,
        message : "Page not found !"

    });

});

// Handle The Server Error 

app.use(function(err,req,res,next){

    res.status(500).json({

        status : 500 ,
        message : "Find  The Server Error !" ,
        error : err

    });

});

// Exports Code :

module.exports = myServer ;
