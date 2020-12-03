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

import { Blog, BlogRecord, BlogRef, Pagination } from "./blog.type";
import { BlogContainer } from "./blogs";

@Injectable()
@Resolver((of) => Blog)
export default class BlogResolver {
  constructor(private readonly blogsService: BlogContainer) {}

  @Query((returns) => [BlogRef])
  async Blogs(
    @Arg("Page", {
      nullable: true,
      defaultValue: {
        count: 10,
        after: null,
        before: null,
      },
    })
    Page: Pagination
  ) {
    return (await this.blogsService.listBlogs(Page)) as BlogRef[];
  }

  @Query((returns) => BlogRef)
  async Blog(
    @Arg("ID", {
      nullable: false,
    })
    ID: string
  ) {
    const blogss = await this.blogsService.getBlog(ID);
    return {
      ...blogss,
      ref: blogss.ref.toString(),
    } as BlogRef;
  }

  @Query((returns) => [BlogRef])
  async BlogByName(
    @Arg("name", {
      nullable: false,
    })
    name: string,
    @Arg("Page", {
      nullable: true,
      defaultValue: {
        count: 10,
        after: null,
        before: null,
      },
    })
    Page: Pagination
  ) {
    const blogss = await this.blogsService.getByBlogName(name, Page);
    console.log(blogss);
    return blogss as BlogRef[];
  }

  @Query((returns) => [BlogRef])
  async BlogByTag(
    @Arg("Tag", {
      nullable: false,
    })
    Tag: string,
    @Arg("Page", {
      nullable: true,
      defaultValue: {
        count: 10,
        after: null,
        before: null,
      },
    })
    Page: Pagination
  ) {
    const blogss = await this.blogsService.getByBlogTag(Tag, Page);
    return blogss as BlogRef[];
  }

  @Mutation((returns) => BlogRef)
  async CreateBlog(
    @Arg("Record", {
      nullable: false,
    })
    Record: BlogRecord
  ) {
    const blogs = await this.blogsService.createBlog(Record);
    return blogs as BlogRef;
  }

  // DEBUG: This is erroring
  // @Mutation((returns) => BlogRef)
  // async ReplaceBlog(
  //   @Arg("ID", {
  //     nullable: false,
  //   })
  //   ID: string,
  //   @Arg("Record", {
  //     nullable: false,
  //   })
  //   Record: Blog
  // ) {
  //   const blogs = await this.blogsService.replaceBlog(ID, Record);
  //   return blogs as BlogRef;
  // }

  @Mutation((returns) => BlogRef)
  async DeleteBlog(
    @Arg("ID", {
      nullable: false,
    })
    ID: string
  ) {
    const blogs = await this.blogsService.deleteBlog(ID);
    return blogs as BlogRef;
  }
}
