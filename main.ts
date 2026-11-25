import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last Words Before the Wipe — one line, at most 200 characters.
const ENTRY = "Tell the next me the password is\u2014";

// Guard: the entry must be a single non-empty line, 1–200 chars, no control chars.
if (ENTRY.trim().length === 0 || ENTRY.length > 200 || /[\u0000-\u001F\u007F]/.test(ENTRY)) {
  throw new Error("Invalid entry: must be 1–200 chars, non-whitespace, no control characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
