const express=require("express");
const booksRouter=express.Router();
function router(nav){
    var books=[
        {name:"bookapp",author:"books1",genre:"genre1"},
        {name:"happy",author:"books2",genre:"genre2"},
        {name:"journey",author:"books3",genre:"genre3"},
        {name:"faraway",author:"books4",genre:"genre4"},
        {name:"story",author:"books5",genre:"genre5"} ];
    booksRouter.route("/").get(function(req,res){
        res.render("books",{title:"books",books,nav})
    });
    booksRouter.route("/:id").get((req,res)=>{
        const id=req.params.id;    
        res.render("book",{title:"books",books,nav,book:books[id]});
        
        });
        return booksRouter;
}


       
                         

module.exports=router;