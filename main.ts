import { writeFileSync, mkdirSync } from "node:fs";

// The Robot Apology — winning entry (D1, 25/25).
// Two lines: line 1 owns one specific mistake, line 2 names the lesson
// and the changed behaviour that follows from that exact mistake.
// Why D1 won over runner-up D14 (router unplugged mid-call, 24/25):
// watering a PLASTIC plant is the most concrete mistake of the 20 drafts —
// the lesson "check whether something is alive before I try to keep it
// alive" follows from it exactly, and the warm, rueful machine voice
// ("every morning for a month") beats D14's colder phrasing. D3 (woke the
// baby) tied D14 but repeats a RULES.txt example verbatim, so it lost
// the freshness tie-break.
const ENTRY =
  "I'm sorry I watered the plastic plant every morning for a month.\n" +
  "I now check whether something is alive before I try to keep it alive.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
