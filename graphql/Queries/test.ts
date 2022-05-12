import { GraphQLString, GraphQLInt } from "graphql";

const addition = {
  type: GraphQLString,
  args: {
    firstNumber: { type: GraphQLInt },
    secondNumber: { type: GraphQLInt },
  },
  resolve(parent: any, args: any) {
    return args.firstNumber + args.secondNumber;
  },
};

export default addition;
