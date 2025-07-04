# Task Tool

Launch a new agent that has access to the following tools: Bash, Glob, Grep, LS, exit_plan_mode, Read, Edit, MultiEdit, Write, NotebookRead, NotebookEdit, WebFetch, TodoRead, TodoWrite, WebSearch, mcp__ide__getDiagnostics, mcp__ide__executeCode.

## When to Use

When you are searching for a keyword or file and are not confident that you will find the right match in the first few tries, use the Agent tool to perform the search for you.

### Use the Agent tool when:
- If you are searching for a keyword like "config" or "logger", or for questions like "which file does X?"
- When doing an open ended search that may require multiple rounds of globbing and grepping

### Do NOT use the Agent tool when:
- If you want to read a specific file path, use the Read or Glob tool instead
- If you are searching for a specific class definition like "class Foo", use the Glob tool instead
- If you are searching for code within a specific file or set of 2-3 files, use the Read tool instead
- Writing code and running bash commands (use other tools for that)
- Other tasks that are not related to searching for a keyword or file

## Usage Notes

1. **Launch multiple agents concurrently** whenever possible, to maximize performance; to do that, use a single message with multiple tool uses
2. **Stateless invocations** - Each agent invocation is stateless. You will not be able to send additional messages to the agent, nor will the agent be able to communicate with you outside of its final report
3. **Detailed task descriptions** - Your prompt should contain a highly detailed task description for the agent to perform autonomously and you should specify exactly what information the agent should return back to you in its final and only message to you
4. **Trust agent outputs** - The agent's outputs should generally be trusted
5. **Clearly specify task type** - Tell the agent whether you expect it to write code or just to do research (search, file reads, web fetches, etc.), since it is not aware of the user's intent

## Parameters

- `description`: A short (3-5 word) description of the task
- `prompt`: The task for the agent to perform

## Return Value

When the agent is done, it will return a single message back to you. The result returned by the agent is not visible to the user. To show the user the result, you should send a text message back to the user with a concise summary of the result.