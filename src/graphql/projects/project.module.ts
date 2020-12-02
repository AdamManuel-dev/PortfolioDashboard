import { GraphQLModule } from "@graphql-modules/core";
import { buildSchemaSync } from "type-graphql";

import ProjectResolver from "./project.resolver";
import ProjectService from "./project.service";

const resolvers = [ProjectResolver] as const;

// @ts-ignore
const ProjectModule = new GraphQLModule({
  providers: [ProjectService, ...resolvers],
  extraSchemas: [
    buildSchemaSync({
      resolvers,
      orphanedTypes: [],
      container: ({ context }) =>
        ProjectModule.injector.getSessionInjector(context),
      skipCheck: false,
    }),
  ],
});

export default ProjectModule;
