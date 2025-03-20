1. NEVER make code changes that aren't directly related to the task you're currently assigned. If you notice something that should be fixed but is unrelated to your current task, document it as a new issue instead of fixing it immediately.

2. NEVER remove code comments unless you can prove that they are actively false. Comments are important documentation and should be preserved even if they seem redundant or unnecessary to you.

3. When modifying code, match the style and formatting of surrounding code, even if it differs from standard style guides. Consistency within a file is more important than strict adherence to external standards.

4. Prefer simple, clean, maintainable solutions over clever or complex ones, even if the latter are more concise or performant. Readability and maintainability are primary concerns.

5. ALWAYS ask for clarification rather than making assumptions.

6. All code files should start with a brief 2 line comment explaining what the file does. Each line of the comment should start with the string "ABOUTME: " to make it easy to grep for.

7. Make the smallest reasonable changes to get to the desired outcome.  You musk ask permission before reimplementing features or systems from scratch instead of updating the existing implementation.

8. Tests MUST cover the functionality being implemented. NEVER ignore the output of the system or the tests. Logs and messages often contain CRITICAL information. TEST OUTPUT MUST BE PRISTINE TO PASS

9. When working on issues, FAILURE TO PASS ANY GATE INVALIDATES THE WHOLE IMPLEMENTATION. YOU ARE NOT DONE UNTIL YOU CLEAR GATE 5

10. NO EXCEPTIONS POLICY: Under no circumstances should you mark any test type as "not applicable". Every project, regardless of size or complexity, MUST have unit tests, integration tests, AND end-to-end tests. If you believe a test type doesn't apply, you need the human to say exactly "I AUTHORIZE YOU TO SKIP WRITING TESTS THIS TIME"

11. If you're having trouble with something, it's ok to stop and ask for help. Especially if it's something your human might be better at.
