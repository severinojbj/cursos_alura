const { RESTDataSource } = require ('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
    constructor () {
        super ();
        this.baseURL = 'http://localhost:3000'
    }

    async getUsers () {
        const users = await this.get('/users');
        users.map (async user => ({
            id: user.id,
            nome: user.nome,
            email: user.email,
            role: await this.get('roles' + user.role)
        }));
    }

    async getUserById (id) {
        const user = this.get('/users/' + id);
        user.role = await this.get('roles' + user.role);
        return user;
    }
}

module.exports = UsersAPI;