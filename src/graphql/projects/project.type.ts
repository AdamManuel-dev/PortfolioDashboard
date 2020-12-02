import {
  Field,
  FieldResolver,
  ObjectType,
  Int,
  Root,
  InputType,
} from "type-graphql";
import type { Project as ProjectI } from '../services/projects'

@ObjectType()
export class Project implements ProjectI {
  @Field((type) => String, {
    nullable: false
  })
  public name!: string;

  @Field((type) => [String], {
    nullable: false
  })
  languages!: string[];

  @Field((type) => String, {
    nullable: false
  })
  status!: string;

  @Field((type) => String, {
    nullable: false
  })
  public description!: string;

  @Field((type) => Date, {
    nullable: false
  })
  public date!: Date;
}
