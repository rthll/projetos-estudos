const express = require('express');
const exphbs = require('express-handlebars')
const PORT = 3000;

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const auth = true
const approved = true

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'aprender js',
            category: 'js',
            body: 'teste',
            comments: 4,
        },
        {
            title: 'aprender kotlin',
            category: 'kotlin',
            body: 'teste',
            comments: 4,
        },
        {
            title: 'aprender php',
            category: 'php',
            body: 'teste',
            comments: 4,
        },
    ]
    res.render('blog', { posts })
})

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