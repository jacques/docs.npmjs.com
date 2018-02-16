#!/bin/sh

# print commands on screen
set -x

rm -rf content/api
rm -rf content/cli
rm -rf content/files
rm -rf content/misc

rm -rf content/policies

# The -p flag preserves file timestamps

npm install --no-save npm
cp -pr node_modules/npm/doc/cli content/
cp -pr node_modules/npm/doc/files content/
cp -pr node_modules/npm/doc/misc content/
rm -f  content/misc/npm-index.md

./bin/tree.js
