const express=require("express");
const chalk=require("chalk");
const path=require("path");
var nav=[{link:"/books",title:"books"},
        {link:"/authors",title:"authors"},
        {link:"/aboutus",title:"Aboutus"},
        {link:"/contactus",title:"Contactus"},
        {link:"/admin",title:"Admin"},
        {link:"/addauthor",title:"Addauthor"}];
var app=new express();
const booksRouter=require("./src/route/bookrout.js")(nav);
const authorsRouter=require("./src/route/authorrout.js")(nav);
const aboutusRouter=require("./src/route/aboutrout.js")(nav);
const contactusRouter=require("./src/route/contactrout.js")(nav);
const adminRouter=require("./src/route/adminrout.js")(nav);
const addauthorRouter=require("./src/route/addauthorrout.js")(nav);




app.use(express.static(path.join(__dirname,'/public')))
app.use("/books",booksRouter);
app.use("/books/single",booksRouter);
app.use("/authors",authorsRouter);
app.use("/aboutus",aboutusRouter);
app.use("/contactus",contactusRouter);
app.use("/admin",adminRouter);
app.use("/addauthor",addauthorRouter);


app.set("views","./src/views");
app.set("view engine","ejs");

app.get('/',function(req,res){
    res.render("index",{title:"library",nav});//for nav reuse
});



app.listen(3000,function(){
    //console.log("listening")
    console.log("listening to port"+chalk.red("3000"));
});