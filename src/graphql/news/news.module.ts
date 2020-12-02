import { GraphQLModule } from "@graphql-modules/core";
import { buildSchemaSync } from "type-graphql";

import NewsResolver from "./news.resolver";
import NewsService from "./news.service";

const resolvers = [NewsResolver] as const;

// @ts-ignore
const NewsModule = new GraphQLModule({
  providers: [NewsService, ...resolvers],
  extraSchemas: [
    buildSchemaSync({
      resolvers,
      orphanedTypes: [],
      container: ({ context }) =>
        NewsModule.injector.getSessionInjector(context),
      skipCheck: false,
    }),
  ],
});

export default NewsModule;
