#! /bin/bash

echo "----------------------------------------"
echo "LeetCode Solutions - Luis Osio Chico"

if [[ $# -eq 3 ]]; then
    language=$1
    problem=$2
    testName=$3
else
    echo "Usage: [language] [problem] [test name]"
    echo "----------------------------------------"
    read -r -p "Enter command: " command

    IFS=' ' read -r -a array <<< "$command"

    language=${array[0]}
    problem=${array[1]}
    testName=${array[2]}
fi

echo "----------------------------------------"

if [[ -z $language ]]; then
    echo "[!] Language is required (Example: typescript or ts)"
    exit 1
fi

if [[ -z $problem ]]; then
    echo "[!] Problem is required (Example: two-sum)"
    exit 1
fi

if [[ -z $testName ]]; then
    echo "[!] Test name is required (practice or solution)"
    exit 1
fi

if [[ $testName != "practice" && $testName != "solution" ]]; then
    echo "[!] Test name is not valid (practice or solution)"
    exit 1
fi

case $language in
    "typescript"|"ts")
        echo "[+] Running TypeScript"
        cd ./typescript
        pnpm test run $problem/$testName
        ;;
    "scala"|"sc")
        echo "[+] Running Scala"
        cd ./scala
        cd ./$problem
        scala-cli test $testName.test.scala
        ;;
    *)
        echo "[!] Language not supported"
        ;;
esac