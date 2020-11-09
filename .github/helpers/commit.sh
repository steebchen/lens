#!/bin/sh

# From https://github.com/prisma/introspection-ci/blob/master/.github/helpers/commit.sh

set -eu

echo "Running a commit with message $1"

git config --global user.email "prismabots@gmail.com"
git config --global user.name "Prismo"

git remote add github "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git" || true
git pull github "${GITHUB_REF}" --ff-only

git add -A .
git commit -m "$PRISMA_CLI_VERSION: $1" -m "via the action https://github.com/prisma/lens/commit/$GITHUB_SHA/checks?check_suite_id=$GITHUB_ACTION" || true

git push github HEAD:"${GITHUB_REF}"

echo "Done running a commit with message $1"
