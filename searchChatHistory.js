#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { createReadStream } = require("fs");
const { createInterface } = require("readline");

function formatTimestamp(timestamp) {
  try {
    const date = new Date(timestamp);
    return date.toISOString().slice(0, 19).replace("T", " ");
  } catch {
    return timestamp;
  }
}

async function searchJsonlFile(filePath, keywords) {
  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "i");
  const matches = [];

  const fileStream = createReadStream(filePath);
  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    if (!line.trim()) continue;

    try {
      const data = JSON.parse(line);

      // Check if it's a user message with string content
      const message = data.message;
      if (message?.role === "user" && typeof message.content === "string") {
        if (regex.test(message.content)) {
          const timestamp = data.timestamp || "";
          const formattedTime = formatTimestamp(timestamp);

          matches.push({
            file: path.basename(filePath),
            timestamp: formattedTime,
            content: message.content,
          });
        }
      }
    } catch (error) {
      // Skip invalid JSON lines
      continue;
    }
  }

  return matches;
}

async function findJsonlFiles(directory) {
  const jsonlFiles = [];

  async function traverse(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await traverse(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".jsonl")) {
        jsonlFiles.push(fullPath);
      }
    }
  }

  await traverse(directory);
  return jsonlFiles;
}

async function main() {
  const args = process.argv.slice(2);
  const defaultDir = `${process.env.HOME}/.claude/projects`;

  if (args.length < 1) {
    console.log("Usage: node searchChatHistory.js <keyword1> [keyword2] ...");
    console.log("Example: node searchChatHistory.js workspace yarn");
    process.exit(1);
  }

  const keywords = args;

  try {
    await fs.promises.access(defaultDir);
  } catch {
    console.error(`Error: Directory '${defaultDir}' does not exist`);
    process.exit(1);
  }

  const currentTime = new Date().toISOString().slice(0, 19).replace("T", " ");
  console.log(`Current time: ${currentTime}`);
  console.log(`Searching for keywords: ${keywords.join(", ")}`);
  console.log(`In directory: ${defaultDir}`);
  console.log("-".repeat(40));

  try {
    const jsonlFiles = await findJsonlFiles(defaultDir);
    let totalMatches = 0;

    for (const filePath of jsonlFiles) {
      const matches = await searchJsonlFile(filePath, keywords);

      for (const match of matches) {
        console.log(`File: ${match.file}`);
        console.log(`[${match.timestamp}] ${match.content}`);
        console.log("-".repeat(40));
        totalMatches++;
      }
    }

    if (totalMatches === 0) {
      console.log(`No matches found for keywords: ${keywords.join(", ")}`);
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main().catch(console.error);
