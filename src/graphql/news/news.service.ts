import { Injectable } from "@graphql-modules/di";
import * as jq from "json-query";
import type { New as NewsI } from '../services/news';


@Injectable()
export default class NewsService {

  constructor() {
    //
  }

  async getAll() {
    return []
  }

  async getByID(noteID: string) { }

  async createNews(note: NewsI) {
    return {}
  }
}
