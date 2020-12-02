import { Driver, Helper } from "./faunadb";
import type faunadb from "faunadb";
type Client = faunadb.Client

export interface New {
  name: string;
  description: string;
  date: Date;
}

export class NewContainer {
  public q: typeof faunadb.query;
  public client: Client;
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

  async createNew(New: New) {
    const newRecord = await this.helper.CreateRecord<New>("News", New);
    if (this.dev) {
      console.log("=== New Record ===");
      console.log(newRecord);
    }
    return newRecord;
  }

  async updateNew(id: string, update: Partial<New>) {
    const recordUpdate = await this.helper.UpdateRecord<Partial<New>>(
      "News",
      id,
      update
    );
    if (this.dev) {
      console.log("=== Record Updated ===");
      console.log(recordUpdate);
    }
    return recordUpdate;
  }

  async replaceNew(id: string, replacement: New) {
    const recordReplace = await this.helper.ReplaceRecord<New>(
      "News",
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
    const response = await this.helper.DeleteRecord("News", id);
    if (this.dev) {
      console.log("=== Record Deleted ===");
      console.log(response);
    }
    return response;
  }
}
