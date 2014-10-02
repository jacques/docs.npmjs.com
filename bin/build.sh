#!/bin/sh

set -x

cp -r node_modules/npm/doc/ content/
./bin/tree.js
./bin/nav.js
