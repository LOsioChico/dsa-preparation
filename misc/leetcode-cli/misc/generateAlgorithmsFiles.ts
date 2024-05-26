import { exit } from "node:process";
import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import * as clack from "@clack/prompts";
import { getLanguagesFromReadme, kebabToCamelCase } from "../utils/utils";
import Problem from "../lib/problem";
import Helper from "../utils/helper";
import { breakLineWithMaxCharacters } from "./breakLineWithMaxCharacters";

const generateAlgorithmsFiles = async () => {
  Helper.configure();

  clack.intro(
    "\x1b[46m\x1b[30m" +
      " LeetCode Generate Algorithms Files - Luis Osio Chico " +
      "\x1b[0m"
  );
  clack.note(
    "The use of this script is experimental and not recommended for use.\n" +
      "Thanks for using my project, if you like it, please give it a star on GitHub! ⭐"
  );

  const languages = await getLanguagesFromReadme();
  const languagesSelected = (await clack.multiselect({
    message: "Please select the languages:",
    options: [
      {
        value: "all",
        label: "All",
      },
      ...languages.map((language) => ({
        value: language.toLowerCase(),
        label: language,
      })),
    ],
    required: true,
  })) as symbol | string[];

  if (typeof languagesSelected === "symbol") {
    clack.cancel(
      "[!] Exiting... Please try again, if you have any issues open a issue ⭐"
    );
    exit(1);
  }

  if (languagesSelected.includes("all")) {
    languagesSelected.splice(
      0,
      languagesSelected.length,
      ...languages.map((language) => language.toLowerCase())
    );
  }

  const problemSlug = await clack.text({
    message: "Please enter the problem slug:",
    placeholder: "two-sum",
    validate: (input: string) => {
      if (input.length === 0)
        return "Please enter a valid command: [problem slug]";
    },
  });

  if (typeof problemSlug !== "string") {
    clack.cancel(
      "[!] Exiting... Please try again, if you have any issues open a issue ⭐"
    );
    exit(1);
  }

  const problem = new Problem(problemSlug);
  await problem.fetchDetail();

  const problemContent = getContentWithoutHTML(problem.content!);
  const problemContentWithAsterisk = problemContent
    .split("\n")
    .map((line) => ` * ${line}`)
    .join("\n");
  const problemTags = problem.topicTags?.join("; ");

  const fileComments = generateFileComments(
    problemContentWithAsterisk,
    problemTags!,
    problemSlug
  );

  languagesSelected.forEach(async (language) => {
    const solutionFilePath = `../../algorithms/${language}/${problemSlug}/solution.${Helper.languageFileExtension[language].exercise}`;
    // const solutionTestFilePath = `../../algorithms/${language}/${problemSlug}/solution.${Helper.languageFileExtension[language].test}`;

    await fs.mkdir(`../../algorithms/${language}/${problemSlug}`, {
      recursive: true,
    });

    const { solutionContent } = generateContentFiles(
      language,
      fileComments,
      problem
    );

    try {
      await fs.writeFile(solutionFilePath, solutionContent, {
        encoding: "utf-8",
        flag: "wx",
      });
    } catch {
      clack.cancel(
        "[!] The problem already exists in the selected language(s), please remove it and try again."
      );
      exit(1);
    }
  });
};

const getContentWithoutHTML = (content: string) => {
  const contraintsRemoved = content.replace(
    /<p><strong>Constraints:<\/strong><\/p>[\s\S]*<ul>[\s\S]*<\/ul>/,
    ""
  );

  const examplesTitleRemoved = contraintsRemoved.replace(
    /<p><strong class="example">Example \d:<\/strong><\/p>/g,
    ""
  );

  const descriptionCleaned =
    examplesTitleRemoved
      .match(/<p>[\s\S]*?<pre>/)?.[0]
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/\n{2,}/g, "\n")
      .replace(/\n$/, "")
      .split("\n")
      .slice(0, -1)
      .join("\n") || "";

  const examplesCleaned =
    examplesTitleRemoved
      .match(/<pre>[\s\S]*<\/pre>/)?.[0]
      .replace(/^\n/, "")
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/\n{2,}/g, "\n")
      .replace(/Input:/g, "\nInput:") || "";

  const description = breakLineWithMaxCharacters(descriptionCleaned, 73);

  return (description + examplesCleaned).replace(/&quot;/g, '"');
};

const generateFileComments = (
  problemContent: string,
  tags: string,
  slug: string
) => {
  return `/**
 * @tag ${tags}
 ***************************************************************************
${problemContent}
 ***************************************************************************
 * { @link https://leetcode.com/problems/${slug}/ }
 */`;
};

const generateContentFiles = (
  language: string,
  fileComments: string,
  problem: Problem
) => {
  const codeSnippet = problem.codeSnippets!.find(
    (snippet) => snippet.langSlug === Helper.languageToLeetCodeLang[language]
  )!.code;

  const initialExercisesFileCode = Helper.startExercisesFileCode({
    language,
    packageName: kebabToCamelCase(problem.slug),
  });
  const endExcercisesFileCode = Helper.endExercisesFileCode({
    language,
    codeRaw: codeSnippet,
  });

  let solutionContent = "";
  if (initialExercisesFileCode)
    solutionContent += initialExercisesFileCode + "\n\n";
  solutionContent += fileComments + "\n\n";
  solutionContent += codeSnippet + "\n";
  if (endExcercisesFileCode)
    solutionContent += "\n" + endExcercisesFileCode + "\n";

  return { solutionContent };
};

void generateAlgorithmsFiles();
