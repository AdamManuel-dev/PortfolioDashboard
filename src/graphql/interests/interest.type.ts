import {
  Field,
  FieldResolver,
  ObjectType,
  Int,
  Root,
  InputType,
} from "type-graphql";
import type { Interest as InterestI } from '../services/interests'

@ObjectType()
export class Interest implements InterestI {
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
