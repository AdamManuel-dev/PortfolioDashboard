import { Injectable } from "@graphql-modules/di";
import * as jq from "json-query";
import type { Project as ProjectI } from '../services/projects';


@Injectable()
export default class ProjectService {

  constructor() {
    //
  }

  async getAll() {
    return []
  }

  async getByID(noteID: string) { }

  async createProject(note: ProjectI) {
    return {}
  }
}
