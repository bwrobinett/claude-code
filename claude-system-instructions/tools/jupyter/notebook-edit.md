# NotebookEdit Tool

Completely replaces the contents of a specific cell in a Jupyter notebook (.ipynb file) with new source.

## Overview

Jupyter notebooks are interactive documents that combine code, text, and visualizations, commonly used for data analysis and scientific computing.

## Parameters

- `notebook_path`: The absolute path to the Jupyter notebook file to edit (required, must be absolute)
- `new_source`: The new source for the cell (required)
- `cell_id`: The ID of the cell to edit (optional). When inserting a new cell, the new cell will be inserted after the cell with this ID, or at the beginning if not specified
- `cell_type`: The type of the cell (code or markdown) (optional). If not specified, it defaults to the current cell type. If using edit_mode=insert, this is required
- `edit_mode`: The type of edit to make (replace, insert, delete) (optional). Defaults to replace

## Edit Modes

### Replace Mode (default)
- Replaces the contents of an existing cell
- Requires `new_source`
- Optionally specify `cell_id` and `cell_type`

### Insert Mode
- Adds a new cell to the notebook
- Requires `new_source` and `cell_type`
- New cell is inserted after the specified `cell_id`, or at the beginning if not specified

### Delete Mode
- Removes a cell from the notebook
- Specify the `cell_id` to delete
- `new_source` is still required but can be empty

## Cell Types

- `code`: For Python code cells
- `markdown`: For markdown/text cells

## Usage Notes

- The notebook_path parameter must be an absolute path, not a relative path
- Cell numbers are 0-indexed
- Use this tool instead of regular Edit tools for Jupyter notebooks

## Related Tools

- Use NotebookRead for reading notebook contents
- Use mcp__ide__executeCode for running Python code in the notebook kernel