const { projects, clients } = require('../sampleData');

const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLList } = require('graphql')

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
});

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return clients.find((client) => client.id === parent.clientId)
            },
        },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return projects.find(project => project.id === args.id);
            },
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parents, args) {
                return projects
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return clients.find(client => client.id === args.id);
            }
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parents, args) {
                return clients
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})