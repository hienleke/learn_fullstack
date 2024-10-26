const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } = require("graphql");
const UserType = require("./userType");
const PostType = require("./postType");
const User = require("../models/user");
const Post = require("../models/post");

const RootQuery = new GraphQLObjectType({
     name: "RootQueryType",
     fields: {
          users: {
               type: new GraphQLList(UserType),
               resolve: async () => {
                    return await User.find();
               },
          },
          posts: {
               type: new GraphQLList(PostType),
               resolve: async () => {
                    return await Post.find();
               },
          },
     },
});

const Mutation = new GraphQLObjectType({
     name: "Mutation",
     fields: {
          addUser: {
               type: UserType,
               args: {
                    username: { type: new GraphQLNonNull(GraphQLString) },
                    email: { type: new GraphQLNonNull(GraphQLString) },
               },
               resolve: async (_, args) => {
                    const user = new User(args);
                    return await user.save();
               },
          },
          updateUser: {
               type: UserType,
               args: {
                    id: { type: new GraphQLNonNull(GraphQLID) },
                    username: { type: GraphQLString },
                    email: { type: GraphQLString },
               },
               resolve: async (_, args) => {
                    return await User.findByIdAndUpdate(args.id, { $set: { username: args.username, email: args.email } }, { new: true });
               },
          },
          deleteUser: {
               type: UserType,
               args: {
                    id: { type: new GraphQLNonNull(GraphQLID) },
               },
               resolve: async (_, args) => {
                    return await User.findByIdAndDelete(args.id);
               },
          },
          addPost: {
               type: PostType,
               args: {
                    title: { type: new GraphQLNonNull(GraphQLString) },
                    content: { type: new GraphQLNonNull(GraphQLString) },
                    userId: { type: new GraphQLNonNull(GraphQLID) },
               },
               resolve: async (_, args) => {
                    const post = new Post({
                         title: args.title,
                         content: args.content,
                         user: args.userId,
                    });
                    return await post.save();
               },
          },
          updatePost: {
               type: PostType,
               args: {
                    id: { type: new GraphQLNonNull(GraphQLID) },
                    title: { type: GraphQLString },
                    content: { type: GraphQLString },
               },
               resolve: async (_, args) => {
                    return await Post.findByIdAndUpdate(args.id, { $set: { title: args.title, content: args.content } }, { new: true });
               },
          },
          deletePost: {
               type: PostType,
               args: {
                    id: { type: new GraphQLNonNull(GraphQLID) },
               },
               resolve: async (_, args) => {
                    return await Post.findByIdAndDelete(args.id);
               },
          },
     },
});

module.exports = new GraphQLSchema({
     query: RootQuery,
     mutation: Mutation,
});
