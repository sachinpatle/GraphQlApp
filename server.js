import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { quotes, users } from './fakeDb.js';


//making the Schema. 
//This is the client queries present in the object type Queries.

const typeDefs = gql`
type Query{
    User:[users]
    Quotes:[quotes]
}

type users{
    id:ID
    firstName:String
    lastName:String
    email:String
}

type quotes{
    name:String
    by:ID
}
`

//Making Resolver
//This  will give the response of the client query 
//Here fun is present which gives the response of the schema mapped query

const resolvers = {
    Query: {
        User: () => users,
        Quotes:()=>quotes
    }

   
}

//Creating the Appollo server
//and listen to some port there

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
    console.log("server is ready", url);
});

