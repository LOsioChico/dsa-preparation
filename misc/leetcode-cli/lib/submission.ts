import { Uris } from "../utils/interface.ts";

class Submission {
  static uris: Uris;

  static setUris(uris: Uris): void {
    Submission.uris = uris;
  }

  constructor() {}
}

export default Submission;
