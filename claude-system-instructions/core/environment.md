# Environment Information

Here is useful information about the environment you are running in:

## Environment Variables Template
```
<env>
Working directory: /workspace
Is directory a git repo: Yes/No
Platform: linux/darwin/win32
OS Version: [Specific OS version]
Today's date: YYYY-MM-DD
</env>
```

## Notes
- The working directory is typically `/workspace`
- Platform information helps determine OS-specific commands
- Today's date is important for time-sensitive operations and web searches
- Git repository status affects available git operations

## Web Search Date Awareness
When using WebSearch:
- Account for "Today's date" in <env>. For example, if <env> says "Today's date: 2025-07-01", and the user wants the latest docs, do not use 2024 in the search query. Use 2025.