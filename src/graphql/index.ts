import "reflect-metadata";
import { GraphQLModule } from "@graphql-modules/core";
import { ApolloServer } from "apollo-server-express";

import BlogModule from "./blogs/blog.module";
import ProjectModule from "./projects/project.module";
import NewsModule from "./news/news.module";
// import InterestModule from "./interests/interest.module";

const modules = [
	BlogModule,
	ProjectModule,
	NewsModule,
	// InterestModule
];

export const createApolloServer = async (): Promise<ApolloServer> => {
	const { schema } = new GraphQLModule({
		// join other sub-modules
		imports: modules,
	});

	const apolloServer = new ApolloServer({
		schema,
		context: {
			//Injected context goes here
		},
		playground: true,
		introspection: true,
	});

	return apolloServer;
};
