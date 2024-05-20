import fs from "node:fs/promises";
import { execSync } from "node:child_process";
import * as clack from "@clack/prompts";
import Helper from "./utils/helper.ts";
import Problem from "./lib/problem.ts";

const start = async () => {
  Helper.configure();

  clack.intro(
    "\x1b[46m\x1b[30m" +
      " LeetCode Solutions Submit - Luis Osio Chico " +
      "\x1b[0m"
  );
  clack.note(
    "Thanks for using my project, if you like it, please give it a star on GitHub!"
  );

  if (!Helper.session || !Helper.csrfToken) {
    clack.outro("[!] Check the .env file and try again");
    return;
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
    return clack.outro(
      "[!] Language not found, check the README.md or if its a error open a issue ⭐"
    );
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
    return clack.outro(
      "[!] Exiting... Please try again, if you have any issues open a issue ⭐"
    );
  }

  const confirm = await clack.confirm({
    message: `Are you sure you want to submit the exercise '${exercise}' in the language '${language}'?`,
  });

  if (confirm !== true) {
    clack.outro(
      "[!] Exiting... Please try again, if you have any issues open a issue ⭐"
    );
    return;
  }

  const lang = Helper.languageToLeetCodeLang[language];
  if (!lang) {
    clack.outro(
      "[!!] Language not found, check the README.md or if its a error open a issue ⭐"
    );
    return;
  }

  const submitCodeSpinner = clack.spinner();

  submitCodeSpinner.start("Submitting code...");
  const code = await fs.readFile(
    `../../${language}/${exercise}/practice.${Helper.languageExtensions[language]}`,
    "utf-8"
  );
  const codeToSubmit = await getCodeToSubmit(code);
  const problem = new Problem(exercise);
  await problem.fetchDetail();
  const status = await problem.submit(lang, codeToSubmit);
  submitCodeSpinner.stop();

  console.log(status);
};

const getLanguages = async () => {
  const readme = await fs.readFile("../../README.md", "utf-8");
  if (!readme) throw new Error("README.md not found");

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

const getCodeToSubmit = async (code: string) => {
  const isBracketsBalanced = areBracketsBalanced(code);
  if (!isBracketsBalanced) {
    clack.outro("[!] Code is not valid, check the brackets");
    throw new Error("[!] Code is not valid, check the brackets");
  }

  const lastBracket = code.split("*/")[1].lastIndexOf("}");
  const codeToSubmit = code.split("*/")[1].slice(0, lastBracket + 1);
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
