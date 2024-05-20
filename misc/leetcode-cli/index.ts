import Leetcode from "./lib/leetcode.ts";
import Problem from "./lib/problem.ts";
import Submission from "./lib/submission.ts";
import Helper from "./utils/helper.ts";

const start = async () => {
  Helper.configure();

  const leetcode = new Leetcode();
  const userData = await leetcode.getUserData();
  console.log("userData", userData);

  const submission = new Submission();
  const mySubmissions = await submission.getAllMySubmissions();
  console.log("mySubmissions", mySubmissions);

  const problem = new Problem("two-sum");
  await problem.fetchDetail();
  console.log("id", problem.id);
  console.log("title", problem.title);
  console.log("difficulty", problem.difficulty);
  console.log("likes", problem.likes);
  console.log("dislikes", problem.dislikes);
  console.log("isLiked", problem.isLiked);
  console.log("isPaidOnly", problem.isPaidOnly);
  console.log("stats", problem.stats);
  console.log("status", problem.status);
  console.log("content", problem.content);
  console.log("topicTags", problem.topicTags);
  console.log("codeSnippets", problem.codeSnippets);
  console.log("sampleTestCase", problem.sampleTestCase);
};

void start();
