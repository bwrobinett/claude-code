# mcp__ide__getDiagnostics Tool

Get language diagnostics from VS Code.

## Overview

This tool provides access to language server diagnostics from VS Code, including syntax errors, type errors, linting issues, and other code analysis results.

## Parameters

- `uri`: Optional file URI to get diagnostics for (optional). If not provided, gets diagnostics for all files.

## Usage Notes

- Returns diagnostic information from the language server
- Includes error messages, warnings, and other code analysis results
- Useful for identifying issues that need to be fixed
- Can be used to check if code changes resolved existing issues

## When to Use

- After making code changes to check for new errors
- Before completing a task to ensure code quality
- When debugging issues in the codebase
- To get a comprehensive view of code health

## Return Value

- Returns diagnostic information including:
  - Error messages and locations
  - Warning messages
  - Linting suggestions
  - Type checking results

## Related Tools

- Use this tool in conjunction with Edit or MultiEdit tools to fix identified issues
- Complements other IDE integration tools for comprehensive development support