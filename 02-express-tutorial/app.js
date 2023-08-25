const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./navbar-app'));

// app.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })


app.all('*',(req,res)=>{
    res.status(404).end('<h1>Page not found</h1>')
})


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...');
})



// app.get('/', (req,res)=>{
//     res.status(200).send('<h1>Home Page</h1><a href="/api/products">Products</a>\n<a href="/about">About</a>');
// })

// app.get('/api/products', (req,res)=>{
//     res.status(200).send('<h1>Products Page</h1><a href="/">Home</a>\n<a href="/about">About</a>');
// })

// app.get('/about', (req,res)=>{
//     //res.send back about page with links for home and products on different lines
//     res.status(200).send('<h1>About Page</h1><a href="/">Home</a>\n<a href="/api/products">Products</a>');
// })

// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>Page not found</h1>');
// })

