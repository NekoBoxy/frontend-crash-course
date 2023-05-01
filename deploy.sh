#!/usr/bin/env sh

# abort on errors
set -e

# assignment0
cd assignment0
npm run build
cd -

# assignment1
cd assignment1
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
