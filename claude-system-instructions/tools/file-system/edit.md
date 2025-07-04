# Edit Tool

Performs exact string replacements in files.

## Requirements

- You must use your `Read` tool at least once in the conversation before editing. This tool will error if you attempt an edit without reading the file
- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required

## Usage Guidelines

### String Matching
- When editing text from Read tool output, ensure you preserve the exact indentation (tabs/spaces) as it appears AFTER the line number prefix
- The line number prefix format is: spaces + line number + tab. Everything after that tab is the actual file content to match
- Never include any part of the line number prefix in the old_string or new_string

### Uniqueness Requirements
- The edit will FAIL if `old_string` is not unique in the file
- Either provide a larger string with more surrounding context to make it unique or use `replace_all` to change every instance of `old_string`

## Parameters

- `file_path`: The absolute path to the file to modify (required)
- `old_string`: The text to replace (required)
- `new_string`: The text to replace it with (required, must be different from old_string)
- `replace_all`: Replace all occurences of old_string (default false)

## Usage Notes

- Only use emojis if the user explicitly requests it. Avoid adding emojis to files unless asked
- Use `replace_all` for replacing and renaming strings across the file. This parameter is useful if you want to rename a variable for instance

## Common Use Cases

- Fixing bugs in specific functions
- Updating configuration values
- Renaming variables or functions
- Adding new code to existing functions
- Modifying imports or dependencies