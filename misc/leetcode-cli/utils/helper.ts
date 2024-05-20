import { GraphQLClient } from "graphql-request";
import config from "./config.ts";
import Leetcode from "../lib/leetcode.ts";
import Problem from "../lib/problem.ts";
import Submission from "../lib/submission.ts";
import {
  Credit,
  GraphQLRequestOptions,
  HttpRequestOptions,
  Uris,
} from "./interface.ts";

class Helper {
  static credit: Credit;
  static uris: Uris;

  static setCredit(credit: Credit): void {
    Helper.credit = credit;
  }

  static setUris(uris: Uris): void {
    Helper.uris = uris;
  }

  static async HttpRequest(options: HttpRequestOptions): Promise<Response> {
    return await fetch(options.url, {
      method: options.method || "GET",
      headers: {
        Cookie: Helper.credit
          ? `LEETCODE_SESSION=${Helper.credit.session}; csrftoken=${Helper.credit.csrfToken};`
          : "",
        "X-CSRFToken": Helper.credit ? Helper.credit.csrfToken : "",
        "X-Requested-With": "XMLHttpRequest",
        Referer: options.referer || Helper.uris.base,
        "upgrade-insecure-requests": "1",
      },
      body: JSON.stringify(options.body) || null,
    });
  }

  static async GraphQLRequest(options: GraphQLRequestOptions) {
    const client = new GraphQLClient(Helper.uris.graphql, {
      headers: {
        Origin: options.origin || Helper.uris.base,
        Referer: options.referer || Helper.uris.base,
        Cookie: `LEETCODE_SESSION=${Helper.credit.session};csrftoken=${Helper.credit.csrfToken};`,
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": Helper.credit.csrfToken,
      },
    });
    return await client.request(options.query, options.variables || {});
  }

  static addGlobalUris(): void {
    const uris: Uris = config.uri;
    Helper.setUris(uris);
    Leetcode.setUris(uris);
    Problem.setUris(uris);
    Submission.setUris(uris);
  }
}

export default Helper;
