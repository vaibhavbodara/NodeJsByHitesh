/**
 * For import express we can use two way common js and module js import
 * here we use   const express=require('express'); 
 */
require('dotenv').config()

const express=require('express');
const app=express();
const port = 3000; // server listen on this port

// here we get one request on / route , so we also get different requests on different routes
app.get('/', (req,res)=>{
  res.send('Hello World!');
})

// here get second request on different route
// for adding route always use / before add routname
app.get('/twitter',(req,res)=>{
    res.send('Twitter data')
})

app.get('/login' , (req,res)=>{
    res.send('<h1>Hello</h1>')
})

app.listen(process.env.port,()=>{
    console.log(`Example app listning on port ${port}`);
})
