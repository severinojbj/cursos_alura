class Tables {
    init(connection) {
        // this.conexao = conexao;
        console.log ("Tables created!");
    };

    createAtendimentos () {
        const sql = 'CREATE TABLE Atendimentos (id int NOT NULL AUTO_INCREMENT,\
            cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL,\
            status varhar(20) NOT NULL, observacoes TEXT, PRIMARY KEY (id))';
        this.connection.query(sql, (error) => {
            if (error) {
                console.log (error);
            }
            else {
                console.log ("Table Atendimentos created!");
            }
        });
    }
}

module.exports = new Tables;