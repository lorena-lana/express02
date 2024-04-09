const express = require ('express');

const app = express();
app.listen(3000,()=>{
    console.log("servidor em execusão");

})

//rota base
app.get('/', (req,res)=>{
    res.send("teste  com aparâmetros");
})



//rotas

app.get('/distancia/:pontoA-:pontoB', (req,res)=>{
    const pontoA=req.params.pontoA;
    const pontoB=req.params.pontoB;
    const distancia=pontoB-pontoA;
    res.send(`a distancia entre, usando hífem, entre ${pontoA} e ${pontoB} é ${distancia}`);

})

//rotas com ponto

app.get('/distancia/:pontoA.:pontoB', (req,res)=>{
    const pontoA=req.params.pontoA;
    const pontoB=req.params.pontoB;
    const distancia=pontoB-pontoA;
    res.send(`a distancia entre, usando hífem, entre ${pontoA} e ${pontoB} é ${distancia}`);

})
