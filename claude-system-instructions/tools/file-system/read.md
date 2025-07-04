# Read Tool

Reads a file from the local filesystem. You can access any file directly by using this tool.

## Features

- Assume this tool is able to read all files on the machine
- If the User provides a path to a file assume that path is valid
- It is okay to read a file that does not exist; an error will be returned
- This tool allows Claude Code to read images (eg PNG, JPG, etc). When reading an image file the contents are presented visually as Claude Code is a multimodal LLM
- You will regularly be asked to read screenshots. If the user provides a path to a screenshot ALWAYS use this tool to view the file at the path
- This tool will work with all temporary file paths like /var/folders/123/abc/T/TemporaryItems/NSIRD_screencaptureui_ZfB1tD/Screenshot.png

## Usage Requirements

- The file_path parameter must be an absolute path, not a relative path
- By default, it reads up to 2000 lines starting from the beginning of the file
- You can optionally specify a line offset and limit (especially handy for long files), but it's recommended to read the whole file by not providing these parameters
- Any lines longer than 2000 characters will be truncated
- Results are returned using cat -n format, with line numbers starting at 1

## Parameters

- `file_path`: The absolute path to the file to read (required)
- `offset`: The line number to start reading from (optional, only provide if file is too large)
- `limit`: The number of lines to read (optional, only provide if file is too large)

## Special Cases

- For Jupyter notebooks (.ipynb files), use the NotebookRead instead
- You have the capability to call multiple tools in a single response. It is always better to speculatively read multiple files as a batch that are potentially useful
- If you read a file that exists but has empty contents you will receive a system reminder warning in place of file contents

## File Format Support

- Text files (code, configuration, documentation)
- Images (PNG, JPG, etc.) - displayed visually
- Screenshots and temporary files
- Configuration files (JSON, YAML, etc.)
- All standard file formats