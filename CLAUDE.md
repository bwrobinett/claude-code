# Claude Memory

## Conversation History Search

When you ask questions like:

- "Have we talked about X before?"
- "When did we discuss Y?"
- "Did I mention Z in any previous conversations?"

I should generate 4 related keywords and phrases that someone might use when talking about this topic, plus the key word or words in the query. Include:

- Synonyms and related terms
- Technical variations
- Common abbreviations
- Related concepts

Return ONLY the keywords separated by spaces, no explanations.

Then I should take those space separate keywords and run this: `node /Users/bwrobinett/Dev/claude-code/searchChatHistory.js ${keywords}`
This searches your Claude conversation logs at `~/.claude/projects` and:

The results will have messages and the timestamp of the message and the filename it's from.

Use these results to figure out if we talked about what I asked and then tell me you whether you found anything or not. And show me the messages and tell me how long ago they were. To do that you'll need to get the current date and
