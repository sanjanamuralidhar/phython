const express=require("express");
const adminRouter=express.Router();
const Bookdata=require("../model/Bookdata.js")
function route(nav){
    
    adminRouter.route("/").get(function(req,res){
        res.render("addbook",{title:"Admin",nav})
    });
    adminRouter.route("/add").get(function(req,res){
        var item={
            bookname:req.param("bookname"),
            author:req.param("author"),
            language:req.param("language"),
            publishers:req.param("publishers")
        }
        var book=new Bookdata(item);
        book.save();
        res.redirect('/books')

    });
    
        return adminRouter;
    
}

       
                         

module.exports=route;