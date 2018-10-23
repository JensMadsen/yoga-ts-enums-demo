import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
require('dotenv').config()
//import { cors } from 'cors'



const prisma = new Prisma({
    endpoint: 'http://localhost:4466',
    secret: 'penis',
    debug: true,
})

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        db: prisma,
    },
} as any)

//server.express.use('/*', cors()) // allow cors

server.start(() => console.log('Server is running on:' + process.env.GRAPHQL_SERVER_ENDPOINT))
