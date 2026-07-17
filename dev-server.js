import { spawn } from "child_process";

const originalArgs = process.argv.slice(2);
const cleanArgs = [];

for (let i = 0; i < originalArgs.length; i++) {
  const arg = originalArgs[i];
  if (arg === "--host") {
    // If next arg exists and is not an option (doesn't start with -), skip it too
    if (i + 1 < originalArgs.length && !originalArgs[i + 1].startsWith("-")) {
      i++;
    }
    continue;
  }
  cleanArgs.push(arg);
}

// Ensure port 3000 is specified
if (!cleanArgs.includes("-p") && !cleanArgs.includes("--port")) {
  cleanArgs.push("-p", "3000");
}

// Ensure host 0.0.0.0 is specified
if (!cleanArgs.includes("-H") && !cleanArgs.includes("--hostname")) {
  cleanArgs.push("-H", "0.0.0.0");
}

console.log("Starting Next.js dev server with arguments:", cleanArgs);

const child = spawn("npx", ["next", "dev", ...cleanArgs], {
  stdio: "inherit",
  shell: true,
});

child.on("close", (code) => {
  process.exit(code || 0);
});
