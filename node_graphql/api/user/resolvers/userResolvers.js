const { GraphQLScalarType } = require ('graphql');

// const arrayUsers = [
//     {
//       nome: "Ana",
//       ativo: true
//     },
//     {
//       nome: "Marcia",
//       ativo: false
//     }
// ];

const userResolvers = {

    RolesType: {
        ESTUDANTE: "ESTUDANTE",
        DOCENTE: "DOCENTE",
        COODENACAO: "COODENACAO"
    },
    
    Datetime: new GraphQLScalarType ({
        name: 'Datetime',
        description: 'String de data e hora no formato ISO-8611',
        serialize: (value) => value.toISOString(value),
        parseValue: (value) => new Date (value),
        parseLiteral: (ast) => new Date (ast.value)
    }),

    Query: {
        users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
        // firstUser: () => arrayUsers [0]
        user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
    },
    Mutation: {
        addUser: async (root, user, { dataSources }) => 
        {
            console.log (user)
            return dataSources.usersAPI.addUser(user)
        },
        updateUser: (root, user, { dataSources }) => dataSources.usersAPI.updateUser(user),
        deleteUser: (root, { id }, { dataSources }) => dataSources.usersAPI.deleteUser(id)
    }
}

module.exports = userResolvers;