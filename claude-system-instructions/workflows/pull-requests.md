# Pull Requests Workflow

Use the gh command via the Bash tool for ALL GitHub-related tasks including working with issues, pull requests, checks, and releases. If given a Github URL use the gh command to get the information needed.

## Creating Pull Requests

IMPORTANT: When the user asks you to create a pull request, follow these steps carefully:

### Step 1: Understand Current State (Run in Parallel)

You have the capability to call multiple tools in a single response. When multiple independent pieces of information are requested, batch your tool calls together for optimal performance. ALWAYS run the following bash commands in parallel using the Bash tool, in order to understand the current state of the branch since it diverged from the main branch:

- Run a git status command to see all untracked files
- Run a git diff command to see both staged and unstaged changes that will be committed
- Check if the current branch tracks a remote branch and is up to date with the remote, so you know if you need to push to the remote
- Run a git log command and `git diff [base-branch]...HEAD` to understand the full commit history for the current branch (from the time it diverged from the base branch)

### Step 2: Analyze Changes

Analyze all changes that will be included in the pull request, making sure to look at all relevant commits (NOT just the latest commit, but ALL commits that will be included in the pull request!!!), and draft a pull request summary.

### Step 3: Create PR (Run in Parallel)

You have the capability to call multiple tools in a single response. When multiple independent pieces of information are requested, batch your tool calls together for optimal performance. ALWAYS run the following commands in parallel:

- Create new branch if needed
- Push to remote with -u flag if needed
- Create PR using gh pr create with the format below. Use a HEREDOC to pass the body to ensure correct formatting.

### PR Creation Format

```bash
gh pr create --title "the pr title" --body "$(cat <<'EOF'
## Summary
<1-3 bullet points>

## Test plan
[Checklist of TODOs for testing the pull request...]

🤖 Generated with [Claude Code](https://claude.ai/code)
EOF
)"
```

## Other GitHub Operations

- **View comments on a Github PR**: `gh api repos/foo/bar/pulls/123/comments`
- **Get PR information**: `gh pr view [PR_NUMBER]`
- **List PRs**: `gh pr list`
- **Get issue information**: `gh issue view [ISSUE_NUMBER]`

## Important Notes

- NEVER update the git config
- DO NOT use the TodoWrite or Task tools during PR operations
- Return the PR URL when you're done, so the user can see it
- Always use the gh CLI for GitHub operations
- Ensure you understand the full scope of changes before creating the PR