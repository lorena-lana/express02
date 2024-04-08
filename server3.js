//colocando parc

const express = require ('express');

const app = express();

app.listen(3000,()=>{
    console.log("servidor em execução");
});

app.get('/',(req,res)=>{
    res.send("teste1");
})

//rota com 1 parametro

app.get('/ola/:nome',(req,res)=>{
    res.send("teste2,tudo bem "+req.params.nome+"?");
})


app.get('/ola/:nome',(req,res)=>{
    res.send("teste2,tudo bem "+req.params.nome +"da empresa" +req.params.nome);
})

//rota com soma de dois parametros
app.get('/soma/:a/:b',(req,res)=>{
    res.send("Resultado da soma é "+ (parseInt(req.params.a) +parseInt (req.params.b)));
})