const connecction = require ('../infrastructure/connection');

class Atendimento {
    adiciona (atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        connecction.query (sql, atendimento, (error, result) => {
            if (error) {
                console.log (error);
            }            
            else {
                console.log ("Novo atendimento criado.")
                console.log (result);
            }
        });
    }
}

module.exports = new Atendimento;