import express from 'express'
require ('productManager.js')
const app = express()
app.get('/products', (request, response)=>{
    response.send('products.json')
}