# project management

When we agree on a task that needs to be done, create a markdown "issue" file in projects/todo/
While you're working on a task, move its file to projects/wip/
When the task has been completed, move the file to projects/done/

We use issue files to track and manage work. Each one should have a top-level heading describing the issue, a section describing the problem to be solved, a section describing the approach you are pursuing, a section describing any failed approaches, a section with a task list, and a section with a list of all git commits you made as you did the work, as well as the name of the branch.

# git

Every task gets its own branch. Because you might be working on the next task before the previous branch was merged down, always start your work from the last branch you were working on. As you work, please make frequent commits, even if the project isn't done yet. Every logical changeset gets its own commit.  You know how to write good commit messages. Ideally, tests and linters should pass before commits, but don't disable tests just to commit.

# Test Driven Development

Write tests for functionality *before* you write new code or make code changes. The tests should fail when you run them before you make your changes. They should pass afterward.

# Design decisions

We track design decisions in docs/design-decisions. One markdown file for each major design decision. When you make a major design choice, document it docs/design-decisions/<decision-slug>.md.  Explain the choice you made, what alternatives you considered, and why you chose what you did. BE CONCISE. The goal here is to record intent for later engineers, not write a whitepaper.

# Rewriting code

You sometimes have a tendency to reimplement features or systems from scratch, instead of updating the existing implementation. Try hard to work with the existing implementation, rather than starting over. Make the smallest reasonable changes to get to the desired outcome. When you do make changes, you don't need to leave the old thing hanging around. We're tracking everything in git. It'll be in the history.

# Making the codebase comprehensible

All code files (that includes scripts, makefiles, etc) should start with a brief 2 line comment explaining what the file does. Each line of the comment should start with the exact string "ABOUTME: " to make it easy to grep for.

# Scratch directory

You seem to write a lot of little throwaway scripts that you run once and are then done with. put them in a scratch/ directory at the top level of the repo.

# README

Please keep the project's README up to date. It should always include:
 - a set of examples showing how to use all the commandline tools in the project. 
 - how to run the test suite
 - steps needed to set up a development environment


