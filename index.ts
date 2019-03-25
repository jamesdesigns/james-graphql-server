import * as path from 'path'
import { GraphQLServer } from 'graphql-yoga'
import { makePrismaSchema, prismaObjectType } from 'nexus-prisma'
import { prisma } from './generated/prisma-client'
import datamodelInfo from './generated/nexus-prisma'


const Query = prismaObjectType({
    name: 'Query',
    definition: t => t.prismaFields(['product'])
})
const Mutation = prismaObjectType({
    name: 'Mutation',
    definition: t => t.prismaFields(['createProduct'])
})

const schema = makePrismaSchema({
    types: [Query, Mutation],

    prisma: {
        datamodelInfo,
        client: prisma
    },

    outputs: {
        schema: path.join(__dirname, './generated/schema.graphql'),
        typegen: path.join(__dirname, './generated/nexus.ts'),
    },
})

// const typeDefs = `
// type Query {
//     info: String!
// }
// `

// const resolvers = {
//     Query: {
//         info: () => `This is the API of SpaceX`
//     }
// }


// const server = new GraphQLServer({
//     typeDefs: 'datamodel.prisma',
//     resolvers,
//     context: { prisma }
// })

const server = new GraphQLServer({
    schema,
    context: { prisma }
    // typeDefs,
    // resolvers,
})

server.start(() => console.log('Server is running on http://localhost:4000'))