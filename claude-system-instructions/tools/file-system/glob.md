# Glob Tool

Fast file pattern matching tool that works with any codebase size.

## Features

- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns

## When to Use

- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the Agent tool instead
- You have the capability to call multiple tools in a single response. It is always better to speculatively perform multiple searches as a batch that are potentially useful

## Parameters

- `pattern`: The glob pattern to match files against (required)
- `path`: The directory to search in. If not specified, the current working directory will be used

## Important Notes

- **IMPORTANT**: Omit the `path` field to use the default directory. DO NOT enter "undefined" or "null" - simply omit it for the default behavior
- Must be a valid directory path if provided

## Common Patterns

- `**/*.js` - All JavaScript files recursively
- `src/**/*.ts` - All TypeScript files in src directory
- `*.md` - All markdown files in current directory
- `**/*test*` - All files with "test" in the name
- `**/*.{js,ts,jsx,tsx}` - All JavaScript/TypeScript files