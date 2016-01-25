#!/bin/bash

cp -rf www/* ../grenier.gh-pages
cd ../grenier.gh-pages
git add . -A
git commit -am "Publication." # `grep -i version ../grenier/package.json`
git push
cd ../grenier

