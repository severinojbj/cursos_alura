const customExpress = require ('./config/customExpress');
const connection = require ('./infrastructure/connection');
const tables = require ('./infrastructure/tables');

connection.connect((err) => {
    if (err) {
        console.log (err);
    }
    else {
        console.log ("Connection DB success!!!");

        tables.init(connection);
        tables.createAtendimentos();
        const app = customExpress ();
        app.listen (3000, () => console.log("servidor rodando na porta 3000"));
    }
});


