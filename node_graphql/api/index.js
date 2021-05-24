const { ApolloServer } = require('apollo-server');
const { mergeTypeDefs } = require('graphql-tools');

const userSchema = require ('./user/schema/user.graphql');
const userResolvers = require ('./user/resolvers/userResolvers');
// const productSchema = require ();

const typeDefs = [ userSchema ];
const resolvers = [ userResolvers ];

const server = new ApolloServer( { typeDefs, resolvers } );

server.listen({port: 4000}).then ( ({ url }) => {
    console.log (`Servidor ativo na porta ${url}`);
});