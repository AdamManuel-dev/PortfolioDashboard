import {
  Field,
  FieldResolver,
  ObjectType,
  Int,
  Root,
  InputType,
} from "type-graphql";
import type { Blog as BlogI } from '../services/blogs'


@ObjectType()
export class Blog implements BlogI {
  @Field((type) => String, {
    nullable: false
  })
  public name!: string;

  @Field((type) => String, {
    nullable: false
  })
  public description!: string;

  @Field((type) => Date, {
    nullable: false
  })
  public date!: Date;
}
