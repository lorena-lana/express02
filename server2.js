const express= require('express');

var morgan = require('morgan')
const server=express();
server.listen(3000);

///criar o arquivo de logs

server.use(morgan('Método = :method | Status= :status |url= :url'));

server.get('/',(req,res)=>{
    res.send("teste")
})