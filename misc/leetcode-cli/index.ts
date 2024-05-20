import Leetcode from "./lib/leetcode.ts";

const start = async () => {
  const leetcode = new Leetcode();
  const userData = await leetcode.getUserData();
  console.log({ userData });
};

void start();
