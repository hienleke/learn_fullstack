// graphql/postType.js
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = require("graphql");
const UserType = require("./userType");
const User = require("../models/user");

const PostType = new GraphQLObjectType({
     name: "Post",
     fields: () => ({
          id: { type: GraphQLID },
          title: { type: GraphQLString },
          content: { type: GraphQLString },
          user: {
               type: UserType,
               resolve: async (parent) => {
                    return await User.findById(parent.user);
               },
          },
     }),
});

module.exports = PostType;
