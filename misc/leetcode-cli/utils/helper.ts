import { GraphQLClient } from "graphql-request";
import Dotenv from "dotenv";
import config from "./config.ts";
import {
  GraphQLRequestOptions,
  HttpRequestOptions,
  Uris,
} from "./interface.ts";

class Helper {
  static session: string;
  static csrfToken: string;
  static uris: Uris;

  static configure(): void {
    const uris: Uris = config.uri;
    this.uris = uris;

    Dotenv.config();
    this.session = process.env.LEETCODE_SESSION || "";
    this.csrfToken = process.env.LEETCODE_CSRF_TOKEN || "";
  }

  static async HttpRequest(options: HttpRequestOptions): Promise<Response> {
    return await fetch(options.url, {
      method: options.method || "GET",
      headers: {
        Cookie:
          Helper.session && Helper.csrfToken
            ? `LEETCODE_SESSION=${Helper.session}; csrftoken=${Helper.csrfToken};`
            : "",
        "X-CSRFToken": Helper.csrfToken || "",
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
        Cookie: `LEETCODE_SESSION=${Helper.session};csrftoken=${Helper.csrfToken};`,
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": Helper.csrfToken,
      },
    });
    return await client.request(options.query, options.variables || {});
  }

  static languageToLeetCodeLang: Record<string, string> = {
    typescript: "typescript",
    scala: "scala",
  };

  static languageExtensions: Record<string, string> = {
    typescript: "ts",
    scala: "scala",
  };

  static languageFileExtension: Record<string, Record<string, string>> = {
    typescript: {
      exercise: "ts",
      test: "test.ts",
    },
    scala: {
      exercise: "scala",
      test: "test.scala",
    },
  };

  static startFilePracticeCode = (language: string, packageName?: string) => {
    const code: Record<string, string | undefined> = {
      scala: `//> using scala "3.3.1"\n\npackage ${packageName}`,
    };

    return code[language];
  };

  static endFilePracticeCode = (language: string, codeRaw?: string) => {
    const code: Record<string, () => string> = {
      typescript: () => {
        const functionName = codeRaw?.split("function ")[1].split("(")[0];
        return `export default ${functionName};`;
      },
    };

    return code[language]?.();
  };
}

export default Helper;
