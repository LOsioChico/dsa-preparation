import Helper from "../utils/helper.ts";
import {
  SubmissionResponse,
  AllSubmissionsResponse,
  ProblemDifficulty,
  SubmissionStatus,
  submissionStatus,
  CheckStatusResponse,
  CheckStatusStatus,
} from "../utils/interface.ts";

class Submission {
  public title?: string;
  public titleSlug?: string;
  public status?: SubmissionStatus;
  public statusDisplay?: string;
  public lang?: string;
  public langName?: string;
  public runtime?: string;
  public timestamp?: number;
  public url?: string;
  public isPending?: boolean;
  public memory?: number;
  public hasNotes?: boolean;
  public notes?: string;
  public flagType?: string;
  public topicTags?: Array<string>;
  public code?: string;

  static async getAllMySubmissions({
    page = 1,
    perPage = 20,
    lastKey = "",
  } = {}) {
    return await Helper.HttpRequest({
      method: "GET",
      url: `${Helper.uris.allMySubmissions}?offset=${page * perPage}&limit=${perPage}&lastKey=${lastKey}`,
      referer: Helper.uris.base,
    }).then((res) => res.json() as Promise<AllSubmissionsResponse>);
  }

  constructor(public id: number) {}

  async fetchDetail() {
    const response = (await Helper.GraphQLRequest({
      query: `
              query submissionDetails($submissionId: Int!) {
                submissionDetails(submissionId: $submissionId) {
                  runtime
                  runtimeDisplay
                  runtimePercentile
                  runtimeDistribution
                  memory
                  memoryDisplay
                  memoryPercentile
                  memoryDistribution
                  code
                  timestamp
                  statusCode
                  user {
                    username
                    profile {
                      realName
                      userAvatar
                    }
                  }
                  lang {
                    name
                    verboseName
                  }
                  question {
                    title
                    questionId
                    titleSlug
                    hasFrontendPreview
                  }
                  notes
                  flagType
                  topicTags {
                    tagId
                    slug
                    name
                  }
                  runtimeError
                  compileError
                  lastTestcase
                  codeOutput
                  expectedOutput
                  totalCorrect
                  totalTestcases
                  fullCodeOutput
                  testDescriptions
                  testBodies
                  testInfo
                  stdOutput
                }
              }
      `,
      variables: {
        submissionId: this.id,
      },
    })) as SubmissionResponse;

    const submission = response.submissionDetails;
    this.title = submission.question.title;
    this.titleSlug = submission.question.titleSlug;
    this.lang = submission.lang.name;
    this.langName = submission.lang.verboseName;
    this.memory = submission.memory || 0;
    this.runtime = submission.runtime;
    this.status = submissionStatus[submission.statusCode] || "Status not found";
    this.statusDisplay = submission.runtimeDisplay;
    this.code = submission.code;
    this.timestamp = submission.timestamp;
    this.notes = submission.notes;
    this.flagType = submission.flagType;
    this.topicTags = submission.topicTags.map((t: { name: string }) => t.name);
  }

  async checkStatus(): Promise<CheckStatusResponse> {
    const response = await Helper.HttpRequest({
      method: "GET",
      url: Helper.uris.checkStatus.replace("$id", this.id.toString()),
    }).then((r) => r.json() as Promise<CheckStatusResponse>);

    if (response.state !== "SUCCESS") return await this.checkStatus();
    else return response;
  }
}

export default Submission;
