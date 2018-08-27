Many of you reading this will be new to git - if that is not the case, skip down to the [Experienced Git Users](#experienced-git-users) section.

# New to Git Workflows

## What is git and why git?

Git is a version control tool - it helps us keep track of incremental changes to the code, so that we can easily undo changes or keep track of when something was implemented.  All of this information is stored in a folder called `.git`.

Github is a place to store all the git information online, so we can sync up and work off the same information.  It also stores our code so that anyone online can access it and contribute to it (like you!)

## Terminology

* `branch` - a copy of the codebase within your own repository.  When you make changes on a branch, it won't affect the code in any other branch.
* `master` - also known as the "master branch", or the branch that has all the "official" approved code ready for deployment.
* `repo` - short for repository.  The local repository is the one on your computer.  The remote one is the one stored on Github.
* `commit` - (verb) to save your changes to a branch
* `commit` - (noun) your changes made to a branch (you can have multiple commits on a branch)
* `merge` - to combine code together
* `pull request` - or just PR - a request to combine a specific branch with another one

## Making changes using git

So you want to make some changes to the codebase, huh?  Awesome!  Before you make any changes, here are the most common terminal commands you'll be using:

* `git fetch origin` - get latest branch information from the remote branch
* `git reset --hard origin/master` - reset everything on the current branch to be the latest on origin (master branch)
* `git checkout -b initials-branchname` - create a new branch and switch to it (use your initials so we know whose it is)
* `git checkout branchname` - switch to an existing branch
* `git add each-file-listed` - adds files to staging (to be committed) - for example, `git add package.json server/` will add all of changes made to `package.json` as well as all of the changes made to every file in `server/`.
* `git status` - see which branch you're currently on and see which files are about to be committed
* `git commit -m "message describing changes"` - commit the staged files to the branch, add a message describing what the changes were
* `git push origin initials-branchname` - push committed changes on your current branch to the remote repository (on the same branch)

My usual workflow looks something like:

1. `git checkout -b tc-new-feature`
2. `git fetch origin`
3. `git reset --hard origin/master`
4. I make some changes
5. `git add files-changed.js`
6. `git commit -m "added a feature"`
7. Repeat steps 4-6 as necessary.  Once I'm ready..
8. `git push origin tc-new-feature`
9. Go to the [remote repo](https://github.com/timmyichen/f-logger/pulls) and create a new pull request (if you pushed recently, it'll prompt you to use that one)
10. Write a description describing what the PR does
11. Wait for it to be approved or have changes requested

# Experienced Git Users

Branch naming convention should be `initials-branchname`, so for example, if I (Tim Chen) am going to add multiple classrooms as a feature, my branch name would be `tc-multi-classrooms` or somthing.

Pull requests should list everything that was changed.

Make sure you run `npm run lint` before making the PR to catch all linting errors.