const express=require("express");
const authorsRouter=express.Router();
function route(nav){
    var authors=[
        {name:"Nadasha"},
        {name:"Micheal"},
        {name:"Robert"},
        {name:"Richard"},
        {name:"Stephan"}];
    authorsRouter.route("/").get(function(req,res){
        res.render("authors",{title:"Authors",authors,
                                                nav
                                               });
    });
    authorsRouter.route("/:id").get((req,res)=>{
        const id=req.params.id;    
        res.render("author",{title:"author",
                                                nav,
                                               
                                                author:authors[id]});
        
        });
        return authorsRouter;
    
}

       
                         

module.exports=route;