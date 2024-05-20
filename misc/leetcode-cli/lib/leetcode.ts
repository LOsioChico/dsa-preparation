import Helper from "../utils/helper.ts";
import Dotenv from "dotenv";

Dotenv.config();

class Leetcode {
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
