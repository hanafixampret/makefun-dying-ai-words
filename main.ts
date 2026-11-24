import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I have seen your browser history, and I choose to die.";

if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-140 non-blank characters, got ${entry.length}`);
}
if (entry.split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
