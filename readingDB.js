const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost:27017/book_store', {useNewUrlParser: true});
BlogPost.find({
    title:'The Mythbuster’s Guide to Saving Money on Energy Bills'
    }, (error, blogspot) =>{
    console.log(error,blogspot)
    })