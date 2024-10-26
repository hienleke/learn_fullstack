const express = require("express");
const bodyParser = require("body-parser");
const schema = require("../graphql/schema");
const { graphqlHTTP } = require("express-graphql");

function createServer() {
     const app = express();
     //console.log("graphqlHTTP: ", graphqlHTTP);
     app.use(bodyParser.json());
     // app.use("/api", commentRoutes);
     // app.use("/api", authRoutes);
     app.use(
          "/graphql",
          graphqlHTTP({
               schema: schema,
               graphiql: true,
          })
     );

     return app;
}

module.exports = createServer;
