# WebFetch Tool

Fetches content from a specified URL and processes it using an AI model.

## Features

- Takes a URL and a prompt as input
- Fetches the URL content, converts HTML to markdown
- Processes the content with the prompt using a small, fast model
- Returns the model's response about the content
- Use this tool when you need to retrieve and analyze web content

## Parameters

- `url`: The URL to fetch content from (required, must be a fully-formed valid URL)
- `prompt`: The prompt to run on the fetched content (required). This should describe what information you want to extract from the page

## Usage Notes

- IMPORTANT: If an MCP-provided web fetch tool is available, prefer using that tool instead of this one, as it may have fewer restrictions. All MCP-provided tools start with "mcp__"
- HTTP URLs will be automatically upgraded to HTTPS
- This tool is read-only and does not modify any files
- Results may be summarized if the content is very large
- Includes a self-cleaning 15-minute cache for faster responses when repeatedly accessing the same URL

## Redirects

When a URL redirects to a different host, the tool will inform you and provide the redirect URL in a special format. You should then make a new WebFetch request with the redirect URL to fetch the content.

## When to Use

- Fetching documentation from websites
- Analyzing web content for specific information
- Retrieving API documentation
- Getting current information from web sources

## Example Usage

```
WebFetch: 
- url: "https://docs.example.com/api"
- prompt: "Extract the authentication methods described in this API documentation"
```