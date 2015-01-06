#!/bin/sh

set -x

rm -rf content/api
rm -rf content/cli
rm -rf content/files
rm -rf content/misc

cp -pr node_modules/npm/doc/api content/
cp -pr node_modules/npm/doc/cli content/
cp -pr node_modules/npm/doc/files content/
cp -pr node_modules/npm/doc/misc content/
rm -f  content/misc/npm-index.md

./bin/tree.js
