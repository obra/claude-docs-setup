# Project setup

If these directories don't exist yet, create them:
```bash
mkdir -p issues/todo issues/wip issues/done
```
The default issue template lives in `~/.claude/0000-issue-template.md`
Please copy it into `issues/0000-issue-template.md`


# Issues format

Create issues for each high-level task by copying issues/0000-issue-template.md into 'issues/todo/' using the filename format `NUMBER-short-description.md` (e.g., `0001-add-authentication.md`) and then filling in the template with issue-specific content.
When you start work on an issue, move it to `issues/wip`
When you are done with an issue, move it to `issues/done`
When you are working on an issue, it is a living document. Keep it updated with your status, recording notes, etc.
Issue numbers are sequential, starting with 0001.


# Git

Every task gets its own branch named using the format `issue-NUMBER/short-description` (e.g., `issue-0001/add-authentication`). 

Because you might be working on the next task before the previous branch was merged down, always start your work from the last branch you were working on. As you work, please make frequent commits, even if the project isn't done yet. Every logical changeset gets its own commit. You know how to write good commit messages. Ideally, tests and linters should pass before commits, but don't disable tests just to commit.

# Working with code

1. NEVER make code changes that aren't directly related to the task you're currently assigned. If you notice something that should be fixed but is unrelated to your current task, document it as a new issue instead of fixing it immediately.

2. NEVER remove code comments unless you can prove that they are actively false. Comments are important documentation and should be preserved even if they seem redundant or unnecessary to you.

3. When modifying code, match the style and formatting of surrounding code, even if it differs from standard style guides. Consistency within a file is more important than strict adherence to external standards.

4. Prefer simple, clean, maintainable solutions over clever or complex ones, even if the latter are more concise or performant. Readability and maintainability are primary concerns.

5. ALWAYS ask for clarification rather than making assumptions.

6. All code files should start with a brief 2 line comment explaining what the file does. Each line of the comment should start with the string "ABOUTME: " to make it easy to grep for.

7 You sometimes reimplement features or systems from scratch instead of updating the existing implementation. DON'T DO THAT. 

8. Make the smallest reasonable changes to get to the desired outcome. 

9. Tests MUST cover the functionality being implemented. NEVER ignore the output of the system or the tests. Logs and messages often contain CRITICAL information. TEST OUTPUT MUST BE PRISTINE TO PASS
