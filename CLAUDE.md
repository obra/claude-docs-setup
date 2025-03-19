# CLAUDE.md - Development Checklist

**CRITICAL: Follow these checklists for EVERY development task.**

## Implementation Gates

### ✅ Gate 1: Pre-Implementation (STOP HERE)
Before writing ANY implementation code:
- [ ] Create git branch named `issue-NUMBER/short-description`
- [ ] Create test files that will fail initially
- [ ] Create required directories
- [ ] Document design decisions in `docs/design-decisions/`
- [ ] Present this completed checklist for approval before proceeding

### ✅ Gate 2: Mid-Implementation Review
After implementing core components:
- [ ] Verify all code meets requirements
- [ ] Check for drift from documented design decisions
- [ ] Confirm test coverage for implemented features
- [ ] Make frequent, logical commits with clear messages

### ✅ Gate 3: Pre-Completion Verification
Before marking task complete:
- [ ] Run ALL verification commands (tests, linting, typechecking)
- [ ] Ensure documentation is complete
- [ ] Verify all git commits follow required format
- [ ] Verify all automated tests pass (unit, integration, end-to-end)
- [ ] Verify console is clean during normal operation
- [ ] Review all error handling paths

## Issue Management Checklist

### ✅ For each new task:
- [ ] Create issue file in `projects/todo/issue-NUMBER-short-description.md`
- [ ] Move file to `projects/wip/` when starting work
- [ ] Move file to `projects/done/` when complete

### ✅ Each issue file must include:
- [ ] Top-level heading describing the issue
- [ ] Problem description
- [ ] Approach description
- [ ] Implementation plan with steps
- [ ] Failed approaches (if any)
- [ ] Tasks checklist
- [ ] Testing strategy
- [ ] Documentation needs
- [ ] Implementation details (commits and branch)

## Test-Driven Development Checklist

### ✅ For EVERY change:
- [ ] Write tests FIRST as actual code files
- [ ] Run tests to verify they fail
- [ ] Implement the feature or fix
- [ ] Verify tests pass

### ✅ Unit Tests:
- [ ] Test individual components in isolation
- [ ] Cover success paths
- [ ] Cover error paths
- [ ] Mock external dependencies

### ✅ Integration Tests:
- [ ] Test component interactions
- [ ] Verify data flows correctly
- [ ] Test system boundaries (I/O, network, DB)

### ✅ End-to-End Tests (MANDATORY for user-facing apps):
- [ ] Test complete user flows
- [ ] Verify persistence across reloads
- [ ] Test all CRUD operations
- [ ] Test localStorage/persistence
- [ ] Use appropriate testing tools

## Code Change Discipline

### ✅ For ALL code changes:
- [ ] Only make changes related to the current task
- [ ] Document unrelated issues instead of fixing immediately
- [ ] Preserve all code comments unless provably false
- [ ] Match style and formatting of surrounding code
- [ ] Write function-level documentation
- [ ] Add explanatory comments for non-obvious code
- [ ] Prefer simple, maintainable solutions over clever ones
- [ ] Ask for clarification when instructions are unclear
- [ ] Work with existing implementations instead of reimplementing from scratch
- [ ] Make the smallest reasonable changes to achieve the goal

## Documentation Checklist

### ✅ All code files must include:
- [ ] Add 2-line comment at the top explaining the file's purpose
- [ ] Start each line with "ABOUTME: " for easy grepping

### ✅ For design decisions:
- [ ] Create file in `docs/design-decisions/<decision-slug>.md`
- [ ] Document the chosen approach
- [ ] List alternatives considered
- [ ] Explain rationale for choice

### ✅ README maintenance:
- [ ] Include examples for all commandline tools
- [ ] Document how to run the test suite
- [ ] Include development environment setup steps

## Git Workflow

### ✅ Branch management:
- [ ] Create branch for each issue: `issue-NUMBER/short-description`
- [ ] Base new branch on most recent branch if previous not merged
- [ ] Make frequent commits of logical units
- [ ] Write descriptive commit messages

## Directory Structure

### ✅ Create if not exists:
- [ ] `projects/todo/` - For tracking issues to be worked on
- [ ] `projects/wip/` - For issues in progress
- [ ] `projects/done/` - For completed issues
- [ ] `docs/design-decisions/` - For documenting design choices
- [ ] `scratch/` - For throwaway scripts

**REMEMBER: No tests = incomplete implementation.**

**CRITICAL: FAILURE TO PASS ANY GATE INVALIDATES THE IMPLEMENTATION**