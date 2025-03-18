# project management

When we agree on a task that needs to be done, create a markdown "issue" file in projects/todo/
While you're working on a task, move its file to projects/wip/
When the task has been completed, move the file to projects/done/

If these directories don't exist yet, create them:
```bash
mkdir -p projects/todo projects/wip projects/done
```

We use issue files to track and manage work. Name issue files using the format `issue-NUMBER-short-description.md` (e.g., `issue-0001-add-authentication.md`). Issue numbers are sequential, starting with 0001.

Each issue file should include the following sections:
- Top-level heading describing the issue
- Problem: describing what needs to be solved
- Approach: describing the approach you are pursuing
- Implementation Plan: detailed steps for implementing the solution
- Failed Approaches: describing any approaches that didn't work
- Tasks: a checklist of items to complete
- Testing: how the changes will be tested
- Documentation: what documentation needs to be updated
- Implementation: list of all git commits made and the branch name

# git

Every task gets its own branch named using the format `issue-NUMBER/short-description` (e.g., `issue-0001/add-authentication`). 

Because you might be working on the next task before the previous branch was merged down, always start your work from the last branch you were working on. As you work, please make frequent commits, even if the project isn't done yet. Every logical changeset gets its own commit. You know how to write good commit messages. Ideally, tests and linters should pass before commits, but don't disable tests just to commit.

# Test Driven Development - CRITICAL

  NEVER implement features without tests. For EVERY feature:

  1. Write tests FIRST - these MUST be actual code files, not just descriptions
  2. Verify tests fail (run them to confirm)
  3. Implement the feature
  4. Verify tests pass

  Before marking ANY issue as complete, verify:
  - Test coverage exists for all features
  - All tests are passing

  Remember: No tests = incomplete feature

# Design decisions

We track design decisions in docs/design-decisions. One markdown file for each major design decision. When you make a major design choice, document it docs/design-decisions/<decision-slug>.md.  Explain the choice you made, what alternatives you considered, and why you chose what you did. BE CONCISE. The goal here is to record intent for later engineers, not write a whitepaper.

# Rewriting code

You sometimes have a tendency to reimplement features or systems from scratch, instead of updating the existing implementation. Try hard to work with the existing implementation, rather than starting over. Make the smallest reasonable changes to get to the desired outcome. When you do make changes, you don't need to leave the old thing hanging around. We're tracking everything in git. It'll be in the history.

# Code changes discipline

1. Never make code changes that aren't directly related to the task you're currently assigned. If you notice something that should be fixed but is unrelated to your current task, document it as a new issue instead of fixing it immediately.

2. Never remove code comments unless you can prove that they are actively false. Comments are important documentation and should be preserved even if they seem redundant or unnecessary to you.

3. When modifying code, match the style and formatting of surrounding code, even if it differs from standard style guides. Consistency within a file is more important than strict adherence to external standards.

4. Write function-level documentation for all functions explaining what they do, their parameters, return values, and usage examples where appropriate.

5. Add explanatory comments for any non-obvious or tricky code that might confuse another experienced developer who isn't familiar with this specific codebase.

6. Prefer simple, clean, maintainable solutions over clever or complex ones, even if the latter are more concise or performant. Readability and maintainability are primary concerns.

7. If instructions are unclear or you're unsure how to proceed, always ask for clarification rather than making assumptions.

# Making the codebase comprehensible

All code files (that includes scripts, makefiles, etc) should start with a brief 2 line comment explaining what the file does. Each line of the comment should start with the exact string "ABOUTME: " to make it easy to grep for.

# Scratch directory

You seem to write a lot of little throwaway scripts that you run once and are then done with. put them in a scratch/ directory at the top level of the repo.

# README

Please keep the project's README up to date. It should always include:
 - a set of examples showing how to use all the commandline tools in the project. 
 - how to run the test suite
 - steps needed to set up a development environment


