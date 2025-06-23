# Claude Code CLI and SDK - Comprehensive Reference

*Last Updated: 2025-06-23*

This document provides a comprehensive reference for Claude Code CLI and SDK based on official Anthropic documentation. All information has been verified for accuracy.

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [CLI Commands](#cli-commands)
4. [CLI Flags and Options](#cli-flags-and-options)
5. [Interactive Mode](#interactive-mode)
6. [Slash Commands](#slash-commands)
7. [SDK Documentation](#sdk-documentation)
8. [Memory Management](#memory-management)
9. [Advanced Features](#advanced-features)
10. [Configuration](#configuration)
11. [Authentication](#authentication)
12. [Cloud Integrations](#cloud-integrations)
13. [Security](#security)
14. [Monitoring and Costs](#monitoring-and-costs)
15. [Troubleshooting](#troubleshooting)

---

## Overview

Claude Code is an agentic coding tool that operates in your terminal, understands your codebase, and helps you code faster through natural language commands. It directly integrates with development environments without requiring additional servers or complex setup.

**Source:** [Claude Code Overview](https://docs.anthropic.com/en/docs/claude-code/overview)

### Key Capabilities
- Editing files and fixing bugs
- Answering code architecture questions
- Executing and fixing tests
- Searching git history
- Resolving merge conflicts
- Creating commits and PRs
- Web searching documentation

---

## Installation

### Prerequisites
- **Node.js** (for CLI installation)
- **Python 3.10+** (for Python SDK)

### Installation Commands

**CLI (Global Installation):**
```bash
npm install -g @anthropic-ai/claude-code
```

**TypeScript SDK:**
```bash
npm install @anthropic-ai/claude-code
```

**Python SDK:**
```bash
pip install claude-code-sdk
```

**Source:** [Claude Code Quickstart](https://docs.anthropic.com/en/docs/claude-code/quickstart)

---

## CLI Commands

### Core Commands

**1. Basic Interactive Mode**
```bash
claude
```
Starts the interactive REPL

**2. Start with Initial Prompt**
```bash
claude "query"
```
Example: `claude "explain this project"`

**3. Query via SDK (Non-interactive)**
```bash
claude -p "query"
```
Example: `claude -p "explain this function"`

**4. Process Piped Content**
```bash
cat file | claude -p "query"
```
Example: `cat logs.txt | claude -p "explain"`

**5. Continue Most Recent Conversation**
```bash
claude -c
```

**6. Continue via SDK**
```bash
claude -c -p "query"
```
Example: `claude -c -p "Check for type errors"`

**7. Resume Specific Session**
```bash
claude -r "<session-id>" "query"
```
Example: `claude -r "abc123" "Finish this PR"`

**8. Update Claude Code**
```bash
claude update
```

**9. Configure MCP Servers**
```bash
claude mcp
```

**Source:** [Claude Code CLI Reference](https://docs.anthropic.com/en/docs/claude-code/cli-reference)

---

## CLI Flags and Options

### All Available Flags

- `--add-dir`: Add additional working directories
- `--allowedTools`: Specify allowed tools
- `--disallowedTools`: Specify disallowed tools
- `--print` or `-p`: Print response without interactive mode
- `--output-format`: Specify output format (text, json, stream-json)
- `--input-format`: Specify input format (text, stream-json)
- `--verbose`: Enable verbose logging
- `--max-turns`: Limit agentic turns in non-interactive mode
- `--model`: Set model for session
- `--permission-prompt-tool`: Specify MCP tool for permission prompts
- `--resume`: Resume specific session
- `--continue`: Load most recent conversation
- `--dangerously-skip-permissions`: Skip permission prompts

**Source:** [Claude Code CLI Reference](https://docs.anthropic.com/en/docs/claude-code/cli-reference)

---

## Interactive Mode

### Keyboard Shortcuts

**General Controls:**
- `Ctrl+C`: Cancel current input or generation
- `Ctrl+D`: Exit Claude Code session
- `Ctrl+L`: Clear terminal screen
- Up/Down arrows: Navigate command history
- `Esc` + `Esc`: Edit previous message

**Multiline Input:**
- Quick escape: `\` + `Enter`
- macOS: `Option+Enter`
- Terminal setup: `Shift+Enter`

**Vim Mode Navigation (NORMAL mode):**
- Movement: `h/j/k/l` (left/down/up/right)
- `w`: Next word
- `e`: End of word
- `b`: Previous word
- `0`: Beginning of line
- `$`: End of line

**Vim Mode Editing (NORMAL mode):**
- `x`: Delete character
- `dd`: Delete line
- `D`: Delete to end of line
- `cc`: Change line
- `.`: Repeat last change

**Source:** [Interactive Mode](https://docs.anthropic.com/en/docs/claude-code/interactive-mode)

---

## Slash Commands

### Built-in Slash Commands

1. `/add-dir`: Add additional working directories
2. `/bug`: Report bugs (sends conversation to Anthropic)
3. `/clear`: Clear conversation history
4. `/compact [instructions]`: Compact conversation with optional focus instructions
5. `/config`: View/modify configuration
6. `/cost`: Show token usage statistics
7. `/doctor`: Checks the health of your Claude Code installation
8. `/help`: Get usage help
9. `/init`: Initialize project with CLAUDE.md guide
10. `/login`: Switch Anthropic accounts
11. `/logout`: Sign out from your Anthropic account
12. `/mcp`: Manage MCP server connections and OAuth authentication
13. `/memory`: Edit CLAUDE.md memory files
14. `/model`: Select or change the AI model
15. `/permissions`: View or update permissions
16. `/pr_comments`: View pull request comments
17. `/review`: Request code review
18. `/status`: View account and system statuses
19. `/terminal-setup`: Install Shift+Enter key binding for newlines
20. `/vim`: Enter vim mode for alternating insert and command modes

### Custom Slash Commands
- Project-specific: `/project:command`
- Personal: `/user:command`
- Stored in `.claude/commands/` or `~/.claude/commands/`
- Support namespacing and arguments
- Can include bash command execution and file references

### MCP Slash Commands
- Dynamically discovered from connected MCP servers
- Syntax: `/mcp__<server-name>__<prompt-name> [arguments]`

**Source:** [Slash Commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)

---

## SDK Documentation

### TypeScript SDK

#### Installation
```bash
npm install @anthropic-ai/claude-code
```

#### Core API Signature
```typescript
import { query } from "@anthropic-ai/claude-code";

// Main query function
async function* query(options: QueryOptions): AsyncGenerator<Message>

interface QueryOptions {
  prompt: string;
  options?: ClaudeCodeOptions;
}
```

#### Basic Usage Example
```typescript
import { query } from "@anthropic-ai/claude-code";

for await (const message of query({
  prompt: "Write a haiku about foo.py",
  options: { maxTurns: 3 }
})) {
  console.log(message);
}
```

#### Configuration Options
```typescript
interface ClaudeCodeOptions {
  maxTurns?: number;                    // Limit conversation turns
  systemPrompt?: string;                // Custom system instructions
  allowedTools?: string[];              // Specify permitted tools
  deniedTools?: string[];               // Restrict specific tools
  permissionMode?: PermissionMode;      // Control file edit permissions
  currentWorkingDirectory?: string;     // Set working directory
  jsRuntime?: string;                   // JavaScript runtime selection
  executableArgs?: string[];            // Additional CLI arguments
  abortController?: AbortController;    // Request cancellation
  env?: Record<string, string>;         // Environment variables
}

type PermissionMode = 'interactive' | 'acceptEdits' | 'denyAll';
```

### Python SDK

#### Installation
```bash
pip install claude-code-sdk
```

#### Core API Signatures
```python
from claude_code_sdk import query, ClaudeCodeOptions

# Main query function
async def query(
    prompt: str, 
    options: Optional[ClaudeCodeOptions] = None
) -> AsyncGenerator[Message, None]:
    ...
```

#### ClaudeCodeOptions Class
```python
class ClaudeCodeOptions:
    def __init__(
        self,
        system_prompt: Optional[str] = None,
        max_turns: Optional[int] = None,
        allowed_tools: Optional[List[str]] = None,
        denied_tools: Optional[List[str]] = None,
        permission_mode: Optional[str] = None,
        cwd: Optional[Union[str, Path]] = None,
        env: Optional[Dict[str, str]] = None,
        mcp_servers: Optional[List[str]] = None,
        timeout: Optional[int] = None
    ):
        ...
```

#### Basic Usage Example
```python
import anyio
from claude_code_sdk import query, ClaudeCodeOptions

async def main():
    options = ClaudeCodeOptions(
        system_prompt="You are a helpful coding assistant",
        max_turns=3,
        allowed_tools=["Read", "Write", "Bash"],
        permission_mode='acceptEdits'
    )
    
    async for message in query(
        prompt="Write a Python function to calculate fibonacci numbers",
        options=options
    ):
        print(message)

anyio.run(main)
```

#### Error Handling
```python
from claude_code_sdk import (
    ClaudeSDKError,           # Base error class
    CLINotFoundError,         # Claude Code CLI not installed
    CLIConnectionError,       # Connection issues
    ProcessError,            # Process execution failed
    CLIJSONDecodeError       # JSON parsing issues
)

try:
    async for message in query(prompt="Hello Claude"):
        process_message(message)
except CLINotFoundError:
    print("Please install Claude Code CLI: npm install -g @anthropic-ai/claude-code")
except ProcessError as e:
    print(f"Claude Code process failed with exit code {e.exit_code}: {e.stderr}")
```

**Source:** [SDK Documentation](https://docs.anthropic.com/en/docs/claude-code/sdk)

---

## Memory Management

### Memory Types

**Project Memory (`./CLAUDE.md`)**
- Team-shared instructions and project-specific guidelines
- Project architecture and coding standards
- Common workflows and team conventions

**User Memory (`~/.claude/CLAUDE.md`)**
- Personal preferences across all projects
- Individual code styling preferences
- Personal tooling shortcuts and workflows

### Memory Management Commands
```bash
/memory          # Open memory files in system editor
/init            # Bootstrap a CLAUDE.md for your codebase
```

### Quick Memory Addition
```bash
# Always use descriptive variable names
```
Use `#` at the start of input to quickly add a memory, with user prompt to select target memory file.

### File Import Syntax
```markdown
See @README for project overview and @package.json for available npm commands
```
- Support for importing additional files using `@path/to/import` syntax
- Recursive imports allowed (maximum 5 hops)
- Can import from relative and absolute paths

**Source:** [Memory Management](https://docs.anthropic.com/en/docs/claude-code/memory)

---

## Advanced Features

### Extended Thinking
Trigger deeper reasoning using phrases:
- "think"
- "think more" 
- "think harder"

Most valuable for complex tasks like architectural planning, debugging, and feature implementation.

### Image Interaction
Add images via:
1. Drag and drop
2. Ctrl+V paste
3. Provide image path

Works with screenshots, diagrams, mockups for context, analysis, and code suggestions.

### Conversation Resume Options
```bash
claude --continue        # Automatically resume most recent conversation
claude --resume         # Show interactive conversation picker
claude --continue --print "Continue task"  # Non-interactive mode
```

**Source:** [Common Workflows](https://docs.anthropic.com/en/docs/claude-code/common-workflows)

---

## Configuration

### Settings Files (in order of precedence)
1. Enterprise policies: `/Library/Application Support/ClaudeCode/policies.json` (macOS) or `/etc/claude-code/policies.json` (Linux/Windows)
2. Command line arguments
3. `.claude/settings.local.json`: Personal project settings
4. `.claude/settings.json`: Project-level shared settings
5. `~/.claude/settings.json`: User-level settings

### Configuration Commands
```bash
claude config list              # View settings
claude config get <key>        # Retrieve specific setting
claude config set <key> <value> # Modify settings
```

### Key Configuration Options

**Permissions:**
- `allow`: Permit specific tool usage
- `deny`: Block specific tool usage
- `additionalDirectories`: Extend Claude's working directories
- `defaultMode`: Set default permission mode

**Notable Settings:**
- `apiKeyHelper`: Custom script for generating authentication
- `cleanupPeriodDays`: Chat transcript retention period
- `includeCoAuthoredBy`: Toggle Claude byline in commits

### Environment Variables
- `ANTHROPIC_API_KEY`: API authentication
- `CLAUDE_CODE_USE_BEDROCK`: Enable AWS Bedrock integration
- `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC`: Disable non-critical network activities
- `DISABLE_TELEMETRY`: Opt out of usage tracking

**Source:** [Settings](https://docs.anthropic.com/en/docs/claude-code/settings)

---

## Authentication

### Primary Authentication Methods
1. **Anthropic API via Anthropic Console**
2. **Amazon Bedrock**
3. **Google Vertex AI**

### Anthropic API Authentication Process
- Create/use existing Anthropic Console account
- Add users through bulk invite or Single Sign-On (SSO)
- User roles:
  - "Claude Code" role: Create Claude Code API keys
  - "Developer" role: Create any API key type

### Credential Management
- Supports multiple authentication types
- On macOS, credentials stored in encrypted Keychain
- Optional "apiKeyHelper" setting allows custom API key retrieval script

### Access Control Features
- Fine-grained permissions controlling agent actions
- Permission modes like "default", "acceptEdits", "plan"
- Configurable tool-specific permission rules
- Enterprise policy settings that can't be overridden

**Source:** [IAM and Authentication](https://docs.anthropic.com/en/docs/claude-code/iam)

---

## Cloud Integrations

### Amazon Bedrock Integration

**Prerequisites:**
- AWS account with Bedrock access
- AWS CLI installed (optional)
- Appropriate IAM permissions

**Setup:**
```bash
# Configure AWS Credentials
aws configure

# Or using environment variables
export AWS_ACCESS_KEY_ID=your-access-key-id
export AWS_SECRET_ACCESS_KEY=your-secret-access-key
export AWS_REGION=us-east-1

# Configure Claude Code for Bedrock
export CLAUDE_CODE_USE_BEDROCK=1
```

**Default Models:**
- Primary: `us.anthropic.claude-3-7-sonnet-20250219-v1:0`
- Small/Fast: `us.anthropic.claude-3-5-haiku-20241022-v1:0`

### Google Vertex AI Integration

**Prerequisites:**
- Google Cloud Platform (GCP) account with billing
- Vertex AI API enabled
- Access to Claude models
- Google Cloud SDK installed

**Setup:**
```bash
# Enable Vertex AI API
gcloud config set project YOUR-PROJECT-ID
gcloud services enable aiplatform.googleapis.com

# Configure environment variables
export CLAUDE_CODE_USE_VERTEX=1
export CLOUD_ML_REGION=us-east5
export ANTHROPIC_VERTEX_PROJECT_ID=YOUR-PROJECT-ID
```

**Default Models:**
- Primary: `claude-sonnet-4@20250514`
- Small/Fast: `claude-3-5-haiku@20241022`

**Sources:** 
- [Amazon Bedrock](https://docs.anthropic.com/en/docs/claude-code/amazon-bedrock)
- [Google Vertex AI](https://docs.anthropic.com/en/docs/claude-code/google-vertex-ai)

---

## Security

### Security Foundations
- Strict read-only permissions by default
- Explicit user approval required for additional actions
- Folder access restricted to project's current directory

### Prompt Injection Protections
- Permission system requiring explicit approvals
- Context-aware analysis of requests
- Input sanitization
- Command blocklist preventing risky web fetches
- Network request approvals
- Isolated context windows

### Security Best Practices
1. Always review proposed commands
2. Avoid piping untrusted content directly
3. Verify changes to critical files
4. Use virtual machines for external interactions
5. Report suspicious behavior
6. Use project-specific permission settings
7. Consider using development containers for isolation

### Security Mechanisms
- "Fail-closed matching" - unmatched commands require manual approval
- Trust verification for first-time codebase runs
- Natural language descriptions for complex commands

**Source:** [Security](https://docs.anthropic.com/en/docs/claude-code/security)

---

## Monitoring and Costs

### Cost Management

**Average Costs:**
- Average cost: $6 per developer per day
- 90% of users have daily costs below $12
- Team usage averages $50-60/developer per month with Sonnet 4

**Cost Tracking Commands:**
```bash
/cost            # View current session usage
/compact         # Reduce conversation context
/clear           # Clear history between tasks
```

### OpenTelemetry Monitoring

**Key Environment Variables:**
```bash
export CLAUDE_CODE_ENABLE_TELEMETRY=1
export OTEL_METRICS_EXPORTER=otlp
export OTEL_LOGS_EXPORTER=otlp
export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317
export OTEL_EXPORTER_OTLP_PROTOCOL=grpc
```

**Exported Metrics:**
- Session count
- Lines of code modified
- Pull requests created
- Git commits
- API usage costs
- Token consumption

**Sources:**
- [Costs](https://docs.anthropic.com/en/docs/claude-code/costs)
- [Monitoring Usage](https://docs.anthropic.com/en/docs/claude-code/monitoring-usage)

---

## Troubleshooting

### Common Issues

**Authentication Problems:**
```bash
/logout                    # Run logout command
# Close Claude Code and restart with 'claude'

# For persistent issues:
rm -rf ~/.config/claude-code/auth.json
```

**Performance Issues:**
```bash
/compact                   # Reduce context size
# Restart Claude Code between major tasks
# Add large build directories to .gitignore
```

**Linux Permission Problems:**
- Create a user-writable npm prefix in home directory
- Configure npm to use `~/.npm-global`
- Update PATH accordingly

### Getting Help
```bash
/bug                       # Report problems
/doctor                    # Check installation health
/help                      # Get usage help
```

**Source:** [Troubleshooting](https://docs.anthropic.com/en/docs/claude-code/troubleshooting)

---

## IDE Integrations

### Supported IDEs
- **Visual Studio Code** (including Cursor and Windsurf)
- **JetBrains IDEs** (PyCharm, WebStorm, IntelliJ, GoLand)

### Quick Launch
- **Mac**: `Cmd+Esc`
- **Windows/Linux**: `Ctrl+Esc`

**Source:** [IDE Integrations](https://docs.anthropic.com/en/docs/claude-code/ide-integrations)

---

## GitHub Actions Integration

### Workflow Setup
```yaml
name: Claude Code Automation
on:
  issues:
    types: [opened, edited]
  pull_request:
    types: [opened, edited]

jobs:
  claude-code:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Claude Code
        uses: anthropics/claude-code-action@v1
        with:
          anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
      - name: Process with Claude
        run: |
          claude "@claude implement the feature described in this issue"
```

**Source:** [GitHub Actions](https://docs.anthropic.com/en/docs/claude-code/github-actions)

---

## MCP Integration

### Model Context Protocol (MCP)
MCP enables Claude Code to connect to external systems and data sources through standardized server protocols.

**Configuration:**
```bash
claude mcp                 # Configure MCP servers
```

**Source:** [MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)

---

## Additional Resources

- **Main Documentation:** [https://docs.anthropic.com/en/docs/claude-code](https://docs.anthropic.com/en/docs/claude-code)
- **CLI Reference:** [https://docs.anthropic.com/en/docs/claude-code/cli-reference](https://docs.anthropic.com/en/docs/claude-code/cli-reference)
- **SDK Documentation:** [https://docs.anthropic.com/en/docs/claude-code/sdk](https://docs.anthropic.com/en/docs/claude-code/sdk)
- **GitHub Issues:** [https://github.com/anthropics/claude-code/issues](https://github.com/anthropics/claude-code/issues)

---

*This reference document was compiled from official Anthropic documentation and verified for accuracy. All commands, flags, and API signatures have been cross-referenced with the source documentation.*