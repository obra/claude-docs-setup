# Claude Docs Setup Tool Specification

## Overview
A command-line tool that helps Claude copy instructional documents and templates into a project directory. This tool will be primarily used by Claude AI to set up project structure based on standardized templates.

## Core Functionality
- Copy Markdown templates from a default location (~/.claude-templates) to a specified project directory
- Create standard directory structure (projects/todo, projects/wip, projects/done)
- Issue template content will be derived from CLAUDE.md
- Perform basic validation before copying (check if directories exist, check for file conflicts)

## Technical Details

### Command Name
```
claude-docs setup
```

### Implementation Language
Node.js

### Template Storage
Templates will be stored in `~/.claude-templates/` by default

### Template Formats
All templates will be in Markdown format

### Templates Included
1. Task template - Template for project tasks/issues
2. Project template - Template for overall project documentation
3. TDD explanation document - Reference guide for Test-Driven Development

#### Task Template Structure
The task template includes the following sections:
- Title - Brief description of the task
- Problem - Concise description of the problem addressed
- Approach - Description of the solution approach
- Implementation Plan - Detailed implementation steps
- Failed Approaches - Documentation of unsuccessful attempts
- Testing - Description of testing methodology
- Documentation - Required documentation updates
- Implementation - Record of git commits and branch name
- Tasks - Checklist of items to complete, including:
  - Implementation gates (pre-implementation, mid-implementation, pre-completion)
  - Test verifications (unit, integration, end-to-end)
  - Quality checks

#### Project Template Structure
The project template includes the following sections:
- Project Name - Title of the project
- Overview - High-level project description
- Goals - Specific and measurable objectives
- Timeline - Expected completion schedule with milestones
- Features - List of planned features
- Technical Approach - Architecture and technical strategy
- Dependencies - External requirements
- Team - Team members and roles
- Risks and Mitigations - Potential issues and strategies
- Success Criteria - Project completion standards
- Documentation - Links to resources

#### TDD Explanation Document Structure
The TDD explanation document includes:
- Definition of TDD
- TDD Cycle explanation (Red-Green-Refactor)
- Benefits of TDD
- Best practices
- Types of tests (Unit, Integration, End-to-End)
- Implementation steps

### Validation
- Check if target directory exists
- Check for potential file conflicts
- Validate template source directory exists

### Directory Structure Creation
The tool will create the following directories if they don't exist:
- projects/todo
- projects/wip
- projects/done

### User Interaction
- Simple command-line interface
- Primarily designed for Claude AI to interact with
- No GUI components

### Customization Options
- No customization options in v1

### Post-Setup Behavior
- Display basic success message
- No additional actions (such as opening files)

### Installation
- Installable via npm

### Configuration
- No configuration options in v1
- All settings hardcoded

### Error Handling
- Basic error handling
- No special logging requirements

### Special Features
- Pull issue template content from CLAUDE.md
- No version control integration in v1
- No support for updating existing templates in v1

#### CLAUDE.md Content Extraction
The tool will extract content from CLAUDE.md to populate parts of the task template:

1. **Detection Process**:
   - Look for CLAUDE.md in the current directory
   - If not found, look for CLAUDE.md in the user's home directory

2. **Content Extraction**:
   - Parse the CLAUDE.md file as markdown
   - Extract the following sections:
     - Implementation Gates (to populate the Gates sections in the task template)
     - Test Driven Development requirements
     - Code Changes Discipline guidelines

3. **Mapping to Task Template**:
   - The Implementation Gates section will be mapped to corresponding sections in the task template
   - TDD requirements will be included in the Testing section
   - Code Changes guidelines will be included in the Implementation section

4. **Fallback Behavior**:
   - If CLAUDE.md is not found, use the default task template
   - If specific sections are not found in CLAUDE.md, use default content for those sections

## Implementation Plan
1. Set up Node.js project with necessary dependencies
2. Create command-line interface using a library like Commander.js
3. Implement core file operations (copy templates, create directories)
4. Add validation logic
5. Implement CLAUDE.md content extraction for issue template
6. Add error handling
7. Package for npm distribution
8. Create documentation

## Future Considerations (v2+)
- Custom template locations
- Template customization options
- Version control integration
- Support for different project types
- Configuration file support