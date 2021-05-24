const Atendimento = require ('../models/atendimentos');

module.exports = app => {
    app.get ("/", (req, res) => res.send ("Servidor rodando."));

    app.get ("/atendimentos", (req, res) => {
        Atendimento.lista(res);
    });

    app.get ("/atendimentos/:id", (req, res) => {
        // console.log (req.params);
        // res.send("Ok");
        Atendimento.searchId (req.params.id, res);
    });

    app.post("/atendimentos", (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona (atendimento, res);
        // res.send ("POST Atendimento");
        // console.log(req.body);  
        // res.send ("voce esta na rota de atendimentos, atraves de um metodo POST");
    
    });

    app.patch("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;
        Atendimento.update (id, values, res);
    });

    app.delete ("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.delete (id, res);
    });
}

