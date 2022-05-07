const mongoose = require("mongoose");

const  bookSchema = new mongoose.Schema(
    {
     
        likes : {type : Number, required : true, default: 0},
        coverImage : {type : String, min: 1},
        content : {type : String, required : true},
        user_id: [{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
        publication_id: {type:mongoose.Schema.Types.ObjectId, ref:"publication"},
        comment_id: [{type:mongoose.Schema.Types.ObjectId, ref:"comment"}],
    },
    {
        timestamps : true
    }
);


const Book = mongoose.model("book", bookSchema);

module.exports  = Book;