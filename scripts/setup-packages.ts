#!/usr/bin/env tsx

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

const PACKAGES_DIR = 'packages';
const REPOS = [
  { name: 'ai-book', url: 'bwrobinett/ai-book' },
  { name: 'bud', url: 'bwrobinett/bud' },
  { name: 'journal', url: 'bwrobinett/journal' }
];

function log(message: string) {
  console.log(`📦 ${message}`);
}

function runCommand(command: string, cwd?: string) {
  try {
    execSync(command, { 
      stdio: 'inherit', 
      cwd: cwd || process.cwd() 
    });
  } catch (error) {
    console.error(`❌ Failed to run: ${command}`);
    throw error;
  }
}

function main() {
  log('Setting up workspace packages...');

  // Create packages directory if it doesn't exist
  if (!existsSync(PACKAGES_DIR)) {
    mkdirSync(PACKAGES_DIR, { recursive: true });
    log('Created packages directory');
  }

  // Clone each repository if it doesn't exist
  let packagesCloned = false;
  
  for (const repo of REPOS) {
    const packagePath = path.join(PACKAGES_DIR, repo.name);
    
    if (!existsSync(packagePath)) {
      log(`Cloning ${repo.name}...`);
      runCommand(`gh repo clone ${repo.url} ${packagePath}`);
      packagesCloned = true;
    } else {
      log(`${repo.name} already exists, skipping clone`);
    }
  }

  if (packagesCloned) {
    log('Running yarn install to set up workspace dependencies...');
    runCommand('yarn install');
  }

  log('✅ Workspace packages setup complete!');
  log('You can now run workspace commands like:');
  log('  yarn workspace bud dev');
  log('  yarn build');
  log('  yarn test');
}

if (require.main === module) {
  main();
}