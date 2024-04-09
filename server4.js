const express = require ('express');

const app = express();
app.listen(3000,()=>{
    console.log("servidor em execusão");

})

//dados dos clientes
const clientes=[
    {id:1, nome: "altamiro", telefone: '111111111', email: 'alta@gmail.com'},
    {id:2, nome: "beringenilda", telefone: '222222222', email: 'berin@gmail.com'},
    {id:3, nome: "conegundes", telefone: '333333333', email: 'cone@gmail.com'},
    {id:4, nome: "desidério", telefone: '444444444', email: 'desi@gmail.com'},
    {id:5, nome: "emengardae", telefone: '555555555', email: 'emen@gmail.com'}

]

//rotas

app.get('/',(req,res)=>{
    res.send("API de clientes");
})

app.get('/total_clientes',(req,res)=>{
    res.send("O total de clientes: "+ clientes.length);
})
//rota para apresentar os dados de um cliente específico  

app.get('/clientes/:id',(req,res)=>{
    const cliente =clientes.find(c=> c.id===parseInt(req.params.id))

    if(!cliente)res.status(404).send('cliente não encontrado');

    //o clirntr r

    res.send(`o cliente é : ${cliente.nome},telefone: ${cliente.telefone}e email: ${cliente.email}`);
 
})