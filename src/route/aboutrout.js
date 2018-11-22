const express=require("express");
const aboutusRouter=express.Router();
function route(nav){
    
    aboutusRouter.route("/").get(function(req,res){
        res.render("aboutus",{title:"Aboutus",nav})
    });
    
    
        return aboutusRouter;
    
}

       
                         

module.exports=route;