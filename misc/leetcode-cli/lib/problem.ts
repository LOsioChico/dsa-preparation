import config from "../utils/config.ts";
import Helper from "../utils/helper.ts";
import {
  CodeSnippet,
  ProblemDifficulty,
  problemStatus,
  ProblemStatus,
  QuestionResponse,
} from "../utils/interface.ts";
import Submission from "./submission.ts";

class Problem {
  constructor(
    readonly slug: string,
    public id?: number,
    public title?: string,
    public difficulty?: ProblemDifficulty,
    public likes?: number,
    public dislikes?: number,
    public isLiked?: boolean,
    public isPaidOnly?: boolean,
    public stats?: string,
    public status?: ProblemStatus,
    public topicTags?: Array<string>,
    public codeSnippets?: Array<CodeSnippet>,
    public sampleTestCase?: string,
    public content?: string
  ) {}

  async fetchDetail() {
    const response = (await Helper.GraphQLRequest({
      query: `
                query getQuestionDetail($titleSlug: String!) {
                    question(titleSlug: $titleSlug) {
                        questionId
                        title
                        difficulty
                        likes
                        dislikes
                        isLiked
                        isPaidOnly
                        stats
                        status
                        content
                        topicTags {
                            name
                        }
                        codeSnippets {
                            lang
                            langSlug
                            code
                        }
                        sampleTestCase
                    }
                }
            `,
      variables: {
        titleSlug: this.slug,
      },
    })) as QuestionResponse;

    const question = response.question;
    this.id = question.questionId;
    this.title = question.title;
    this.difficulty = question.difficulty as ProblemDifficulty;
    this.likes = question.likes;
    this.dislikes = question.dislikes;
    this.isLiked = question.isLiked;
    this.isPaidOnly = question.isPaidOnly;
    this.stats = question.stats;
    this.status = problemStatus[question.status] || question.status;
    this.topicTags = question.topicTags.map((tag) => tag.name);
    this.codeSnippets = question.codeSnippets.map((snippet) => ({
      lang: snippet.lang,
      langSlug: snippet.langSlug,
      code: snippet.code,
    }));
    this.sampleTestCase = question.sampleTestCase;
    this.content = question.content;
  }

  async submit(lang: string, code: string) {
    if (!this.id) {
      throw new Error(
        "Problem id is required, please use first the detail method"
      );
    }

    const response = await Helper.HttpRequest({
      method: "POST",
      url: Helper.uris.submit.replace("$slug", this.slug),
      body: {
        lang,
        question_id: this.id,
        typed_code: code,
      },
    }).then((r) => r.json());

    const submission = new Submission(response.submission_id);
    await submission.fetchDetail();
    return submission;
  }
}
export default Problem;
