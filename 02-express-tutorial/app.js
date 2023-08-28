const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(express.static('./methods-public'));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth)


app.listen(5000, ()=>{
    console.log('listening on port 5000');
})





// const express = require('express');
// const app = express();
// const logger = require('./logger');

// const {products} = require('./data');

// app.use(logger);

// app.get('/',(req,res)=>{
//     res.status(200).send('Home Page <a href="/products">Products</a>');
// })

// app.get('/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const {id,name,image,price} = product;
//         return {id,name,image,price}
//     })
//     console.log(req.query)
//     res.status(200).json(newProducts);
// })

// app.get('/products/:productID',(req,res)=>{
//     console.log(req.params);
//     const singleProduct = products.find((product)=>product.id === Number(req.params.productID));
//     if(!singleProduct){
//         return res.status(404).send('Product does not exist');
//     }
//     return res.status(200).json(singleProduct);
// })

// app.listen(5000,()=>{
//     console.log('Server is listening on port 5000...');
// })








// // app.use(express.static('./navbar-app'));

// // // app.get('/', (req,res)=>{
// // //     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// // // })


// // app.all('*',(req,res)=>{
// //     res.status(404).end('<h1>Page not found</h1>')
// // })


// // app.listen(5000, ()=>{
// //     console.log('Server is listening on port 5000...');
// // })



// // // app.get('/', (req,res)=>{
// // //     res.status(200).send('<h1>Home Page</h1><a href="/api/products">Products</a>\n<a href="/about">About</a>');
// // // })

// // // app.get('/api/products', (req,res)=>{
// // //     res.status(200).send('<h1>Products Page</h1><a href="/">Home</a>\n<a href="/about">About</a>');
// // // })

// // // app.get('/about', (req,res)=>{
// // //     //res.send back about page with links for home and products on different lines
// // //     res.status(200).send('<h1>About Page</h1><a href="/">Home</a>\n<a href="/api/products">Products</a>');
// // // })

// // // app.all('*',(req,res)=>{
// // //     res.status(404).send('<h1>Page not found</h1>');
// // // })

