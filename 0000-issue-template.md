# Issue Title

## Problem
Describe what needs to be solved.

## Approach
Describe the approach you are pursuing.

## Implementation Plan
Detailed steps for implementing the solution.

## Failed Approaches
Describe any approaches that didn't work.

## Testing
How the changes will be tested.

## Documentation
What documentation needs to be updated.

## Implementation
List of all git commits made and the branch name.

## Tasks
**CRITICAL: The instructions in this file are not optional guidelines - they are ALL MANDATORY requirements. DO NOT SKIP STEPS**

- [ ] Plan your implementation
- [ ] Ensure that all implementation tasks are listed in this TODO list. 

### Gate 1: Pre-Implementation - STOP HERE AND THINK

Before writing ANY implementation code, confirm completion of ALL of these tasks:
- [ ] Git repository initialized with proper branch checked out
- [ ] Required directories created
- [ ] Major design decisions documented in docs/design-decisions/<decision-slug.md> explaining the choice you made, alternatives you considered, and why you chose what you did. BE CONCISE.
- [ ] Stand up from your desk and scream out loud "WE DO TEST DRIVEN DEVELOPMENT. I WILL NOT WRITE ANY CODE UNTIL I WRITE AND RUN A FAILING TEST FOR THE THING I AM DOING"
- [ ] Create new failing unit tests for this functionality
- [ ] Create new failing integration tests for this functionality
- [ ] Create new failing end to end tests for this functionality
- [ ] Verify that new unit tests run to completion and fail
- [ ] Verify that new integration tests run to completion and fail
- [ ] Verify that new end to end tests run to completion and fail


### Gate 2: Implement the functionality - STOP HERE AND THINK: DID I FOLLOW BOTH THE LETTER AND SPIRIT OF MY INSTRUCTIONS

[ fill in this section with issue-specific tasks ]	

### Gate 3: Mid-Implementation Review - STOP HERE AND THINK: DID I FOLLOW BOTH THE LETTER AND SPIRIT OF MY INSTRUCTIONS

After implementing core functionality:
- [ ] Verify all completed code adheres to ALL requirements in this file and in CLAUDE.md
- [ ] Check for drift from documented design decisions
- [ ] Confirm test coverage for all implemented features

### Gate 4: Pre-Completion Verification - STOP HERE AND THINK: DID I FOLLOW BOTH THE LETTER AND SPIRIT OF MY INSTRUCTIONS

Before declaring the task complete perform these MANDATORY checks:
- [ ] Run ALL verification commands (tests, linting, typechecking)
- [ ] Write function-level documentation for all functions explaining what they do, their parameters, return values, and usage examples where appropriate.
- [ ] Add explanatory comments for any non-obvious or tricky code that might confuse another experienced developer who isn't familiar with this specific codebase.
- [ ] Update the README.md. It should always include:
	- [ ] a set of examples showing how to use all the commandline tools in the project. 
	- [ ] how to run the test suite
	- [ ] steps needed to set up a development environment
- [ ] Run the unit tests by themselves. Verify that they to completion and pass and that there is no unexpected output
- [ ] Run the integration tests by themselves. Verify that they to completion and pass and that there is no unexpected output
- [ ] Run the end to end tests by themselves. Verify that they to completion and pass and that there is no unexpected output

### Gate 5: Final commit for the issue - STOP HERE AND THINK: DID I FOLLOW BOTH THE LETTER AND SPIRIT OF MY INSTRUCTIONS
- [ ] Audit all uncommitted files in your working copy
	- [ ] Make sure that all files are either committed or, if they're temporary files, removed.
- [ ] Author a meaningful commit message for this change. Include details of your intent, as well as logs showing that you ran tests and that they passed.

FAILURE TO PASS ANY GATE INVALIDATES THE WHOLE IMPLEMENTATION. YOU ARE NOT DONE UNTIL YOU CLEAR GATE 5
NO EXCEPTIONS POLICY: Under no circumstances should you mark any test type as "not applicable". Every project, regardless of size or complexity, MUST have unit tests, integration tests, AND end-to-end tests. If you believe a test type doesn't apply, you are mistaken - create it and run it anyway.
