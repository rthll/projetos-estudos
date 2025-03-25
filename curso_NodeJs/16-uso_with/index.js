const express = require('express');
const exphbs = require('express-handlebars')
const PORT = 3000;

const app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

const users = {
    "alunos": [
        {
            "name": "José",
            "nota": 7
        },
        {
            "name": "Thiago",
            "nota": 9
        },
        {
            "name": "Pedro",
            "nota": 4
        }
    ]
}

const auth = true
const approved = true

app.get('/post', (req, res) => {
    const post = {
        title: "Aprende JS",
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender JS",
        comments: 4
    }

    res.render('blogpost', { post })
})

app.get('/', (req, res) => {
    const user = {
        name: "Rythielly",
        surname: "Francisco"
    }

    res.render('home', { user: user, auth, approved })
})

const items = [
    "item A", "item B", "item C"
]

app.get('/dashboard', (req, res) => {
    const user = {
        name: "Rythielly",
        surname: "Francisco"
    }

    res.render('dashboard.handlebars', { user: user, items: items } )
})

app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`)
});