#! /bin/bash

echo "----------------------------------------"
echo "DSA Preparation - Luis Osio Chico"

if [[ $# -eq 3 ]]; then
    language=$1
    problem=$2
    testName=$3
elif [[ $# -eq 1 ]]; then
    echo "----------------------------------------"
    command=$1
    if [[ $command == "submit" ]]; then
        cd ./misc/leetcode-cli && pnpm install && pnpm start
    else 
        echo "[!] Wrong use of the script, the available 1 position options are:"
        echo "- submit"
        echo ""
        echo "Example: ./start.sh submit"
        echo "You typed \"$command\""
    fi
    exit
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
        cd ./algorithms/typescript
        pnpm install
        pnpm test run $problem/$testName
        ;;
    "scala"|"sc")
        echo "[+] Running Scala"
        cd ./algorithms/scala
        scala-cli test $problem/$testName.test.scala
        ;;
    *)
        echo "[!] Language not supported"
        ;;
esac