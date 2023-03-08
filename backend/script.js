/* Inicie um servidor node local em sua máquina utilizando express.

O resultado esperado é imprimir na tela do navegador uma mensagem da sua escolha. */

const express = require('express');
const app = express();

app.listen(3000, ()=>{
    
    console.log('Servidor Online');
})


/*  No diretório backend 
  comando: node script.js
  comando: npm start  */