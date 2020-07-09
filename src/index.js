const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        active: Boolean!
    }

    type Message {
        id: ID!
        title: String!
        content: String!
        author: User!
    }

    type Query {
        hello: String
        users: [User!]!
        getUserByEmail(email: String!): User!
    }

    type Mutation {
        createUser(name: String!, email: String!): User!
    }
`;

const usersList = [
    { id: String(Math.random()), name: 'Samuel', email: 'samuel@mail.com', active: true },
    { id: String(Math.random()), name: 'Francisco', email: 'francisco@mail.com', active: false },
    { id: String(Math.random()), name: 'Neto', email: 'neto@mail.com', active: true },
];

const resolvers = {
    Query: {
        hello: () => 'Hello world',
        users: () => usersList,
        getUserByEmail: (_, args) => {
            return usersList.find((user) => user.email === args.email);
        },
    },
    Mutation: {
        createUser: (_, args) => {
            const newUser = {
                id: String(Math.random()),
                name: args.name,
                email: args.email,
                active: true,
            };
            usersList.push(newUser);
            return newUser;
        }
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server started at ${url}`));