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

import { Interest } from "./interest.type";
import InterestService from "./interest.service";

@Injectable()
@Resolver((of) => Interest)
export default class InterestResolver {
  constructor(
    private readonly noteService: InterestService
  ) { }

  @Query((returns) => [Interest])
  async interests() {
    const notes = await this.noteService.getAll();
    return notes.map((note) => {
      return (note as any) as Interest;
    });
  }

  // @FieldResolver({
  //   nullable: true,
  // })
  // async lead(@Root() note: Interest) {
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
  // async residence(@Root() note: Interest) {
  //   if (!!note && note.context.type === "Lead") {
  //     const response = await this.leadService.getByResidenceID(note.context.id);
  //     console.log(response);
  //     return response[0];
  //   } else {
  //     return (null as unknown) as Lead;
  //   }
  // }
}
