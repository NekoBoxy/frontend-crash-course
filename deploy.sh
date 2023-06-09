#!/usr/bin/env sh

# abort on errors
set -e

# assignment0
cd assignment0
npm run build
cd -

# assignment1
rm -rf ./dist/assignment1
cp -r assignment1 ./dist/assignment1

# assignment2
rm -rf ./dist/assignment2
cp -r assignment2 ./dist/assignment2

# assignment3
rm -rf ./dist/assignment3
cp -r assignment3 ./dist/assignment3

# assignment4
rm -rf ./dist/assignment4
cp -r assignment4 ./dist/assignment4

# assignment5
rm -rf ./dist/assignment5
cp -r assignment5 ./dist/assignment5

# assignment6
cd assignment6
npm run build
cd -

cd dist
echo > .nojekyll
git init
git checkout -B main
git add -A
git commit -m 'deploy'
git push -f https://github.com/NekoBoxy/frontend-crash-course.git main:gh-pages

cd -
