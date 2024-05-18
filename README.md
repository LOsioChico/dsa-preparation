# [LeetCode](https://leetcode.com/problemset/all/)

## Introduction

This repository contains my solutions to the problems in the LeetCode platform. I will be using TypeScript, Go, Scala and whatever language I feel like using to solve the problems.

Inspirational video (spanish): [Como estudiar LeetCode para Entrevistas](https://www.youtube.com/watch?v=se2FOhsBHEo)

```plain
  root
    |--- [language]   // language specific solutions
    |     |-- two-sum // problem name
    |     |         |-- practice.[ext]      // code skeleton
    |     |         |-- practice.[testExt]  // practice test
    |     |         |-- solution.[ext]      // solution
    |     |         |-- solution.[testExt]  // solution test
    |     |-- ......
    |-- road.md       // general things I learnt through the process

```

## Languages

| Language | Alias |
| -------- | ----- |
| TypeScript | ts |
| Scala | sc |

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
LeetCode Solutions - Luis Osio Chico
----------------------------------------
[+] Running Scala
...
```

```bash
# Alternative without args
./start.sh

-----------------------------------------
Leetcode Solutions - Luis Osio Chico
Usage: [language] [problem] [test name]
-----------------------------------------
> Enter command: typescript two-sum practice
-----------------------------------------
[+] Running TypeScript
...
```

# Problems

| #   | Problem                                           | Tags                 | Languages                        | Notes                                                                     |
| --- | ------------------------------------------------- | -------------------- | -------------------------------- | ------------------------------------------------------------------------- |
| 1   | [Two Sum](https://leetcode.com/problems/two-sum/) | `Array` `Hash Table` | [TypeScript](typescript/two-sum) | 1. Brute force O(n^2) and O(1) space<br/>2. Hash O(n) and O(n) space<br/> |

<br/>
<div align="right">
    <b><a href="#algorithms">⬆️ Back to Top</a></b>
</div>
<br/>
