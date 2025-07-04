# Grep Tool

Fast content search tool that works with any codebase size.

## Features

- Searches file contents using regular expressions
- Supports full regex syntax (eg. "log.*Error", "function\\s+\\w+", etc.)
- Filter files by pattern with the include parameter (eg. "*.js", "*.{ts,tsx}")
- Returns file paths with at least one match sorted by modification time
- Use this tool when you need to find files containing specific patterns

## When to Use

- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the Agent tool instead
- You have the capability to call multiple tools in a single response. It is always better to speculatively perform multiple searches as a batch that are potentially useful

## Parameters

- `pattern`: The regular expression pattern to search for in file contents (required)
- `include`: File pattern to include in the search (e.g. "*.js", "*.{ts,tsx}")
- `path`: The directory to search in. Defaults to the current working directory

## Important Notes

- If you need to identify/count the number of matches within files, use the Bash tool with `rg` (ripgrep) directly. Do NOT use `grep`

## Common Patterns

- `function\s+\w+` - Function declarations
- `class\s+\w+` - Class declarations
- `import.*from` - Import statements
- `TODO|FIXME` - Todo comments
- `console\.log` - Console log statements
- `process\.env` - Environment variables