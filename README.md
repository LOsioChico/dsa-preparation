# [LeetCode](https://leetcode.com/problemset/all/)

## Introduction

This repository contains solutions and practice with his suite tests for algorithms and data structures problems. I will be using TypeScript, Java, Scala and whatever language I feel like using to solve the problems.

Inspirational video (spanish): [Como estudiar LeetCode para Entrevistas](https://www.youtube.com/watch?v=se2FOhsBHEo)

```plain
  root
    |--- algorithms
    |     |-- [language]   // language (typescript, scala, etc)
    |     |     |-- [problemName] // problem name (two-sum, contains-duplicate, etc)
    |     |     |         |-- practice.[ext]      // code skeleton
    |     |     |         |-- practice.[testExt]  // practice test
    |     |     |         |-- solution.[ext]      // solution
    |     |     |         |-- solution.[testExt]  // solution test
    |     |-- ......
    |-- misc
    |     |-- leetcode-cli // submit to leetcode program
    |     |-- books
    |     |-- ......
    |-- road.md       // general things I learnt through the process
    |-- README.md     // this file
    |-- ......

```

## Languages

| Language   | Alias |
| ---------- | ----- |
| TypeScript | ts    |
| Scala      | sc    |

## Usage

> [!IMPORTANT]
> If you get an error executing the script, please make sure this have permissions to execute.
> You can do it by running `chmod +x start.sh`.

> [!NOTE]
> You can user the aliases instead of the full name.

```bash
# Main usage
./start.sh scala two-sum solution

----------------------------------------
DSA Preparation - Luis Osio Chico
----------------------------------------
[+] Running Scala
...
```

```bash
# Alternative without args
./start.sh

-----------------------------------------
DSA Preparation - Luis Osio Chico
Usage: [language] [problem] [test name]
-----------------------------------------
> Enter command: typescript two-sum practice
-----------------------------------------
[+] Running TypeScript
...
```

## LeetCode Submit Usage

First you need to create a `.env` file on 'misc/leetcode-cli' based on the `.env.template` with the following content:

- `LEETCODE_SESSION` - Your session
- `LEETCODE_CSRF_TOKEN` - Your csrf token

Then you need to go to the folder 'misc/leetcode-cli' and run the following command:

```bash
# Main usage
./start.sh submit

----------------------------------------
DSA Preparation - Luis Osio Chico
----------------------------------------
...

# Alternative
cd ./misc/leetcode-cli
pnpm install
pnpm start

┌   DSA Preparation Submit - Luis Osio Chico
│
◇   ────────────────────────────────────────────────────────────────────────────────╮
│                                                                                   │
│  Thanks for using my project, if you like it, please give it a star on GitHub! ⭐  │
│                                                                                   │
├───────────────────────────────────────────────────────────────────────────────────╯
│
└  Welcome [LeetCode Username]! 👋

│
◆  Please select the language you want to use:
│  ● TypeScript
│  ○ Scala
...
```

## Requirements

For the script to work, you need to have to need an bash shell and the following installed:

## TypeScript And LeetCode Submit

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)

## Scala

- [sbt](https://www.scala-sbt.org/)
- [scala-cli](https://scala-cli.virtuslab.org/)

# Problems

> [!NOTE]
> The [!!] on the `Notes` means not recommended to submit

| #   | Problem                                                                           | Tags                                                                                                               | Languages                                                                     | Notes                                                                                                                                                                          |
| --- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | [Two Sum](https://leetcode.com/problems/two-sum/)                                 | `Array` `Hash Table`                                                                                               | [TypeScript](typescript/two-sum) [Scala](scala/two-sum)                       | 1. Brute force O(n^2) and O(1) space<br/>2. Hash Table O(n) time and O(n) space<br/>                                                                                           |
| 49  | [Group Anagrams](https://leetcode.com/problems/group-anagrams/)                   | `Array` `Hash Table` `String` `Sorting`                                                                            | [Scala](scala/group-anagrams)                                                 | 1. Hash Table O(n \* m) time and O(m \* n) space<br/> 2. Hash Table Sorting O(n \* m \* log(m)) time and O(m \* n) space                                                       |
| 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)           | `Array` `Hash Table` `Sorting`                                                                                     | [TypeScript](typescript/contains-duplicate) [Scala](scala/contains-duplicate) | 1. [!!] Brute force O(n^2) and O(1) space<br/>2. Sorting O(n \* log(n)) time and O(1) space<br/>3. Hash Table O(n) time and O(n) space<br/>4. HashSet O(n) time and O(n) space |
| 242 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/)                     | `Hash Table` `String` `Sorting`                                                                                    | [TypeScript](typescript/valid-anagram) [Scala](scala/valid-anagram)           | 1. Hash Table (two or three pass) O(n) time and O(1) space<br/>2. Sorting O(n \* log(n)) time and O(1) space<br/>3. Hash Table Array (one or two) O(n) time and O(1) space     |
| 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | `Array` `Hash Table` `Divide and Conquer` `Sorting` `Heap (Priority Queue)` `Bucket Sort` `Counting` `Quickselect` | [Scala](scala/top-k-frequent-elements)                                        | 1. Hash Table Freq Array O(n) time and O(n) space                                                                                                                              |

<br/>
<div align="right">
    <b><a href="#introduction">⬆️ Back to Top</a></b>
</div>
<br/>

## Todo

- Support for `./start.sh submit [language] [problem]` command
- Add generate tests from problems based on LeetCode api
- Fix file not found error when `./start.sh [language] [problem] [solution]` (problem not exist or not created yet)
- Add username empty exception on LeetCode Submitions Submit
