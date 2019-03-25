import * as path from 'path'
import { GraphQLServer } from 'graphql-yoga'
import { makePrismaSchema, prismaObjectType } from 'nexus-prisma'
import { prisma } from './generated/prisma-client'
import datamodelInfo from './generated/nexus-prisma'

const Query = prismaObjectType({
    name: 'Query',
    definition: t => t.prismaFields(['*'])
})
const Mutation = prismaObjectType({
    name: 'Mutation',
    definition: t => t.prismaFields(['*'])
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

const typeDefs = `
type Query {
    info: String!
}
`

const resolvers = {
    Query: {
       publishedPosts(root, args, context) {
           return context.prisma.posts({ where: { published: true } })
       },
       post(root, args, context) {
           return context.prisma.post({ id: args.postId })
       },
       postsByUser(root, args, context) {
           return context.prisma.user({
               id: args.userId
           }).posts()
       }
    },
    Mutation: {
        createDraft(root, args, context) {
            return context.prisma.createPost(
                {
                    title: args.title,
                    author: {
                        connect: { id: args.userId }
                    }
                },

            )
        },
        publish(root, args, context) {
            return context.prisma.updatePost(
                {
                    where: { id: args.postId },
                    data: { published: true },
                },
            )
        },
        createUser(root, args, context) {
            return context.prisma.createUser(
                { name: args.name },
            )
        }

    },
    User: {
        posts(root, args, context) {
            return context.prisma.user({
                id: root.id
            }).posts()
        }
    },
    Post: {
        author(root, args, context) {
            return context.prisma.post({
                id: root.id
            }).author()
        }
    }
}

const server = new GraphQLServer({
    schema,
    context: { prisma },
    typeDefs,
    resolvers,
})

server.start(() => console.log('Server is running on http://localhost:4000'))