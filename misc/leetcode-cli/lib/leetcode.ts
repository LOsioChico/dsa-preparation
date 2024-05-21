import Helper from "../utils/helper.ts";
import Dotenv from "dotenv";
import { UserData } from "../utils/interface.ts";

Dotenv.config();

class Leetcode {
  static async getUserData() {
    return (await Helper.GraphQLRequest({
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
    })) as UserData;
  }
}

export default Leetcode;
