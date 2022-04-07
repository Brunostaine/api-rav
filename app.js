const express = require('express')
const cors = require('cors');



const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        Mensagem: 'Online',
        msg: 'teste'
    })
})

app.get('/db', (req, res) => {
    res.json({
        nomeAluno: 'Teste',
        p1: 'O aluno consegue desenvolver as atividades?',
        r1: 'sim',
        p2: 'Idade do Aluno',
        r2: '15'
    })
})

app.get('/login', (req, res) => {
    res.json({
        id: '123',
        nome: 'Bruno',
        sobrenome: 'Staine',
        email: 'brunostaine@hotmail.com',
        usuario: 'brunostaine',
        senha: '123'
    })
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT)
})