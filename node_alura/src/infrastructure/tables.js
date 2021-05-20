class Tables {
    init(connection) {
        this.connection = connection;
        console.log ("Tables created!");
    };

    createAtendimentos () {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id INT NOT NULL AUTO_INCREMENT, \
            cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, \
            data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, \
            observacoes TEXT, PRIMARY KEY (id))';
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