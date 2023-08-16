const express= require('express')
const app = express()
import {getProducts, getProductById} from "productmanager.js"
app.get('/products', (request, response)=>{
    response.send(getProducts)})
app.listen(8080)
