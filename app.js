const express = require('express');
const m

const app = express();

app.use('/',express.static('public'));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader(
        'Access-Control-Allow-Methods',
        "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.get('/', (req,res)=>{

})

app.listen(3000, ()=>{
    
})