const express=require("express");
const addbookRouter=express.Router();
function route(nav){
    
    addbookRouter.route("/").get(function(req,res){
        res.render("addbook",{title:"AddBook",nav})
    });
    
    
        return addbookRouter;
    
}

       
                         

module.exports=route;