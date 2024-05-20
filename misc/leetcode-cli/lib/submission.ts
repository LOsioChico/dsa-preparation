import Helper from "../utils/helper.ts";
import { SubmissionsResponse } from "../utils/interface.ts";

class Submission {
  constructor() {}

  async getAllMySubmissions({ page = 1, perPage = 20, lastKey = "" } = {}) {
    return await Helper.HttpRequest({
      method: "GET",
      url: `${Helper.uris.allMySubmissions}?offset=${page * perPage}&limit=${perPage}&lastKey=${lastKey}`,
      referer: Helper.uris.base,
    }).then((res) => res.json() as Promise<SubmissionsResponse>);
  }
}

export default Submission;
