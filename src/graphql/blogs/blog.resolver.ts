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

import { Blog } from "./blog.type";
import BlogService from "./blog.service";

@Injectable()
@Resolver((of) => Blog)
export default class BlogResolver {
  constructor(
    private readonly noteService: BlogService
  ) { }

  @Query((returns) => [Blog])
  async blogs() {
    const notes = await this.noteService.getAll();
    return notes.map((note) => {
      return (note as any) as Blog;
    });
  }

  // @FieldResolver({
  //   nullable: true,
  // })
  // async lead(@Root() note: Blog) {
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
  // async residence(@Root() note: Blog) {
  //   if (!!note && note.context.type === "Lead") {
  //     const response = await this.leadService.getByResidenceID(note.context.id);
  //     console.log(response);
  //     return response[0];
  //   } else {
  //     return (null as unknown) as Lead;
  //   }
  // }
}
