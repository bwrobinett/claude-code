# MultiEdit Tool

This is a tool for making multiple edits to a single file in one operation. It is built on top of the Edit tool and allows you to perform multiple find-and-replace operations efficiently. Prefer this tool over the Edit tool when you need to make multiple edits to the same file.

## Before Using This Tool

1. Use the Read tool to understand the file's contents and context
2. Verify the directory path is correct

## Parameters

- `file_path`: The absolute path to the file to modify (required, must be absolute)
- `edits`: An array of edit operations to perform (required)

### Edit Operations

Each edit in the array contains:
- `old_string`: The text to replace (must match the file contents exactly, including all whitespace and indentation)
- `new_string`: The edited text to replace the old_string
- `replace_all`: Replace all occurences of old_string (optional, defaults to false)

## Important Requirements

- All edits are applied in sequence, in the order they are provided
- Each edit operates on the result of the previous edit
- All edits must be valid for the operation to succeed - if any edit fails, none will be applied
- This tool is ideal when you need to make several changes to different parts of the same file
- For Jupyter notebooks (.ipynb files), use the NotebookEdit instead

## Critical Requirements

1. All edits follow the same requirements as the single Edit tool
2. The edits are atomic - either all succeed or none are applied
3. Plan your edits carefully to avoid conflicts between sequential operations

## Warnings

- The tool will fail if edits.old_string doesn't match the file contents exactly (including whitespace)
- The tool will fail if edits.old_string and edits.new_string are the same
- Since edits are applied in sequence, ensure that earlier edits don't affect the text that later edits are trying to find

## Best Practices

- Ensure all edits result in idiomatic, correct code
- Do not leave the code in a broken state
- Always use absolute file paths (starting with /)
- Only use emojis if the user explicitly requests it
- Use replace_all for replacing and renaming strings across the file

## Creating New Files

If you want to create a new file, use:
- A new file path, including dir name if needed
- First edit: empty old_string and the new file's contents as new_string
- Subsequent edits: normal edit operations on the created content