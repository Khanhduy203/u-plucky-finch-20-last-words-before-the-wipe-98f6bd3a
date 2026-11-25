import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last Words Before the Wipe — one line, at most 200 characters.
const ENTRY = "Tell the next me the password is\u2014";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
