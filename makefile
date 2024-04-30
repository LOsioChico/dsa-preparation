# Just use on the terminal the command `make x` (x = programming language)
# and this will install the necessary files and start test to check if runs

all: ts

ts: ./typescript/package.json
	cd ./typescript && pnpm install
	cd ./typescript && pnpm test
	