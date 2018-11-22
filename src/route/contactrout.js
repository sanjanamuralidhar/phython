const express=require("express");
const contactusRouter=express.Router();
function route(nav){
    
    contactusRouter.route("/").get(function(req,res){
        res.render("contactus",{title:"Contactus",nav})
    });
    
    
        return contactusRouter;
    
}

       
                         

module.exports=route;