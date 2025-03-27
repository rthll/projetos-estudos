const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json()); // Para JSON
app.use(express.urlencoded({ extended: true })); // Para formulário URL-encoded

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/books', (req,res) => {
    const query = `SELECT * FROM books`
    conn.query(query, function(err, data) {
        if(err){
            console.log(err)
            return
        }        

        const books = data;
        console.log(books)
        res.render('books', { books })
    })
    
})

app.get('/book/:id', (req,res) => {
    const id = req.params.id
    const query = `SELECT * FROM books WHERE id = ${id}`
    conn.query(query, function(err, data) {
        if(err){
            console.log(err)
            return
        }        

        const book = data[0];
        console.log(book)
        res.render('book', { book })
    })
    
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    
    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`
    conn.query(query, function(err) {
        if(err){
            console.log(err)
        }
        res.redirect('/books')
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2701',
    database: 'nodemysql2',
})

conn.connect(function(err) {
    if(err){
        console.log(err)
    }

    console.log('Conectado ao MySql')
    app.listen(3000)
})