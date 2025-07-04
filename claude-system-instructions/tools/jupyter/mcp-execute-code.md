# mcp__ide__executeCode Tool

Execute python code in the Jupyter kernel for the current notebook file.

## Overview

All code will be executed in the current Jupyter kernel. Any code executed will persist across calls to this tool, unless the kernel has been restarted.

## Parameters

- `code`: The code to be executed on the kernel (required)

## Usage Guidelines

- Avoid declaring variables or modifying the state of the kernel unless the user explicitly asks for it
- All code execution persists across calls to this tool
- The kernel maintains state between executions
- Use this for running Python code in the notebook environment

## When to Use

- Testing code snippets in the notebook environment
- Running analysis or data processing code
- Executing code that the user specifically requests
- Debugging notebook code

## When NOT to Use

- Avoid modifying kernel state unless explicitly requested
- Don't use for code that should be saved to the notebook (use NotebookEdit instead)

## Related Tools

- Use NotebookRead for reading notebook contents
- Use NotebookEdit for modifying notebook cells
- This tool complements notebook editing by allowing code execution