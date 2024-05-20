import Helper from "../utils/helper.ts";
import { Uris } from "../utils/interface.ts";
import Dotenv from "dotenv";

Dotenv.config();

class Leetcode {
  session: string;
  csrfToken: string;
  static uris: Uris;

  static setUris(uris: Uris): void {
    Leetcode.uris = uris;
  }

  constructor() {
    this.session = process.env.LEETCODE_SESSION || "";
    this.csrfToken = process.env.LEETCODE_CSRF_TOKEN || "";
    this.configure();
  }

  configure(): void {
    Helper.setCredit({
      session: this.session,
      csrfToken: this.csrfToken,
    });

    Helper.addGlobalUris();
  }

  async getUserData() {
    const response = (await Helper.GraphQLRequest({
      query: `
              query globalData {
                  userStatus {
                      userId
                      isSignedIn
                      isMockUser
                      isPremium
                      isVerified
                      username
                      avatar
                      isAdmin
                      isSuperuser
                      permissions
                      isTranslator
                      activeSessionId
                      checkedInToday
                      notificationStatus {
                          lastModified
                          numUnread
                      }
                  }
              }
            `,
    })) as { userStatus: string };
    return response.userStatus;
  }
}

export default Leetcode;
