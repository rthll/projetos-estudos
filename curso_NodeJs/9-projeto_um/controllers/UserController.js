const User = require('../models/User');

const UserController = {
    saveData(req, res) {
        const { nome, idade } = req.body;
        console.log(`Nome: ${nome}, Idade: ${idade}`);

        // Criamos um objeto do tipo User (simulando armazenamento de dados)
        const user = new User(nome, idade);

        // Redirecionamos para home.html passando os dados como query string
        res.redirect(`/home.html?nome=${encodeURIComponent(user.nome)}&idade=${encodeURIComponent(user.idade)}`);
    }
};

module.exports = UserController;
