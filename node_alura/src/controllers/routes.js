const Atendimento = require ('../models/atendimentos');

module.exports = app => {
    app.get ("/", (req, res) => res.send ("Servidor rodando."));

    app.get ("/atendimentos", (req, res) => res.send ("voce esta na rota de \
        atendimentos, atraves de um metodo GET."));

    app.post("/atendimentos", (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona (atendimento);
        res.send ("POST Atendimento");
        // console.log(req.body);  
        // res.send ("voce esta na rota de atendimentos, atraves de um metodo POST");
    
    });
}

