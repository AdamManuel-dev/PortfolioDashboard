import { Driver, Helper } from "./faunadb";
import type faunadb from "faunadb";
type Client = faunadb.Client

export interface Project {
  name: string;
  languages: string[];
  description: string;
  status: string;
  date: Date;
}

export class ProjectContainer {
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

  async createProject(project: Project) {
    const newRecord = await this.helper.CreateRecord<Project>(
      "Projects",
      project
    );
    if (this.dev) {
      console.log("=== New Record ===");
      console.log(newRecord);
    }
    return newRecord;
  }

  async updateProject(id: string, update: Partial<Project>) {
    const recordUpdate = await this.helper.UpdateRecord<Partial<Project>>(
      "Projects",
      id,
      update
    );
    if (this.dev) {
      console.log("=== Record Updated ===");
      console.log(recordUpdate);
    }
    return recordUpdate;
  }

  async replaceProject(id: string, replacement: Project) {
    const recordReplace = await this.helper.ReplaceRecord<Project>(
      "Projects",
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
    const response = await this.helper.DeleteRecord("Projects", id);
    if (this.dev) {
      console.log("=== Record Deleted ===");
      console.log(response);
    }
    return response;
  }
}
