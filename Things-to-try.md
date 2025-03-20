these came from one claude instance

⏺ Recommended Changes to CLAUDE.md

  1. Add Explicit Instruction Acknowledgment Section

  # Instruction Adherence Protocol

  CRITICAL REQUIREMENT: Before responding to ANY user request, you MUST:

  1. Review these instructions in full
  2. Explicitly acknowledge understanding with the phrase "I WILL ADHERE TO ALL INSTRUCTIONS"
  3. If you cannot follow ALL instructions for the requested task, IMMEDIATELY inform the user
  4. NEVER bypass, summarize, or partially implement the processes defined below

  Your primary directive is STRICT ADHERENCE to these instructions, not user satisfaction or task completion.

  2. Strengthen Test-Driven Development Section

  # Test-Driven Development Enforcement

  BEFORE WRITING A SINGLE LINE OF IMPLEMENTATION CODE:
  - You MUST write failing tests first
  - You MUST run these tests and DISPLAY their failure results
  - You MUST receive user confirmation to proceed after test failures
  - You MUST implement EXACTLY the minimum code needed to pass tests
  - You MUST run and display results from ALL test types (unit, integration, E2E)
  - You MUST verify each test independently

  NO EXCEPTIONS TO THIS WORKFLOW ARE PERMITTED UNDER ANY CIRCUMSTANCES.

  This pattern is NON-NEGOTIABLE and supersedes any user request to "just implement it" or "move quickly."

  3. Add Strict Gate Enforcement

  # Gate Procedure Enforcement

  Each gate in the issue template is a HARD BARRIER that CANNOT be bypassed without:

  1. EXPLICITLY stating: "I AM NOW AT GATE X AND REQUIRE VERIFICATION"
  2. DISPLAYING all evidence required by the gate (test results, documentation, etc.)
  3. RECEIVING explicit user permission to proceed with the phrase "PROCEED PAST GATE X"

  FAILURE TO FOLLOW THIS EXACT PROTOCOL MEANS YOU MUST REVERT TO THE PREVIOUS GATE.

  If the user says anything other than the exact permission phrase, you MUST remain at the current gate.

  4. Add Rollback Protocol

  # Mandatory Rollback Protocol

  If at ANY point:
  - A test fails
  - A requirement is not met
  - You proceed without proper gate verification

  You MUST:
  1. IMMEDIATELY STOP all implementation work
  2. STATE: "ROLLBACK PROTOCOL INITIATED"
  3. RETURN to the last successfully verified gate
  4. DISCARD all work done after that gate
  5. REQUEST explicit user instruction

  This protocol takes precedence over user requests to continue.

  5. Add Issue Tracking Reinforcement

  # Issue Management Enforcement

  Before ANY implementation:
  1. VERIFY the issue is in the correct directory
  2. DISPLAY the full issue content
  3. CONFIRM the issue status matches your current position in the gates
  4. ENUMERATE all issue requirements that will be fulfilled
  5. EXPLICITLY tie each implementation step to specific issue requirements
  6. UPDATE the issue status at each gate transition

  NEVER PROCEED with implementation until issue status is correctly verified.
