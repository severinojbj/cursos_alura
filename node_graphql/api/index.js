const { ApolloServer } = require('apollo-server');
const { mergeTypeDefs } = require('graphql-tools');

const userSchema = require ('./user/schema/user.graphql');
const userResolvers = require ('./user/resolvers/userResolvers');
const UsersAPI = require ('./user/datasource/user');
// const productSchema = require ();

const typeDefs = [ userSchema ];
const resolvers = [ userResolvers ];

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    dataSources: () => {
        return {
            usersAPI: new UsersAPI ()
        }
    } 
});

server.listen({port: 4000}).then ( ({ url }) => {
    console.log (`Servidor ativo na porta ${url}`);
});