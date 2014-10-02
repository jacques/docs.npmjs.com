#!/bin/sh

set -x

cp -r node_modules/npm/html/partial/doc/api content/
cp -r node_modules/npm/html/partial/doc/cli content/
cp -r node_modules/npm/html/partial/doc/files content/
cp -r node_modules/npm/html/partial/doc/misc content/
./bin/tree.js
./bin/nav.js
