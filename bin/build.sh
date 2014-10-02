#!/bin/sh

echo "Installing latest npm"
npm install npm --save

echo "Copying npm docs to content directory"
cp -r node_modules/npm/doc/ content/

echo "Creating a tree of markdown files"
./bin/tree.js

echo "Creating an HTML table of contents"
./bin/nav.js
