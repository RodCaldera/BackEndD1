const http = require ('http')
const server = http.createServer((request,response)=>{
    response.end('¡Mi primer hola desde backend!')
})

server.listen(8080,()=>{
    console.log('Listening on port 8080')
})
    .on('error',(error)=>{
        console.error('Error in init server on port 8080')
    })