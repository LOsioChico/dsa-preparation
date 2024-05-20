import config from "../utils/config.ts";

class Problem {
  constructor(public slug: string) {}

  getSubmitUrl() {
    return config.uri.submit.replace("$slug", this.slug);
  }
}
export default Problem;
