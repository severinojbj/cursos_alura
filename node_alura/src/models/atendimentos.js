const connection = require ('../infrastructure/connection');
const moment = require ('moment')

class Atendimento {
    adiciona (atendimento, res) {
        // const dataCriacao = new Date ();
        const dataCriacao =  moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const dataValid = moment (data).isSameOrAfter(dataCriacao);
        const clientValid = atendimento.cliente.length >= 5;      
        const validation = [
            {
                nome: 'data',
                valido: dataValid,
                mensagem: "Data deve ser maior ou igual a data atual."
            },
            {
                nome: 'cliente',
                valido: clientValid,
                mensagem: "Nome do cliente devecontar no mínimo 5 caracteres."
            }
        ];

        const error = validation.filter (campo => !campo.valido);
        const existErrors = error.length;

        if (!existErrors) {
            const atendimentoDatado = {...atendimento, dataCriacao, data};        
            const sql = 'INSERT INTO Atendimentos SET ?'
            connection.query (sql, atendimentoDatado, (error, result) => {
                if (error) {
                    res.status(400).json (error);
                }            
                else {
                    // console.log ("Novo atendimento criado.")
                    // console.log (result);
                    res.status(201).json (result);
                }
            });
        }
        else {
            res.status(400).json (error);
        }
    }

    lista (res) {
        const sql = 'SELECT * FROM Atendimentos';
        connection.query(sql, (error, result) => {
            if (error) {
                res.status(400).json(error);
            }
            else {
                res.status(201).json (result);
            }
        });
    }

    searchId (id, res) {        
        const sql = `SELECT * FROM Atendimentos WHERE Atendimentos.id=` + id;        
        connection.query(sql, (error, result) => {
            const atendimento = result[0];
            if (error) {
                res.status(400).json(error);
            }
            else {
                res.status(201).json (atendimento);
            }
        });
    }

    update (id, values, res) {
        const sql = `UPDATE Atendimentos SET ? WHERE id=` + id
        values.data = moment(values.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        connection.query(sql, values, (error, result) => {
            if (error) {
                res.status(400).json(error);
            }
            else {
                res.status(200).json (result);
            }
        });
    }
}

module.exports = new Atendimento;