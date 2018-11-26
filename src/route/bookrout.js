const express=require("express");
const booksRouter=express.Router();
const Bookdata=require("../model/Bookdata.js")
function router(nav){
    
    booksRouter.route("/").get(function(req,res){
        Bookdata.find().then(function(books){
        res.render("books",{title:"books",books,nav})
    });
});
    booksRouter.route("/:id").get((req,res)=>{
        const id=req.params.id; 
        Bookdata.findOne({_id:id}).then(function(book)
           
        {res.render("book",{title:"books",nav,book});
        
        });
    });
        return booksRouter;
}


       
                         

module.exports=router;