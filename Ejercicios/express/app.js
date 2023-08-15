import express from 'express'
const app=express()
app.get('/saludo', (req, res)=>{
    res.send('Hola a todos pero desde express!)
})
app.listen(8080,()=>console.log('Servidor arriba desde el puerto 8080'))