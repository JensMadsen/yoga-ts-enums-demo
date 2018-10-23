// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { LawResolvers } from "../graphqlgen";

export const Law: LawResolvers.Type = {
  ...LawResolvers.defaultResolvers,

  lawBasedOnLaw: (parent, args) => {
    throw new Error("Resolver not implemented");
  },
  lawIsBaseForLaw: (parent, args) => {
    throw new Error("Resolver not implemented");
  }
};
