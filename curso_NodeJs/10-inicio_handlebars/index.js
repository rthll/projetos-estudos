const express = require('express');
const exphbs = require('express-handlebars')
const PORT = 3000;

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', { layout: false} )
})

app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`)
});