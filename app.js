const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        Mensagem: 'O banco está funcionando'
    })
})

app.get('/db', (req, res) => {
    res.json({
        p1: 'Qual é o nome do Aluno',
        p2: 'Idade do Aluno'
    })
})

app.get('/login', (req, res) => {
    res.json({
        nome: 'Bruno',
        sobrenome: 'Staine',
        email: 'brunostaine@hotmail.com',
        senha: '123'
    })
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT)
})