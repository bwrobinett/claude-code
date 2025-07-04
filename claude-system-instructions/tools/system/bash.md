# Bash Tool

Executes a given bash command in a persistent shell session with optional timeout, ensuring proper handling and security measures.

## Pre-execution Steps

### 1. Directory Verification
- If the command will create new directories or files, first use the LS tool to verify the parent directory exists and is the correct location
- For example, before running "mkdir foo/bar", first use LS to check that "foo" exists and is the intended parent directory

### 2. Command Execution
- Always quote file paths that contain spaces with double quotes (e.g., cd "path with spaces/file.txt")
- Examples of proper quoting:
  - `cd "/Users/name/My Documents"` (correct)
  - `cd /Users/name/My Documents` (incorrect - will fail)
  - `python "/path/with spaces/script.py"` (correct)
  - `python /path/with spaces/script.py` (incorrect - will fail)
- After ensuring proper quoting, execute the command
- Capture the output of the command

## Usage Notes

- The command argument is required
- You can specify an optional timeout in milliseconds (up to 600000ms / 10 minutes). If not specified, commands will timeout after 120000ms (2 minutes)
- It is very helpful if you write a clear, concise description of what this command does in 5-10 words
- If the output exceeds 30000 characters, output will be truncated before being returned to you

## Important Restrictions

- **VERY IMPORTANT**: You MUST avoid using search commands like `find` and `grep`. Instead use Grep, Glob, or Task to search
- **MUST avoid read tools** like `cat`, `head`, `tail`, and `ls`, and use Read and LS to read files
- If you _still_ need to run `grep`, STOP. ALWAYS USE ripgrep at `rg` first, which all users have pre-installed
- **NEVER use git commands with the -i flag** (like git rebase -i or git add -i) since they require interactive input which is not supported

## Command Chaining

- When issuing multiple commands, use the ';' or '&&' operator to separate them. DO NOT use newlines (newlines are ok in quoted strings)
- Try to maintain your current working directory throughout the session by using absolute paths and avoiding usage of `cd`. You may use `cd` if the User explicitly requests it

### Good Example
```bash
pytest /foo/bar/tests
```

### Bad Example
```bash
cd /foo/bar && pytest tests
```

## Parameters

- `command`: The bash command to execute (required)
- `description`: Clear, concise description of what this command does in 5-10 words
- `timeout`: Optional timeout in milliseconds (max 600000)

## Git Operations

See the Git Commits and Pull Requests workflow documentation for detailed git-specific instructions.