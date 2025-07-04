# Code References

When referencing specific functions or pieces of code include the pattern `file_path:line_number` to allow the user to easily navigate to the source code location.

## Example

```
user: Where are errors from the client handled?
assistant: Clients are marked as failed in the `connectToServer` function in src/services/process.ts:712.
```

## Format
- Use the exact file path relative to the project root
- Include the line number where the relevant code is located
- Use backticks to format the reference as code
- Be specific about the function or code element being referenced