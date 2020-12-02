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

import { Project } from "./project.type";
import ProjectService from "./project.service";

@Injectable()
@Resolver((of) => Project)
export default class ProjectResolver {
  constructor(
    private readonly noteService: ProjectService
  ) { }

  @Query((returns) => [Project])
  async projects() {
    const notes = await this.noteService.getAll();
    return notes.map((note) => {
      return (note as any) as Project;
    });
  }

  // @FieldResolver({
  //   nullable: true,
  // })
  // async lead(@Root() note: Project) {
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
  // async residence(@Root() note: Project) {
  //   if (!!note && note.context.type === "Lead") {
  //     const response = await this.leadService.getByResidenceID(note.context.id);
  //     console.log(response);
  //     return response[0];
  //   } else {
  //     return (null as unknown) as Lead;
  //   }
  // }
}
