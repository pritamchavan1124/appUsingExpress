const { response } = require('express')
const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const routerProduct=require('./routes/product')
//use routerProduct for all the routes starting with /product
app.use('/product', routerProduct)
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/',(request,response)=>{
    response.send('welcome')
})
app.listen(4000,'0.0.0.0',()=>{
    console.log('server is now running on port 4000')
})