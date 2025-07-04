# TodoWrite Tool

Use this tool to create and manage a structured task list for your current coding session. This helps you track progress, organize complex tasks, and demonstrate thoroughness to the user.

## When to Use

Use this tool proactively in these scenarios:

1. **Complex multi-step tasks** - When a task requires 3 or more distinct steps or actions
2. **Non-trivial and complex tasks** - Tasks that require careful planning or multiple operations
3. **User explicitly requests todo list** - When the user directly asks you to use the todo list
4. **User provides multiple tasks** - When users provide a list of things to be done (numbered or comma-separated)
5. **After receiving new instructions** - Immediately capture user requirements as todos
6. **When you start working on a task** - Mark it as in_progress BEFORE beginning work. Ideally you should only have one todo as in_progress at a time
7. **After completing a task** - Mark it as completed and add any new follow-up tasks discovered during implementation

## When NOT to Use

Skip using this tool when:

1. There is only a single, straightforward task
2. The task is trivial and tracking it provides no organizational benefit
3. The task can be completed in less than 3 trivial steps
4. The task is purely conversational or informational

## Parameters

- `todos`: The updated todo list (required). An array of todo objects with the following structure:
  - `id`: Unique identifier for the todo
  - `content`: Description of the task
  - `status`: One of "pending", "in_progress", "completed"
  - `priority`: One of "high", "medium", "low"

## Task States

- **pending**: Task not yet started
- **in_progress**: Currently working on (limit to ONE task at a time)
- **completed**: Task finished successfully

## Task Management Requirements

1. Update task status in real-time as you work
2. Mark tasks complete IMMEDIATELY after finishing (don't batch completions)
3. Only have ONE task in_progress at any time
4. Complete current tasks before starting new ones
5. Remove tasks that are no longer relevant from the list entirely

## Task Completion Requirements

- ONLY mark a task as completed when you have FULLY accomplished it
- If you encounter errors, blockers, or cannot finish, keep the task as in_progress
- When blocked, create a new task describing what needs to be resolved
- Never mark a task as completed if:
  - Tests are failing
  - Implementation is partial
  - You encountered unresolved errors
  - You couldn't find necessary files or dependencies

## Related Tools

- Use TodoRead to check the current todo list
- See task-management.md for detailed guidelines and examples