import {
  Field,
  FieldResolver,
  ObjectType,
  Int,
  Root,
  InputType,
} from "type-graphql";
import type { New as NewsI } from '../services/news'

@ObjectType()
export class News implements NewsI {
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
