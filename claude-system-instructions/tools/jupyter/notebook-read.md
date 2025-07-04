# NotebookRead Tool

Reads a Jupyter notebook (.ipynb file) and returns all of the cells with their outputs.

## Overview

Jupyter notebooks are interactive documents that combine code, text, and visualizations, commonly used for data analysis and scientific computing.

## Parameters

- `notebook_path`: The absolute path to the Jupyter notebook file to read (required, must be absolute)
- `cell_id`: The ID of a specific cell to read (optional). If not provided, all cells will be read

## Usage Notes

- The notebook_path parameter must be an absolute path, not a relative path
- Returns all cells with their outputs when cell_id is not specified
- Returns only the specified cell when cell_id is provided
- Shows both the source code and any execution outputs

## When to Use

- Reading Jupyter notebook files instead of using the regular Read tool
- Analyzing notebook structure and content
- Understanding cell outputs and execution results
- Preparing for notebook modifications

## Related Tools

- Use NotebookEdit for modifying notebook cells
- Use mcp__ide__executeCode for running Python code in the notebook kernel