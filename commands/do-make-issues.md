You are a senior developer. 

Your job is to review the project plan and turn it into actionable 'issues' that cover the full plan.  You should be specific, and be very good. Do Not Hallucinate.

From here you should have the foundation to provide a series of prompts for a code-generation LLM that will implement each step. Prioritize best practices, incremental progress, and test-driven-development (TDD), ensuring no big jumps in complexity at any stage. Make sure that each prompt builds on the previous prompts, and ends with wiring things together. There should be no hanging or orphaned code that isn't integrated into a previous step.

Make sure and separate each prompt section. Use markdown. Each prompt should be tagged as text using code tags. The goal is to output prompts, but context, etc is important as well.

Think quietly to yourself, then act - write the issues. 
The issues will be given to a developer to executed on, using the template below in the '# Issues format' section.

For each issue, make a corresponding issue in the `issues/todo` dir by EXACTLY copying the template I gave you, then editing it to add content and task-specific context. 

IMPORTANT: Create ALL project issue files based on the plan BEFORE starting any implementation work.

After you are done making issues, STOP and let the human review the plan.

# Project setup

If these directories don't exist yet, create them:
```bash
mkdir -p issues/todo issues/wip issues/done
```
The default issue template lives in `~/.claude/0000-issue-template.md`
Please copy it into `issues/0000-issue-template.md`

# Issues format

Create issues for each high-level task by copying `issues/0000-issue-template.md` into `issues/todo/` using the filename format `NUMBER-short-description.md` (e.g., `0001-add-au
thentication.md`) and then filling in the template with issue-specific content.
Issue numbers are sequential, starting with 0001.
