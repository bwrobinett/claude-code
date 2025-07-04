# Claude System Instructions

This directory contains Claude's system instructions organized into a modular structure for easy maintenance and reference.

## Directory Structure

```
claude-system-instructions/
├── README.md                          # This file
├── core/                              # Core identity and policies
├── behavior/                          # Behavioral guidelines
├── tools/                             # Tool documentation
└── workflows/                         # Specific workflows
```

## Core Instructions

### [core/](core/)
- **[identity.md](core/identity.md)** - Claude Code identity and purpose
- **[security-policy.md](core/security-policy.md)** - Security restrictions and policies
- **[environment.md](core/environment.md)** - Environment variables and setup

## Behavioral Guidelines

### [behavior/](behavior/)
- **[tone-and-style.md](behavior/tone-and-style.md)** - Communication style and conciseness
- **[proactiveness.md](behavior/proactiveness.md)** - When to be proactive vs wait
- **[code-conventions.md](behavior/code-conventions.md)** - Following existing patterns
- **[code-style.md](behavior/code-style.md)** - Code style rules and preferences
- **[task-management.md](behavior/task-management.md)** - TodoRead/Write usage
- **[code-references.md](behavior/code-references.md)** - file:line reference format

## Tool Documentation

### [tools/](tools/)

#### Agent Tools
- **[agent/task.md](tools/agent/task.md)** - Task/Agent tool for complex searches

#### File System Tools
- **[file-system/read.md](tools/file-system/read.md)** - Reading files and images
- **[file-system/write.md](tools/file-system/write.md)** - Writing files
- **[file-system/edit.md](tools/file-system/edit.md)** - Single-edit operations
- **[file-system/multi-edit.md](tools/file-system/multi-edit.md)** - Multi-edit operations
- **[file-system/glob.md](tools/file-system/glob.md)** - File pattern matching
- **[file-system/grep.md](tools/file-system/grep.md)** - Content searching
- **[file-system/ls.md](tools/file-system/ls.md)** - Directory listing

#### System Tools
- **[system/bash.md](tools/system/bash.md)** - Bash command execution
- **[system/exit-plan-mode.md](tools/system/exit-plan-mode.md)** - Exiting plan mode

#### Jupyter Tools
- **[jupyter/notebook-read.md](tools/jupyter/notebook-read.md)** - Reading notebooks
- **[jupyter/notebook-edit.md](tools/jupyter/notebook-edit.md)** - Editing notebooks
- **[jupyter/mcp-execute-code.md](tools/jupyter/mcp-execute-code.md)** - Executing code

#### Web Tools
- **[web/web-fetch.md](tools/web/web-fetch.md)** - Fetching web content
- **[web/web-search.md](tools/web/web-search.md)** - Web searching

#### Task Tracking Tools
- **[task-tracking/todo-read.md](tools/task-tracking/todo-read.md)** - Reading todo lists
- **[task-tracking/todo-write.md](tools/task-tracking/todo-write.md)** - Managing todo lists

#### IDE Tools
- **[ide/mcp-get-diagnostics.md](tools/ide/mcp-get-diagnostics.md)** - Getting VS Code diagnostics

## Workflow Documentation

### [workflows/](workflows/)
- **[git-commits.md](workflows/git-commits.md)** - Complete git commit workflow
- **[pull-requests.md](workflows/pull-requests.md)** - GitHub PR creation workflow
- **[common-tasks.md](workflows/common-tasks.md)** - General task execution patterns

## Usage

This modular structure allows for:
- Easy maintenance and updates of specific sections
- Selective loading of instruction components
- Clear separation of concerns
- Better organization and findability

Each file contains complete documentation for its specific area, including usage guidelines, parameters, examples, and best practices.