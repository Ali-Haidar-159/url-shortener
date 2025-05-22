// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let shortid = require('shortid'); 
let path = require("path") ;

let {PrismaClient} = require("@prisma/client") ;
let pc = new PrismaClient () ;

//Controller Code : 

let postOriginalLink = async function(req,res){

    try
    {
        let {link} = req.body ;
        let id = shortid.generate() ;

        let shortedLink = await pc.store_url.create({

            data : {

                main_link : link ,
                shortId : id

            }

        }) ;

        res.status(201).json({ shortURL: `http://localhost:3000/${id}` });

    }
    catch(err)
    {
        res.status(401).json({

            status : 401 ,
            message : "Find error to post data !" ,
            error : err

        }) ;
    }
    finally
    {
        await pc.$disconnect() ;
    }

}

let getOriginalWebsite = async function(req,res){

    try
    {
        let id = req.params.shortId ;

        let main = await pc.store_url.findMany({

            where : {
                shortId : id 
            }

        }) ;

        if (main.length === 0)
        {
            return res.status(404).send("URL not found");
        }

        let originalURL = main[0].main_link;

        res.status(200).redirect(originalURL) ;

    }
    catch(err)
    {
        return res.status(401).json({

            status : 401 ,
            message : "Find error to get data !" ,
            error : err

        }) ;
    }
    finally
    {
        await pc.$disconnect() ;
    }

}

// Exports Code :

module.exports = {

    getOriginalWebsite ,
    postOriginalLink ,

}
