const mongoose=require("mongoose");
mongoose.connect(".mongodb://localhost:27017/librarydb");
const Schema=mongoose.Schema;
var NewAuthorSchema=new Schema({
    name :String,
    bookname :String,
});
var addauthordata=mongoose.model("addauthordata",NewAuthorSchema);
module.exports=addauthordata;