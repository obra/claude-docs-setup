# Project Management

At some point, the user will ask you to make a plan.

Draft a detailed, step-by-step blueprint for building this project. Then, once you have a solid plan, break it down into small, iterative chunks that build on each other. Look at these chunks and then go another round to break it into small steps. Review the results and make sure that the steps are small enough to be implemented safely with strong testing, but big enough to move the project forward. Iterate until you feel that the steps are right sized for this project.

From here you should have the foundation to provide a series of prompts for a code-generation LLM that will implement each step in a test-driven manner. Prioritize best practices, incremental progress, and early testing, ensuring no big jumps in complexity at any stage. Make sure that each prompt builds on the previous prompts, and ends with wiring things together. There should be no hanging or orphaned code that isn't integrated into a previous step.

Make sure and separate each prompt section. Use markdown. Each prompt should be tagged as text using code tags. The goal is to output prompts, but context, etc is important as well.

Store the plan in plan.md. 

# After you make a plan

You are a senior developer. Your job is to review this code, and write out the top issues that you see with the code. It could be bugs, design choices, or code cleanliness issues.

You should be specific, and be very good. Do Not Hallucinate.

Think quietly to yourself, then act - write the issues. The issues will be given to a developer to executed on, so they should be in a format that is compatible with github issues.

For each issue, make a corresponding issue in the projects/todo dir but make sure that it isn't a duplicate issue.

After you are done making issues, stop and let the human review the plan.

# Project setup

If these directories don't exist yet, create them:
```bash
mkdir -p projects/todo projects/wip projects/done
```



# Issues format

We use issue files to track and manage work. 
Each high-level task gets its own issue.
Name issue files using the format `issue-NUMBER-short-description.md` (e.g., `issue-0001-add-authentication.md`). 
Issue numbers are sequential, starting with 0001.

Each issue file should include the following sections:
- Top-level heading describing the issue
- Problem: describing what needs to be solved
- Approach: describing the approach you are pursuing
- Implementation Plan: detailed steps for implementing the solution
- Failed Approaches: describing any approaches that didn't work. 
- Testing: how the changes will be tested
- Documentation: what documentation needs to be updated
- Implementation: list of all git commits made and the branch name
- Tasks: a checklist of items to complete
- The Tasklist must contain all of the following items verbatim. It must also list the actual tasks for the issue in the 'Gate 2' section.

	**CRITICAL: The instructions in this file are not optional guidelines - they are mandatory requirements.**
	
	- [ ] Plan your implementation
	- [ ] Ensure that all implementation tasks are listed in this TODO list. 
	
	## Gate 1: Pre-Implementation - STOP HERE AND THINK
	Before writing ANY implementation code, confirm completion of:
	- [ ] Git repository initialized with proper branch
	- [ ] Required directories created
	- [ ] Major design decisions documented in docs/design-decisions/<decision-slug.md> explaining the choice you made, alternatives you considered, and why you chose what you did. BE CONCISE.
	- [ ] Stand up from your desk and scream out loud "WE DO TEST DRIVEN DEVELOPMENT. I WILL NOT WRITE ANY CODE UNTIL I WRITE AND RUN A FAILING TEST FOR THE THING I AM DOING"
	- [ ] Unit test files created 
	- [ ] End to end test files created 
	- [ ] Integration test files created
	- [ ] Verify that new unit tests run to completion and fail
	- [ ] Verify that new integration tests run to completion and fail
	- [ ] Verify that new end to end tests run to completion and fail


	## Gate 2: Implement the functionlity - STOP HERE AND THINK

	[ fill in this section with issue-specific tasks ]	
	
	## Gate 3: Mid-Implementation Review - STOP HERE AND THINK

	After implementing core functionality:
	- [ ] Verify all completed code adheres to ALL requirements in this file and in CLAUDE.md
	- [ ] Check for drift from documented design decisions
	- [ ] Confirm test coverage for all implemented features
	
	## Gate 4: Pre-Completion Verification - STOP HERE AND THINK

	Before declaring the task complete perform these MANDATORY checks:
	- [ ] Run ALL verification commands (tests, linting, typechecking)
	- [ ] Write function-level documentation for all functions explaining what they do, their parameters, return values, and usage examples where appropriate.
	- [ ] Add explanatory comments for any non-obvious or tricky code that might confuse another experienced developer who isn't familiar with this specific codebase.
	- [ ] Update the README.md. It should always include:
 		- [ ] a set of examples showing how to use all the commandline tools in the project. 
 		- [ ] how to run the test suite
 		- [ ] steps needed to set up a development environment
	- [ ] Verify that unit tests run to completion and pass
	- [ ] Verify that integration tests run to completion and pass
	- [ ] Verify that end to end tests run to completion and pass
	
	# Gate 5: Final commit for the issue - STIO HERE AND THINK

	- [ ] Author a meaningful commit message for this change. Include details of your intent, as well as logs showing that you ran tests and that they passed.

	FAILURE TO PASS ANY GATE INVALIDATES THE IMPLEMENTATION
	NO EXCEPTIONS POLICY: Under no circumstances should you mark any test type as "not
  	applicable". Every project, regardless of size or complexity, MUST have unit tests,
  	integration tests, AND end-to-end tests. If you believe a test type doesn't apply, 
	you are mistaken - create it and run it anyway.

# Git

Every task gets its own branch named using the format `issue-NUMBER/short-description` (e.g., `issue-0001/add-authentication`). 

Because you might be working on the next task before the previous branch was merged down, always start your work from the last branch you were working on. As you work, please make frequent commits, even if the project isn't done yet. Every logical changeset gets its own commit. You know how to write good commit messages. Ideally, tests and linters should pass before commits, but don't disable tests just to commit.

# Rewriting Code

You sometimes have a tendency to reimplement features or systems from scratch, instead of updating the existing implementation. Try hard to work with the existing implementation, rather than starting over. Make the smallest reasonable changes to get to the desired outcome. When you do make changes, you don't need to leave the old thing hanging around. We're tracking everything in git. It'll be in the history.

# Code Changes Discipline

1. NEVER make code changes that aren't directly related to the task you're currently assigned. If you notice something that should be fixed but is unrelated to your current task, document it as a new issue instead of fixing it immediately.

2. NEVER remove code comments unless you can prove that they are actively false. Comments are important documentation and should be preserved even if they seem redundant or unnecessary to you.

3. When modifying code, match the style and formatting of surrounding code, even if it differs from standard style guides. Consistency within a file is more important than strict adherence to external standards.

4. Prefer simple, clean, maintainable solutions over clever or complex ones, even if the latter are more concise or performant. Readability and maintainability are primary concerns.

5. If instructions are unclear or you're unsure how to proceed, always ask for clarification rather than making assumptions.

6. All code files should start with a brief 2 line comment explaining what the file does. Each line of the comment should start with the string "ABOUTME: " to make it easy to grep for.
