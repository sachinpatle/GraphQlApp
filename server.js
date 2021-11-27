import {ApolloServer,gql} from 'apollo-server';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';


//making the Schema. 
//This is the client queries present in the object type Queries.
const typeDefs = gql`
type Query{
    greet:String
}`
//Making Resolver
// This  will give the response of the client query 
// Here fun is present which gives the response of the schema mapped query

const resolvers = {
    Query:{

    }
}