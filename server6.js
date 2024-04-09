//incorporara respostas a partir de outros arquivos

const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log("servidor na área man");

})

const funcoes=require('./function.js');

app.get('/add/:a/:b',(req,res)=>{
   const a= parseInt(req.params.a);
   const b= parseInt(req.params.b);
   const resultados= funcoes.add(a,b);
   res.send(`A soma de ${a} e ${b} é igual a ${resultados}`);

})


app.get('/sub/:a/:b',(req,res)=>{
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    const resultados= funcoes.sub(a,b);
    res.send(`A diferença de ${a} e ${b} é igual a ${resultados}`);
 
 })




 app.get('/mult/:a/:b',(req,res)=>{
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    const resultados= funcoes.mult(a,b);
    res.send(`A multiplicação de ${a} e ${b} é igual a ${resultados}`);
 
 })

 app.get('/div/:a/:b',(req,res)=>{
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    const resultados= funcoes.div(a,b);
    res.send(`A divisão de ${a} e ${b} é igual a ${resultados}`);
 
 })