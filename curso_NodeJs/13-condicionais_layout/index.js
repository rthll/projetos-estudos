const express = require('express');
const exphbs = require('express-handlebars')
const PORT = 3000;

const app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const user = {
        name: "Rythielly",
        surname: "Francisco"
    }

    const auth = false

    res.render('home', { user: user, auth })
})

app.get('/dashboard', (req, res) => {
    const user = {
        name: "Rythielly",
        surname: "Francisco"
    }

    res.render('dashboard.handlebars', { user: user } )
})

app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`)
});