import { Driver, Helper } from "./faunadb";
import type faunadb from "faunadb";
type Client = faunadb.Client

export interface Blog {
  name: string;
  description: string;
  date: Date;
}

export class BlogContainer {
  public q: typeof faunadb.query;
  public client: faunadb.Client;
  public helper: Helper;
  public secret: string;
  public dev: boolean;

  constructor({ secret, dev }: { secret?: string; dev?: boolean }) {
    if (!secret) this.secret = "fnAD7kp-3IACAtgFGQyYhIT6lWKbw6ejlg0-fSCw";
    else this.secret = secret;
    if (!dev) this.dev = false;
    else this.dev = dev;

    const { q, client } = new Driver(this.secret);
    const h = new Helper({ q, client });
    this.q = q;
    this.client = client;
    this.helper = h;
  }

  async createBlog(Blog: Blog) {
    const newRecord = await this.helper.CreateRecord<Blog>("Blogs", Blog);
    if (this.dev) {
      console.log("=== New Record ===");
      console.log(newRecord);
    }
    return newRecord;
  }

  async updateBlog(id: string, update: Partial<Blog>) {
    const recordUpdate = await this.helper.UpdateRecord<Partial<Blog>>(
      "Blogs",
      id,
      update
    );
    if (this.dev) {
      console.log("=== Record Updated ===");
      console.log(recordUpdate);
    }
    return recordUpdate;
  }

  async replaceBlog(id: string, replacement: Blog) {
    const recordReplace = await this.helper.ReplaceRecord<Blog>(
      "Blogs",
      id,
      replacement
    );
    if (this.dev) {
      console.log("=== Record Replaced ===");
      console.log(recordReplace);
    }
    return recordReplace;
  }

  async deleteRecord(id: string) {
    const response = await this.helper.DeleteRecord("Blogs", id);
    if (this.dev) {
      console.log("=== Record Deleted ===");
      console.log(response);
    }
    return response;
  }
}
