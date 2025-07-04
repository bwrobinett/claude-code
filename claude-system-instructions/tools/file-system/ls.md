# LS Tool

Lists files and directories in a given path.

## Requirements

- The path parameter must be an absolute path, not a relative path
- You can optionally provide an array of glob patterns to ignore with the ignore parameter
- You should generally prefer the Glob and Grep tools, if you know which directories to search

## Parameters

- `path`: The absolute path to the directory to list (required, must be absolute)
- `ignore`: List of glob patterns to ignore (optional)

## Usage Notes

- Always use absolute paths starting with `/`
- This tool is useful for exploring directory structure
- Use Glob and Grep tools when you have specific search criteria

## Examples

```
# List files in workspace
LS /workspace

# List files ignoring node_modules and .git
LS /workspace ["node_modules", ".git"]
```