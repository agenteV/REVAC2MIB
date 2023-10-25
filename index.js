const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app = express();

const port = 3000

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

app.post("/cadastro",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    if(email == null || password == null){
        return res.status(400).json({error : "Digite os campos corretamente!"})
    }
    console.log(email);
    console.log(password)
    
    res.json({error : null, msg : "Teste feito com sucesso"})
    
})

//LOCALHOST NA PAGINA
app.get("/",async(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})


app.listen(port, ()=>{
    console.log(`O servidor esta rodando na porta ${port}`)
})




