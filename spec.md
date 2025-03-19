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
1. Task template (to be filled in)
2. Project template (to be filled in)
3. TDD explanation document

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