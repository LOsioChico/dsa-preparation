import fs from "node:fs/promises";
import { exit } from "node:process";
import * as clack from "@clack/prompts";

export const getLanguagesFromReadme = async () => {
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
