import Submission from "./lib/submission.ts";
import Helper from "./utils/helper.ts";

const start = async () => {
  Helper.configure();

  const submission = new Submission();
  const mySubmissions = await submission.getAllMySubmissions();
  console.log({ mySubmissions });
};

void start();
