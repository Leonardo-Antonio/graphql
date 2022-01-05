const { GraphQLServer } = require("graphql-yoga");
const Query = require("./resolvers/query.js");
const Course = require("./resolvers/course.js");
const Mutation = require("./resolvers/mutation");


const resolvers = {
    Query,
    Course,
    Mutation
}

const context = {
    db: require('./db/data.js')
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: resolvers,
  context: context
});
server.start(() => console.log("server in port :4000"));
