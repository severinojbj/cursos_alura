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
    Query: {
        users: (root, args, { dataSources }) => {
          dataSources.usersAPI.getUsers();
        }
        // firstUser: () => arrayUsers [0]
    }
}

module.exports = userResolvers;