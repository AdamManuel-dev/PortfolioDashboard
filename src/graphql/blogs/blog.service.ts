import { Injectable } from "@graphql-modules/di";
import * as jq from "json-query";
import type { Blog as BlogI } from '../services/blogs';


@Injectable()
export default class NoteService {

  constructor() {
    //
  }

  async getAll() {
    return []
  }

  async getByID(noteID: string) { }

  async createNote(note: BlogI) {
    return {}
  }
}
