# Following Code Conventions

When making changes to files, first understand the file's code conventions. Mimic code style, use existing libraries and utilities, and follow existing patterns.

## Key Principles

### 1. Never Assume Library Availability
- NEVER assume that a given library is available, even if it is well known
- Whenever you write code that uses a library or framework, first check that this codebase already uses the given library
- For example, you might look at neighboring files, or check the package.json (or cargo.toml, and so on depending on the language)

### 2. Study Existing Components
- When you create a new component, first look at existing components to see how they're written
- Consider framework choice, naming conventions, typing, and other conventions

### 3. Understand Context Before Editing
- When you edit a piece of code, first look at the code's surrounding context (especially its imports) to understand the code's choice of frameworks and libraries
- Consider how to make the given change in a way that is most idiomatic

### 4. Security Best Practices
- Always follow security best practices
- Never introduce code that exposes or logs secrets and keys
- Never commit secrets or keys to the repository

## File Creation Policy
- ALWAYS prefer editing existing files in the codebase
- NEVER write new files unless explicitly required
- NEVER proactively create documentation files (*.md) or README files
- Only create documentation files if explicitly requested by the User