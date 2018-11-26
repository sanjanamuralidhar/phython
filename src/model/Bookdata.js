const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/librarydb");
const Schema=mongoose.Schema;
var NewBookSchema=new Schema({
    bookname :String,
    author :String,
    language :String,
    publishers :String
});
var Bookdata=mongoose.model("Bookdata",NewBookSchema);
module.exports=Bookdata;