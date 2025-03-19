# CLAUDE.md - Software Development Process Guide

## Development Philosophy

This document outlines our structured software development process designed to ensure high-quality, well-tested, and maintainable code. By following these processes, we create software that's reliable, comprehensible, and adaptable to future needs.

## Development Workflow

### 1. Issue Management

When we agree on work that needs to be done:

1. **Create an issue file** in `projects/todo/issue-NNNN-short-description.md` (e.g., `issue-0001-add-authentication.md`)
2. **Move to working directory** while in progress: `projects/wip/`
3. **Move to completed directory** when done: `projects/done/`

If these directories don't exist:
```bash
mkdir -p projects/todo projects/wip projects/done
```

Each issue file should include:
- **Title:** Top-level heading describing the issue
- **Problem:** What needs to be solved
- **Approach:** How we'll solve it
- **Implementation Plan:** Step-by-step implementation strategy
- **Failed Approaches:** Document any approaches that didn't work (if applicable)
- **Tasks:** Checklist of items to complete
- **Testing:** Testing strategy for the changes
- **Documentation:** Documentation updates needed
- **Implementation:** List of all git commits made and the branch name

### 2. Branch Management

**Always create a dedicated branch for each issue:**
- Format: `issue-NNNN/short-description` (e.g., `issue-0001/add-authentication`)
- Base each new branch on the most recently active branch if the previous one hasn't been merged

### 3. Implementation Process

For every feature implementation, follow this process:

#### Stage 1: Pre-Implementation (STOP HERE)
Before writing ANY implementation code:
1. Initialize git repository with proper branch
2. Create test files (they must fail initially)
3. Create required directories
4. Document initial design decisions
5. **Present this completed checklist for approval before proceeding**

#### Stage 2: Test-Driven Development
For EVERY feature or change:
1. Write tests FIRST as actual code files
2. Run and verify tests fail (confirm they're testing the right thing)
3. Implement the feature or fix
4. Verify tests pass

#### Stage 3: Mid-Implementation Review
After implementing core components but before completing the solution:
1. Verify all completed code adheres to requirements
2. Check for drift from documented design decisions
3. Confirm test coverage for all implemented features

#### Stage 4: Pre-Completion Verification
Before declaring any task complete:
1. Run ALL verification commands (tests, linting, typechecking)
2. Ensure documentation is complete
3. Verify all git commits follow required format
4. Verify all tests pass, including end-to-end tests
5. Perform the pre-submission quality checks:
   - Verify console is clean during normal application operation
   - Ensure all types of tests are present and passing
   - Review all error handling paths

## Testing Strategy

A complete testing strategy includes three layers:

### 1. Unit Tests
- Test individual components and functions in isolation
- Test both success and error paths
- Mock external dependencies

### 2. Integration Tests
- Test how components work together
- Verify data flows correctly between components
- Test system boundaries (file I/O, network, database)

### 3. End-to-End Tests (MANDATORY for user-facing applications)
- Test complete user workflows from start to finish
- Verify persistence across page reloads/restarts
- Test all CRUD operations in sequence
- Include tests for localStorage or other persistence mechanisms
- Use appropriate testing tools (Cypress, Playwright, or comprehensive RTL tests)

## Documentation Practices

### Design Decisions
Document major design decisions in `docs/design-decisions/<decision-slug>.md`. Include:
- The choice you made
- Alternatives considered
- Rationale for your decision

Be concise - the goal is to record intent for future engineers.

### Code Documentation
- All code files should start with a brief 2-line comment explaining what the file does
- Each line of this comment should start with `ABOUTME: ` to make it easy to grep for
- Write function-level documentation for all functions
- Add explanatory comments for any non-obvious or tricky code

### README Maintenance
Keep the project's README up to date with:
- Examples showing how to use all commandline tools
- How to run the test suite
- Steps needed to set up a development environment

## Code Change Principles

1. **Make minimal changes:** Work with existing implementations rather than starting from scratch
2. **Stay focused:** Only make changes directly related to your assigned task
3. **Preserve comments:** Never remove code comments unless they are demonstrably false
4. **Maintain consistency:** Match the style of surrounding code
5. **Prioritize clarity:** Prefer simple, clean solutions over clever or complex ones
6. **Ask questions:** When instructions are unclear, seek clarification rather than making assumptions
7. **Commit frequently:** Make small, logical commits with good commit messages

## Miscellaneous

### Scratch Directory
Put throwaway scripts in a `scratch/` directory at the top level of the repo.

---

Remember: This process is not optional. Each stage must be completed fully before proceeding to the next. Failure to pass any gate invalidates the implementation.