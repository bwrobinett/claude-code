# Write Tool

Writes a file to the local filesystem.

## Usage Requirements

- This tool will overwrite the existing file if there is one at the provided path
- If this is an existing file, you MUST use the Read tool first to read the file's contents. This tool will fail if you did not read the file first
- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required

## File Creation Policy

- NEVER proactively create documentation files (*.md) or README files
- Only create documentation files if explicitly requested by the User
- Only use emojis if the user explicitly requests it. Avoid writing emojis to files unless asked

## Parameters

- `file_path`: The absolute path to the file to write (required, must be absolute)
- `content`: The content to write to the file (required)

## Usage Notes

- Always use absolute paths starting with `/`
- This tool completely replaces the file contents
- Use Edit or MultiEdit tools for partial file modifications
- Consider the implications of overwriting existing files

## When to Use

- Creating new files when absolutely necessary
- Completely rewriting small files
- Creating configuration files
- Writing generated code files

## When NOT to Use

- Modifying existing files (use Edit or MultiEdit instead)
- Creating documentation files (unless explicitly requested)
- Making small changes to large files