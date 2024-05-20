import { Uris } from "../utils/interface.ts";
import config from "../utils/config.ts";

class Problem {
  static uris: Uris;

  static setUris(uris: Uris): void {
    Problem.uris = uris;
  }

  constructor(public slug: string) {}

  getSubmitUrl() {
    return config.uri.submit.replace("$slug", this.slug);
  }
}
export default Problem;
