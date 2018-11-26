const express=require("express");
const addauthorRouter=express.Router();
const addauthordata=require("../model/addauthordata.js")
function router(nav){
    
    addauthorRouter.route("/").get(function(req,res){
        addauthordata.find().then(function(authors){
        res.render("addauthor",{title:"authors",authors,nav})
    });
});
    addauthorRouter.route("/add").get((req,res)=>{
        var item={
                name:req.param("bookname"),
                bookname:req.param("author"),
                
            
        }
        var author=new addauthordata(item);
        author.save();
        res.redirect('/authors')
    });
        return addauthorRouter;
}


       
                         

module.exports=router;