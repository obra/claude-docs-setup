# Project Management Guidelines

This file contains guidelines for project management and development practices. It is used by the claude-docs setup tool to generate issue templates.

## Implementation Gates

**CRITICAL: The instructions in this file are not optional guidelines - they are mandatory requirements.**

### Gate 1: Pre-Implementation (STOP HERE)
Before writing ANY implementation code, confirm completion of:
- [ ] Git repository initialized with proper branch
- [ ] Required directories created
- [ ] Issue design decisions documented
- [ ] Unit test files created 
- [ ] End to end test files created 
- [ ] Integration test files created
- [ ] New unit tests run and verified failing
- [ ] New integration tests run and verified failing
- [ ] New end to end tests run and verified failing

### Gate 2: Mid-Implementation Review
After implementing core functionality but before completing the solution:
- [ ] Verify all completed code adheres to ALL requirements in this file
- [ ] Check for drift from documented design decisions
- [ ] Confirm test coverage for all implemented features

### Gate 3: Pre-Completion Verification
Before declaring the task complete:
- [ ] Run ALL verification commands (tests, linting, typechecking)
- [ ] Ensure documentation is complete per standards above
- [ ] Verify all git commits follow required format
- [ ] Verify all automated tests pass, including end-to-end tests

### Gate 4: Pre-Submission Quality Checks
Before declaring ANY implementation complete, perform these mandatory checks:
- Ensure all types of tests are present, have been run, and are passing.
   - [ ] Unit tests
   - [ ] Integration tests 
   - [ ] End-to-end tests

### Gate 5: Final commit for the issue
   - [ ] Author a meaningful commit message for this change. Include details of your intent, as well as logs showing that you ran tests and that they passed.

## Test Driven Development

### TDD Process
1. Write tests FIRST before implementing any code
2. Run tests to verify they fail (confirming they actually test something)
3. Implement the minimum code needed to make tests pass
4. Refactor while keeping tests passing
5. Repeat for each new feature or bug fix

### Test Types
- **Unit Tests**: Test individual components in isolation
- **Integration Tests**: Test how components work together
- **End-to-End Tests**: Test full workflows from start to finish

### Test Requirements
- All tests must be automated
- Tests must cover both success and failure paths
- Tests should be readable and maintainable
- All features must have corresponding tests

## Code Changes Discipline

1. Make only changes related to the current task
2. Preserve code comments unless they are demonstrably incorrect
3. Match the style of surrounding code
4. Document functions thoroughly
5. Add explanatory comments for complex code
6. Prefer maintainable solutions over clever ones
7. Ask for clarification when instructions are unclear

## Issue Management

Each issue should include:
- Clear problem statement
- Documented approach
- Implementation plan
- Testing strategy
- Documentation requirements
- Task checklist

## Project Structure

Organize project files in the following directories:
- projects/todo/ - Planned tasks
- projects/wip/ - In-progress tasks
- projects/done/ - Completed tasks
- docs/design-decisions/ - Design decision documentation