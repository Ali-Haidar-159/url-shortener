let mainLink = document.getElementById("mainLink") ;
let submitBtn = document.getElementById("submitBtn") ;
let shortLink = document.getElementById("shortLink") ;
let copyBtn = document.getElementById("copyBtn") ;

function sendURL ()
{

    fetch("http://localhost:3000/" , {

        method : "POST" ,
        headers : {

            "content-type" : "application/json"

        } ,
        body : JSON.stringify({
            link : mainLink.value 
        }) 
    
    })
    .then(function(r1){

        if(r1.ok)
        {
            return r1.json() ;
        }

    })
    .then(function(r2){

        shortLink.value = r2.shortURL ;
        // console.log(r2.shortURL) ;

    })
    .catch(function(err){

        console.log(err)

    })

}

submitBtn.addEventListener("click" , function(e){

    e.preventDefault() ;

    sendURL() ;

}) ;

function copyText ()
{
    shortLink.select() ;
    document.execCommand("copy") ;
}

copyBtn.addEventListener("click" , function(e){

    copyText() ;

    alert("Link Copied ✅") ;

})