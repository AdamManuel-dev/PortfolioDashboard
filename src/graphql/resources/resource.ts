import { Driver, Helper } from "../services/faunadb";
import type faunadb from "faunadb";
import type { Pagination } from "./resource.type";
type Client = faunadb.Client;

export interface Resource {
  name: string;
  description: string;
  tags: string[];
  status: string;
}

export class ResourceContainer {
  public q: typeof faunadb.query;
  public client: Client;
  public helper: Helper;
  public secret: string;
  public dev: boolean;

  constructor(
    { secret, dev }: { secret?: string; dev?: boolean } = { dev: true }
  ) {
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

  async getResource(id: string) {
    const record = await this.helper.GetRecordInCollection<{
      ref: any;
      data: Resource;
      ts: number;
    }>("resources", id);
    console.log(record);
    return record;
  }

  async createResource(resource: Resource, preserveRef: boolean = false) {
    const newRecord = await this.helper.CreateRecord<{
      ref: any;
      data: Resource;
      ts: number;
    }>("resources", resource);
    if (this.dev) {
      console.log("=== New Record ===");
      console.log(newRecord);
    }
    if (preserveRef) {
      return newRecord;
    } else {
      return {
        ...newRecord,
        ref: newRecord.ref.toString(),
      } as { ref: any; data: Resource; ts: number };
    }
  }

  async updateResource(id: string, update: Partial<Resource>) {
    const recordUpdate = await this.helper.UpdateRecord<Partial<Resource>>(
      "resources",
      id,
      update
    );
    if (this.dev) {
      console.log("=== Record Updated ===");
      console.log(recordUpdate);
    }
    return recordUpdate;
  }

  async replaceResource(id: string, replacement: Resource) {
    const recordReplace = (await this.helper.ReplaceRecord<Resource>(
      "resources",
      id,
      replacement
    )) as any;
    if (this.dev) {
      console.log("=== Record Replaced ===");
      console.log(recordReplace);
    }
    return {
      ...recordReplace,
      ref: recordReplace.ref.toString(),
    };
  }

  async deleteResource(id: string) {
    const response = (await this.helper.DeleteRecord("resources", id)) as any;
    if (this.dev) {
      console.log("=== Record Deleted ===");
      console.log(response);
    }
    return {
      ...response,
      ref: response.ref.toString(),
    };
  }

  async listResources(page: Pagination) {
    const response = await this.helper.ListRecordInIndex(
      "all_resources",
      "resources",
      {
        pageSize:
          page.after === null
            ? Number.parseInt(page.count) + 1
            : Number.parseInt(page.count),
        ...(page.after
          ? {
              after: page.after,
            }
          : {}),
        ...(page.before
          ? {
              before: page.before,
            }
          : {}),
      }
    );
    if (this.dev) {
      console.log("=== List Records ===");
      console.log(response);
    }
    const toReturn = ((response as any[]) || []).map((rec: any) => {
      return {
        ...rec,
        ref: rec.ref.toString(),
      };
    });
    if (page.after) {
      toReturn.shift();
    }
    return toReturn;
  }

  async getByResourceName(name: string, page: Pagination) {
    const response = await this.helper.SearchRecordInIndex(
      "resources_by_name",
      "resources",
      [name],
      {
        pageSize:
          page && page.after === null
            ? Number.parseInt(page.count) + 1
            : Number.parseInt(page.count),
        ...(page.after
          ? {
              after: page.after,
            }
          : {}),
        ...(page.before
          ? {
              before: page.before,
            }
          : {}),
      }
    );
    const toReturn = ((response as any[]) || []).map((rec: any) => {
      return {
        ...rec,
        ref: rec.ref.toString(),
      };
    });
    if (page && page.after) {
      toReturn.shift();
    }
    return toReturn;
  }

  async getByResourceTag(tag: string, page: Pagination) {
    const response = await this.helper.SearchRecordInIndex(
      "resources_by_tags",
      "resources",
      [tag],
      {
        pageSize:
          page.after === null
            ? Number.parseInt(page.count) + 1
            : Number.parseInt(page.count),
        ...(page.after
          ? {
              after: page.after,
            }
          : {}),
        ...(page.before
          ? {
              before: page.before,
            }
          : {}),
      }
    );
    const toReturn = ((response as any[]) || []).map((rec: any) => {
      return {
        ...rec,
        ref: rec.ref.toString(),
      };
    });
    if (page && page.after) {
      toReturn.shift();
    }
    return toReturn;
  }
}
