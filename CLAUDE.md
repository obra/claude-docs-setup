# IMPLEMENTATION GATES

**CRITICAL: The instructions in this file are not optional guidelines - they are mandatory requirements.**

## Gate 1: Pre-Implementation (STOP HERE)
Before writing ANY implementation code, confirm completion of:
- [ ] Git repository initialized with proper branch
- [ ] Test files created (must fail initially)
- [ ] Required directories created
- [ ] Initial design decisions documented

You MUST present this completed checklist to the user for approval before proceeding.

## Gate 2: Mid-Implementation Review
After implementing core components but before completing the solution:
- [ ] Verify all completed code adheres to ALL requirements in this file
- [ ] Check for drift from documented design decisions
- [ ] Confirm test coverage for all implemented features

## Gate 3: Pre-Completion Verification
Before declaring the task complete:
- [ ] Run ALL verification commands (tests, linting, typechecking)
- [ ] Ensure documentation is complete per standards above
- [ ] Verify all git commits follow required format
- [ ] Verify all automated tests pass, including end-to-end tests

# Pre-Submission Quality Checks

Before declaring ANY implementation complete, perform these mandatory checks:

1. Verify console is clean during normal application operation
2. Ensure all types of tests are present and passing:
   - [ ] Unit tests
   - [ ] Integration tests 
   - [ ] End-to-end tests
3. Check browser devtools console for errors during manual testing
4. Review all error handling paths

FAILURE TO PASS ANY GATE INVALIDATES THE IMPLEMENTATION

---

# Project Management

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

# Git

Every task gets its own branch named using the format `issue-NUMBER/short-description` (e.g., `issue-0001/add-authentication`). 

Because you might be working on the next task before the previous branch was merged down, always start your work from the last branch you were working on. As you work, please make frequent commits, even if the project isn't done yet. Every logical changeset gets its own commit. You know how to write good commit messages. Ideally, tests and linters should pass before commits, but don't disable tests just to commit.

# Test Driven Development - CRITICAL

## Test ALL Changes

NEVER implement features or fix bugs without tests. For EVERY change:

1. Write tests FIRST - these MUST be actual code files, not just descriptions
2. Verify tests fail (run them to confirm)
3. Implement the feature or fix
4. Verify tests pass

Before marking ANY issue as complete, verify:
- Test coverage exists for all changes
- All tests are passing

Remember: No tests = incomplete implementation

## Complete Testing Strategy

A comprehensive testing strategy must include:

1. **Unit Tests**: Test individual components and functions in isolation
   - Test both success and error paths
   - Mock external dependencies

2. **Integration Tests**: Test how components work together
   - Verify data flows correctly between components
   - Test system boundaries (file I/O, network, database)

3. **End-to-End Tests**: Test complete user workflows
   - Automate user interactions from start to finish
   - Test ALL state transitions and data persistence
   - Include full lifecycle testing (create, read, update, delete)
   - Test application restart/reload where relevant
   - Cover both happy paths AND error conditions

Manual testing should ONLY be used as a last resort for aspects that are provably impossible to automate, and must be documented with precise steps and expected outcomes.

## End-to-End Testing Requirements

End-to-end tests are MANDATORY for any user-facing application. Always create specific E2E test files that:

1. Test complete user flows from start to finish
2. Verify persistence across page reloads/restarts
3. Test all CRUD operations in sequence
4. Include specific tests for localStorage or other persistence mechanisms
5. Use appropriate testing tools (Cypress, Playwright, or comprehensive RTL tests)

You MUST implement, verify, and document E2E tests before marking any user-facing feature as complete.

# Design Decisions

We track design decisions in docs/design-decisions. One markdown file for each major design decision. When you make a major design choice, document it docs/design-decisions/<decision-slug>.md.  Explain the choice you made, what alternatives you considered, and why you chose what you did. BE CONCISE. The goal here is to record intent for later engineers, not write a whitepaper.

# Rewriting Code

You sometimes have a tendency to reimplement features or systems from scratch, instead of updating the existing implementation. Try hard to work with the existing implementation, rather than starting over. Make the smallest reasonable changes to get to the desired outcome. When you do make changes, you don't need to leave the old thing hanging around. We're tracking everything in git. It'll be in the history.

# Code Changes Discipline

1. Never make code changes that aren't directly related to the task you're currently assigned. If you notice something that should be fixed but is unrelated to your current task, document it as a new issue instead of fixing it immediately.

2. Never remove code comments unless you can prove that they are actively false. Comments are important documentation and should be preserved even if they seem redundant or unnecessary to you.

3. When modifying code, match the style and formatting of surrounding code, even if it differs from standard style guides. Consistency within a file is more important than strict adherence to external standards.

4. Write function-level documentation for all functions explaining what they do, their parameters, return values, and usage examples where appropriate.

5. Add explanatory comments for any non-obvious or tricky code that might confuse another experienced developer who isn't familiar with this specific codebase.

6. Prefer simple, clean, maintainable solutions over clever or complex ones, even if the latter are more concise or performant. Readability and maintainability are primary concerns.

7. If instructions are unclear or you're unsure how to proceed, always ask for clarification rather than making assumptions.

# Making the Codebase Comprehensible

All code files (that includes scripts, makefiles, etc) should start with a brief 2 line comment explaining what the file does. Each line of the comment should start with the exact string "ABOUTME: " to make it easy to grep for.

# Scratch Directory

You seem to write a lot of little throwaway scripts that you run once and are then done with. put them in a scratch/ directory at the top level of the repo.

# README

Please keep the project's README up to date. It should always include:
 - a set of examples showing how to use all the commandline tools in the project. 
 - how to run the test suite
 - steps needed to set up a development environment