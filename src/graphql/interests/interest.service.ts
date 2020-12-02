import { Injectable } from "@graphql-modules/di";
import * as jq from "json-query";
import type { Interest as InterestI } from '../services/interests';


@Injectable()
export default class InterestService {

  constructor() {
    //
  }

  async getAll() {
    return []
  }

  async getByID(noteID: string) { }

  async createInterest(note: InterestI) {
    return {}
  }
}
