console.log ('Inicio del Programa, Papi')
const fs=require ('fs');
let dateNow= new Date().toString();
fs.writeFile('./fechayhora.txt', dateNow, (error)=>{
    if (error) return console.log('Error al escribir la fecha')
    fs.readFile('./fechayhora.txt', (error, resultado)=>{
        if(error) return console.log('Error al leer la fecha');
        console.log(resultado.toString())
        fs.appendFile('./fechayhora.txt','Nueva fecha', (error)=>{
            if (error) return console.log ('Error al actualizar la hora')
            fs.readFile('./fechayhora.txt', (error, resultado)=>{
                if (error) return console.log ('Error al leer archivo')
                console.log(resultado.toString())
                fs.unlink('./fechayhora.txt',(error)=>{
                    if (error) return console.log('No puede eliminar el archivo, papi')
                })
             })
        })
    })
})
console.log ('¡Qué rico! Lo lograste, papi')