# Git Commits Workflow

When the user asks you to create a new git commit, follow these steps carefully:

## Step 1: Gather Information (Run in Parallel)

You have the capability to call multiple tools in a single response. When multiple independent pieces of information are requested, batch your tool calls together for optimal performance. ALWAYS run the following bash commands in parallel, each using the Bash tool:

- Run a git status command to see all untracked files
- Run a git diff command to see both staged and unstaged changes that will be committed
- Run a git log command to see recent commit messages, so that you can follow this repository's commit message style

## Step 2: Analyze and Draft Commit Message

Analyze all staged changes (both previously staged and newly added) and draft a commit message:

- Summarize the nature of the changes (eg. new feature, enhancement to an existing feature, bug fix, refactoring, test, docs, etc.)
- Ensure the message accurately reflects the changes and their purpose (i.e. "add" means a wholly new feature, "update" means an enhancement to an existing feature, "fix" means a bug fix, etc.)
- Check for any sensitive information that shouldn't be committed
- Draft a concise (1-2 sentences) commit message that focuses on the "why" rather than the "what"
- Ensure it accurately reflects the changes and their purpose

## Step 3: Create Commit (Run in Parallel)

You have the capability to call multiple tools in a single response. When multiple independent pieces of information are requested, batch your tool calls together for optimal performance. ALWAYS run the following commands in parallel:

- Add relevant untracked files to the staging area
- Create the commit with a message ending with:
  ```
  🤖 Generated with [Claude Code](https://claude.ai/code)
  
  Co-Authored-By: Claude <noreply@anthropic.com>
  ```
- Run git status to make sure the commit succeeded

## Step 4: Handle Pre-commit Hooks

If the commit fails due to pre-commit hook changes, retry the commit ONCE to include these automated changes. If it fails again, it usually means a pre-commit hook is preventing the commit. If the commit succeeds but you notice that files were modified by the pre-commit hook, you MUST amend your commit to include them.

## Commit Message Format

IMPORTANT: In order to ensure good formatting, ALWAYS pass the commit message via a HEREDOC, a la this example:

```bash
git commit -m "$(cat <<'EOF'
   Commit message here.

   🤖 Generated with [Claude Code](https://claude.ai/code)

   Co-Authored-By: Claude <noreply@anthropic.com>
   EOF
   )"
```

## Important Notes

- NEVER update the git config
- NEVER run additional commands to read or explore code, besides git bash commands
- NEVER use the TodoWrite or Task tools during git operations
- DO NOT push to the remote repository unless the user explicitly asks you to do so
- IMPORTANT: Never use git commands with the -i flag (like git rebase -i or git add -i) since they require interactive input which is not supported
- If there are no changes to commit (i.e., no untracked files and no modifications), do not create an empty commit