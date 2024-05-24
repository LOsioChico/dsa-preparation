export const breakLineWithMaxCharacters = (
  text: string,
  maxCharacters: number
) => {
  const rawString = JSON.stringify(text).replace(/\\n/g, " ");
  const words = rawString.split(" ");
  let line = "";
  let result = "";

  words.forEach((word) => {
    if (line.length + word.length < maxCharacters) {
      line += word + " ";
    } else {
      result += line + "\n";
      line = word + " ";
    }
  });

  return (result + line).replace(/"/g, "");
};
