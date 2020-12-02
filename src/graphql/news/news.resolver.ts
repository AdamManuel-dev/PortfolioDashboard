import { Injectable } from "@graphql-modules/di";
import {
  Resolver,
  Query,
  Arg,
  Mutation,
  Args,
  FieldResolver,
  Root,
} from "type-graphql";

import { News } from "./news.type";
import NewsService from "./news.service";

@Injectable()
@Resolver((of) => News)
export default class NewsResolver {
  constructor(
    private readonly noteService: NewsService
  ) { }

  @Query((returns) => [News])
  async news() {
    const notes = await this.noteService.getAll();
    return notes.map((note) => {
      return (note as any) as News;
    });
  }

  // @FieldResolver({
  //   nullable: true,
  // })
  // async lead(@Root() note: News) {
  //   if (!!note && note.context.type === "Lead") {
  //     const response = await this.leadService.getLeadByID(note.context.id);
  //     console.log(response);
  //     return response[0];
  //   } else {
  //     return (null as unknown) as Lead;
  //   }
  // }

  // @FieldResolver({
  //   nullable: true,
  // })
  // async residence(@Root() note: News) {
  //   if (!!note && note.context.type === "Lead") {
  //     const response = await this.leadService.getByResidenceID(note.context.id);
  //     console.log(response);
  //     return response[0];
  //   } else {
  //     return (null as unknown) as Lead;
  //   }
  // }
}
