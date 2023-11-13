const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: buildSchema(yourGraphQLSchema),
  rootValue: resolvers,
  graphiql: true, // Enable the GraphiQL UI for testing
}));

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
