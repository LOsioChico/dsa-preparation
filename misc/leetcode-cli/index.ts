import fs from "node:fs/promises";
import { execSync } from "node:child_process";
import * as clack from "@clack/prompts";
import Helper from "./utils/helper.ts";

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

  const exercise = (await clack.text({
    message: "Please enter the exercise you want to run:",
    placeholder: "two-sum",
    validate: (input) => {
      if (input.length === 0) return "Please enter a valid command: [exercise]";
    },
  })) as string;

  try {
    const excludedFolders = [".idx", ".vscode", "misc"];
    if (excludedFolders.some((folder) => language.includes(folder)))
      throw Error("Excluded folder");

    execSync(`cd ../.././${language}`);
  } catch {
    return "Please enter a valid language: [typescript, scala, etc]";
  }

  try {
    execSync(`cd ../.././${language}/${exercise}`);
  } catch {
    return "Exercise not found, please open a PR to add it";
  }

  const confirm = await clack.confirm({
    message: `Are you sure you want to submit the exercise '${exercise}' in the language '${language}'?`,
  });

  if (!confirm) {
    clack.outro("[!] Exiting...");
    return;
  }
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

void start();
