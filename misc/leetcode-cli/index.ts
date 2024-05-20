import Helper from "./utils/helper.ts";
import * as clack from "@clack/prompts";
import { execSync } from "node:child_process";

const start = async () => {
  Helper.configure();

  clack.intro(
    "\x1b[46m\x1b[30m" +
      " LeetCode Solutions Submit - Luis Osio Chico " +
      "\x1b[0m"
  );
  clack.note("The usage is: [language] [exercise]");

  if (!Helper.session || !Helper.csrfToken) {
    clack.outro("[!] Check the .env file and try again");
    return;
  }

  const command = (await clack.text({
    message: "Please enter the command you want to run:",
    placeholder: "typescript two-sum",
    validate: (input) => {
      if (input.length === 0 || input.split(" ").length !== 2)
        return "Please enter a valid command: [language] [exercise]";

      const [language, exercise] = input.split(" ");

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
        return "Exercise not found, please check the command";
      }
    },
  })) as string;

  const [language, exercise] = command!.split(" ");

  const confirm = await clack.confirm({
    message: `Are you sure you want to submit the exercise '${exercise}' in the language '${language}'?`,
  });

  if (!confirm) {
    clack.outro("[!] Exiting...");
    return;
  }
};

void start();
