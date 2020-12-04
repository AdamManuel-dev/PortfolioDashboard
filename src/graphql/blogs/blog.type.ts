import {
  Field,
  FieldResolver,
  ObjectType,
  Int,
  Root,
  InputType,
} from "type-graphql";
import type { Blog as BlogI } from "./blogs";

@ObjectType()
export class Blog implements BlogI {
  @Field((type) => String, {
    nullable: false,
  })
  public name!: string;

  @Field((type) => String, {
    nullable: false,
  })
  public description!: string;

  @Field((type) => [String], {
    nullable: false,
  })
  public tags!: string[];

  @Field((type) => [String], {
    nullable: false,
  })
  sections!: string[];

  @Field((type) => [String], {
    nullable: false,
  })
  content!: string[];
}

@InputType()
export class BlogRecord {
  @Field((type) => String, {
    nullable: false,
  })
  public name!: string;

  @Field((type) => String, {
    nullable: false,
  })
  public description!: string;

  @Field((type) => [String], {
    nullable: false,
  })
  public tags!: string[];

  @Field((type) => [String], {
    nullable: false,
  })
  sections!: string[];

  @Field((type) => [String], {
    nullable: false,
  })
  content!: string[];
}

@ObjectType()
export class BlogRef {
  @Field((type) => String, {
    nullable: false,
  })
  ref!: string;

  @Field((type) => Number, {
    nullable: false,
  })
  ts!: number;

  @Field((type) => Blog, {
    nullable: false,
  })
  data!: Blog;
}

@InputType()
export class Pagination {
  @Field((type) => Number, {
    nullable: false,
  })
  public count!: string;

  @Field((type) => String, {
    nullable: true,
    defaultValue: null,
  })
  before!: string | null;

  @Field((type) => String, {
    nullable: true,
    defaultValue: null,
  })
  after!: string | null;
}
