const express = require('express');
const path = require('path');
const Blog = require('./models/Blog');

const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'pages'));
app.use('/assets', express.static('assets'));
// app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    // const filePath = path.resolve(__dirname, 'pages', 'index.html');
    // res.sendFile(filePath); 
    res.render('index');
});

app.get('/blog', (req, res)=>{
    const blogs = Blog.getAll();
    console.log(blogs);
    // const filePath = path.resolve(__dirname, "pages", "blog.html");
    // res.sendFile(filePath);
    res.render('blog',{blogs});
});

app.get('/contact', (req,res)=>{
    // const filePath = path.resolve(__dirname, "pages", "contact.html");
    // res.sendFile(filePath);
    res.render('contact');
});

app.get('/post',(req, res)=>{
    // const filePath = path.resolve(__dirname, "pages", "post.html");
    // res.sendFile(filePath);
    res.render('post');
});

app.get('/uses', (req, res)=>{
    // const filePath = path.resolve(__dirname, "pages", "uses.html");
    // res.sendFile(filePath);
    res.render('uses');
});

app.post('/contact-form',(req, res)=>{
    console.log(req.body);
    res.redirect('/contact');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} Port`);
}) 

