import { GraphQLModule } from "@graphql-modules/core";
import { buildSchemaSync } from "type-graphql";

import BlogResolver from "./blog.resolver";
import BlogService from "./blog.service";

const resolvers = [BlogResolver] as const;

// @ts-ignore
const BlogModule = new GraphQLModule({
  providers: [BlogService, ...resolvers],
  extraSchemas: [
    buildSchemaSync({
      resolvers,
      orphanedTypes: [],
      container: ({ context }) =>
        BlogModule.injector.getSessionInjector(context),
      skipCheck: false,
    }),
  ],
});

export default BlogModule;
