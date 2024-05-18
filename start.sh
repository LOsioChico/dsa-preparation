#! /bin/bash

echo "----------------------------------------"
echo "Leetcode Solutions - Luis Osio Chico"
echo "Usage: [language] [problem] [test name]"
echo "----------------------------------------"
read command
echo "----------------------------------------"

if [[ $command != *" "* ]]; then
    echo "Invalid format"
    exit 1
fi

IFS=' ' read -r -a array <<< "$command"

language=${array[0]}
problem=${array[1]}
testName=${array[2]}

case $language in
    "typescript")
        echo "[+] Running typescript"
        cd ./typescript
        pnpm test $problem/$testName
        ;;
esac