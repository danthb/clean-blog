const express = require('express')
const app = new express();
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost:27017/book_store', {useNewUrlParser: true});

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {res.render('index');})

app.get('/about', (req, res) => {res.render('about');})

app.get('/contact', (req, res) => { res.render('contact'); })

app.get('/post', (req, res) => {res.render('post');})

app.get('/posts/new',(req,res)=>{res.render('create')})

app.post('/posts/store', async (req, res) => {
  await BlogPost.create(req.body)
  console.log(req.body)
  res.redirect('/')
  })

app.listen(3000, () => {console.log('App listening on port 3000')})
