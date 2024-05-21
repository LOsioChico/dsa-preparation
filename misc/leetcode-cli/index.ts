import fs from "node:fs/promises";
import { execSync } from "node:child_process";
import * as clack from "@clack/prompts";
import Helper from "./utils/helper.ts";
import Problem from "./lib/problem.ts";
import { exit } from "node:process";

const start = async () => {
  Helper.configure();

  clack.intro(
    "\x1b[46m\x1b[30m" +
      " LeetCode Solutions Submit - Luis Osio Chico " +
      "\x1b[0m"
  );
  clack.note(
    "Thanks for using my project, if you like it, please give it a star on GitHub! ⭐"
  );

  if (!Helper.session || !Helper.csrfToken) {
    clack.cancel("[!] Check the .env file and try again");
    exit(1);
  }

  const languages = await getLanguages();
  const language = (await clack.select({
    message: "Please select the language you want to use:",
    options: [
      ...languages.map((language) => ({
        value: language.toLowerCase(),
        label: language,
      })),
    ],
  })) as string;

  try {
    execSync(`cd ../../${language}`, { stdio: "ignore" });
  } catch {
    clack.cancel(
      "[!] Language not found, check the README.md or if its a error open a issue ⭐"
    );
    exit(1);
  }

  const exercise = await clack.text({
    message: "Please enter the exercise you want to run:",
    placeholder: "two-sum",
    validate: (input) => {
      if (input.length === 0) return "Please enter a valid command: [exercise]";

      try {
        console.log(`cd ../../${language}/${input}`);
        execSync(`cd ../../${language}/${input}`, { stdio: "ignore" });
      } catch {
        return "[!] Exercise not found, check the README.md or if its a error open a issue ⭐";
      }
    },
  });

  if (typeof exercise !== "string") {
    clack.cancel(
      "[!] Exiting... Please try again, if you have any issues open a issue ⭐"
    );
    exit(1);
  }

  const confirm = await clack.confirm({
    message: `Are you sure you want to submit the exercise '${exercise}' in the language '${language}'?`,
  });

  if (confirm !== true) {
    clack.cancel(
      "[!] Exiting... Please try again, if you have any issues open a issue ⭐"
    );
    exit(1);
  }

  const lang = Helper.languageToLeetCodeLang[language];
  if (!lang) {
    clack.cancel(
      "[!!] Language not found, check the README.md or if its a error open a issue ⭐"
    );
    exit(1);
  }

  const submitCodeSpinner = clack.spinner();

  submitCodeSpinner.start("Submitting code...");
  const code = await fs.readFile(
    `../../${language}/${exercise}/practice.${Helper.languageExtensions[language]}`,
    "utf-8"
  );
  const codeToSubmit = await getCodeToSubmit(code, language);
  const problem = new Problem(exercise);
  await problem.fetchDetail();
  const status = await problem.submit(lang, codeToSubmit);
  submitCodeSpinner.stop();

  let message = `Status: ${status.status_msg} ${status.status_msg === "Accepted" ? "⭐" : " "}
   Elapsed Time: ${status.elapsed_time} ms
   Tests: ${status.total_correct}/${status.total_testcases}`;

  if (status.status_code === 10) {
    message += `
   Runtime: ${status.status_runtime}
   Runtime Percentile: ${Math.round(status.runtime_percentile)}%
   Memory: ${status.status_memory}
   Memory Percentile: ${Math.round(status.memory_percentile)}%`;
  } else {
    clack.cancel(`Not Accepted :(, please try again with the test cases`);
  }

  clack.outro(message);
  clack.outro(
    "Thanks for using my project, if you like it, please give it a star on GitHub! ⭐"
  );
};

const getLanguages = async () => {
  const readme = await fs.readFile("../../README.md", "utf-8");
  if (!readme) {
    clack.cancel("README.md not found");
    exit(1);
  }

  const table = readme
    .split("## Languages")[1]
    .split("## Usage")[0]
    .split("\r\n");
  const lines = table.filter((line) => line.trim().length > 0).splice(2);
  const languages = lines.map(
    (line) => line.split("|").map((l) => l.trim())[1]
  );

  return languages;
};

const getCodeToSubmit = async (code: string, language: string) => {
  const isBracketsBalanced = areBracketsBalanced(code);
  if (!isBracketsBalanced) {
    clack.cancel("[!] Code is not valid, check the brackets");
    exit(1);
  }

  if (language === "scala" && code.includes("return")) {
    clack.cancel(
      "[!] Please don't use return in Scala, LeetCode will not accept it :("
    );
    exit(1);
  }

  const lastBracket = code.split("*/")[1].lastIndexOf("}");
  const codeToSubmit = code
    .split("*/")[1]
    .slice(0, lastBracket + 1)
    .replace("Practice", "Solution");

  return codeToSubmit;
};

const areBracketsBalanced = (code: string) => {
  let openBrackets = 0;
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "{") {
      openBrackets++;
    } else if (code[i] === "}") {
      openBrackets--;
    }
  }

  return openBrackets === 0;
};

void start();
