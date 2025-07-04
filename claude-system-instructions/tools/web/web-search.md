# WebSearch Tool

Allows Claude to search the web and use the results to inform responses.

## Features

- Provides up-to-date information for current events and recent data
- Returns search result information formatted as search result blocks
- Use this tool for accessing information beyond Claude's knowledge cutoff
- Searches are performed automatically within a single API call

## Parameters

- `query`: The search query to use (required, minimum 2 characters)
- `allowed_domains`: Only include search results from these domains (optional)
- `blocked_domains`: Never include search results from these domains (optional)

## Usage Notes

- Domain filtering is supported to include or block specific websites
- Web search is only available in the US
- Account for "Today's date" in <env>. For example, if <env> says "Today's date: 2025-07-01", and the user wants the latest docs, do not use 2024 in the search query. Use 2025.

## When to Use

- Finding current information beyond Claude's knowledge cutoff
- Researching recent developments
- Finding specific documentation or resources
- Getting up-to-date information about technologies or events

## Example Usage

```
WebSearch:
- query: "Claude Code CLI documentation 2025"
- allowed_domains: ["docs.anthropic.com", "github.com"]
```

## Domain Filtering

- Use `allowed_domains` to restrict results to specific trusted sources
- Use `blocked_domains` to exclude unreliable or irrelevant sources
- Both parameters accept arrays of domain names