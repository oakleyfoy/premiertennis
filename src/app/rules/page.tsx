import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";

export const metadata: Metadata = {
  title: "PTL Rules & Competition Format",
  description:
    "The official PTL Rules page covering match format, lineup rules, scheduling, playoffs, and promotion/relegation for Founding Season competition.",
};

const rulesSections = [
  {
    id: "match-format-rules",
    title: "Match Format Rules",
    description:
      "Official PTL matches run on four simultaneous doubles lines and are valid only when the minimum completion conditions are met.",
    rules: [
      "Exactly 4 doubles lines are played per team match.",
      "All 4 lines should begin within a 5-minute synchronization window.",
      "At least 3 of 4 lines must begin and complete validly for the match to stand.",
      "No-ad scoring applies to all games.",
      "Each line is best of 3 sets with standard 7-point tiebreaks at 6-6.",
      "If fewer than 3 lines are validly completed, the result becomes a full team default.",
    ],
  },
  {
    id: "lineup-rules",
    title: "Lineup Rules",
    description:
      "Lineups are submitted and locked through the PTL system before the match begins, then revealed simultaneously.",
    rules: [
      "Captains submit exactly 4 doubles pairings before lineup lock.",
      "The PTL system validates duplicate players, eligibility, and roster compliance before accepting a lineup.",
      "Both teams lock at the same PTL-defined deadline and lineups reveal simultaneously.",
      "No edits are allowed after lock under normal conditions.",
      "Substitutions are only allowed before first serve for an approved emergency such as verified injury.",
      "Lineup disputes must be filed within 48 hours of match completion.",
    ],
  },
  {
    id: "scheduling-rules",
    title: "Scheduling Rules",
    description:
      "PTL runs on a weekly match system with market-defined windows, home-team timing control inside those windows, and PTL override authority where needed.",
    rules: [
      "Each team plays one official match per week unless PTL grants an exception.",
      "PTL defines approved weekly match windows for each market.",
      "Home teams choose the exact match time within the PTL-approved window.",
      "PTL controls the season calendar, buffer weeks, conflict resolution, and final scheduling authority.",
      "Rescheduling is permitted only for PTL-approved reasons such as weather, facility closure, or emergency.",
      "Buffer weeks exist to complete delayed fixtures without compromising competitive integrity.",
    ],
  },
  {
    id: "playoff-rules",
    title: "Playoff Rules",
    description:
      "Playoffs use the same base match format as the regular season, with qualification, seeding, and postseason tie resolution governed centrally by PTL.",
    rules: [
      "Top 2 teams per division qualify in the base 8-team division model.",
      "Seeding is determined by points, head-to-head, wins, line differential, set differential, and game differential in that order.",
      "Higher seed hosts, subject to PTL-approved facilities and venue requirements.",
      "Playoff matches use the same 4-line doubles format, no-ad scoring, and best-of-3-set structure as the regular season.",
      "If a playoff ends 2-2, PTL activates the Golden Line: one pro set to 8, with a 7-point tiebreak at 7-7.",
      "PTL may delay seeding, review disputes, or override outcomes when competitive integrity is at risk.",
    ],
  },
  {
    id: "promotion-relegation-rules",
    title: "Promotion/Relegation Rules",
    description:
      "Movement between divisions follows PTL's pyramid model, with automatic movement, playoff movement matches, and between-season resets.",
    rules: [
      "Markets operate as stacked divisions built from 8-team blocks.",
      "Top teams promote automatically and bottom teams relegate automatically under PTL scaling rules.",
      "Additional movement matches may be used between the next-highest lower team and the lowest safe upper team.",
      "Season resets occur between seasons so divisions can be restructured and schedules regenerated cleanly.",
      "New teams enter at the bottom of the lowest division rather than being placed into upper tiers.",
      "PTL may rebalance divisions between seasons to preserve competitive integrity as markets scale.",
    ],
  },
] as const;

const fullRulebookText = `1.1 MATCH STRUCTURE — CORE DEFINITION
A PTL match consists of:
A. Four Simultaneous Doubles Lines
Exactly 4 doubles matches per team
All 4 lines are played simultaneously
Matches must begin within a 5-minute synchronization window
A match is not considered valid unless at least 3 of 4 lines begin on time

B. Court Requirement
Minimum of 4 playable courts required for official match start
Courts must be assigned prior to warm-up start
Courts must be confirmed by both captains before play begins

C. Match Validity Conditions
A match is considered OFFICIAL only if:
At least 3 lines complete play to valid result OR are defaulted under PTL rules
AND no league violation overrides validity
If fewer than 3 lines are completed:
-> MATCH = FULL TEAM DEFAULT (4-0)

1.2 MATCH START PROCEDURE
Step 1 — Captain Check-In
Both captains must confirm roster readiness in PTL app
No match may begin without dual confirmation

Step 2 — Lineup Lock
Lineups are locked in system prior to start
No changes permitted after lock
System automatically reveals matchups simultaneously

Step 3 — Warm-Up Window
Maximum warm-up: 10 minutes total
Includes all hitting + serves
Warm-up begins only after courts are assigned and captains confirm readiness

Step 4 — Match Start Trigger
All 4 courts must begin within a 5-minute window
If delay exceeds 15 minutes total -> PTL procedural violation review triggered

1.3 SCORING SYSTEM (FULL SPEC)
Game Format
No-ad scoring system used for all games
Receiver chooses side on no-ad point
Gender-matched rules apply in mixed contexts

Set Format
Sets are first to 6 games
Must win by 2 games OR reach 7-6 tiebreak
Tiebreak = 7-point standard

Match Format
Best of 3 sets per line
Full third set must be played unless officially terminated under PTL rules

1.4 MATCH COMPLETION RULES
A match line is valid if:
Completed normally OR
Completed via retirement OR
Completed via official default

A match is fully valid only if:
At least 3 of 4 lines are validly completed
If not:
-> automatic full-match default applies

1.5 DEFAULT SYSTEM (FULL ENGINE RULE)
Full Match Default Conditions:
Triggered when:
fewer than 3 lines are completed
team fails to field minimum roster requirement
match abandoned under disciplinary ruling

Default Result:
Match score = 4-0
Each line recorded as 6-0, 6-0

1.6 DISRUPTION EVENTS
Allowed Interruptions:
weather
injury
facility failure
PTL-approved emergency

System Behavior:
Completed lines are frozen and count
Incomplete lines resume at exact score position
No replay of completed sets allowed

1.7 PTL OVERRIDE AUTHORITY
PTL may:
pause match validity
suspend match completion
override scheduling outcomes
enforce penalties or adjustments

ONLY in cases involving:
integrity violations
safety issues
system failures
disciplinary enforcement

2.1 LINEUP STRUCTURE (CORE DEFINITION)
Each PTL match requires:
Exactly 4 doubles pairings per team
Each pairing assigned to one of 4 simultaneous match lines
All line assignments must be submitted before lineup lock

Key Rule:
Lineups are hidden until lock time, then revealed simultaneously.

2.2 LINEUP SUBMISSION PROCESS
Step 1 — Captain Submission
Captains submit 4 doubles pairings via PTL platform
Each pairing includes:
Player A
Player B
Optional designation notes (internal only)

Step 2 — Validation Engine (SYSTEM CHECK)
PTL system automatically verifies:
A lineup is INVALID if:
fewer than 4 pairings submitted
same player appears more than once
unregistered player included
roster violation detected

If invalid:
-> captain is notified immediately
-> must correct before lock deadline
-> failure to correct results in administrative intervention or default assignment

Step 3 — Lock Timing
Lineups lock at a fixed PTL-defined time window
No edits allowed after lock
Lock time is identical for both teams

Step 4 — Simultaneous Reveal
At lock time:
both lineups are revealed at the same moment
matchups are auto-generated by system pairing logic

2.3 LINE MATCHING SYSTEM (ENGINE LOGIC)
PTL uses deterministic line assignment:
Line 1 vs Line 1
Line 2 vs Line 2
Line 3 vs Line 3
Line 4 vs Line 4
No reshuffling after lock.

2.4 FLEXIBILITY RULES (STRATEGIC FREEDOM)
Captains may:
assign any player combination to any line
stack stronger pairings on any line
adjust strategy weekly

BUT:
no changes allowed after lock
no late substitutions
no match-day restructuring

2.5 SUBSTITUTION RULES (CRITICAL)
Before Lock:
full flexibility allowed

After Lock:
no substitutions allowed under normal conditions

Exceptions:
Substitutions ONLY allowed if:
player injury before match start AND verified
PTL approves emergency substitution
substitution occurs before first serve on any court

If match already started:
-> substitution not allowed
-> line defaults if necessary

2.6 LINEUP DISPUTES
A lineup may be challenged if:
ineligible player used
duplicate player detected
roster violation suspected

Dispute Window:
must be filed within 48 hours post-match

2.7 SYSTEM ERROR HANDLING
If PTL system failure occurs:
lineups are frozen at last valid submission
PTL may reconstruct lineup from audit logs
captains cannot manually override system state

2.8 LINEUP VIOLATION PENALTIES
Violations include:
improper lineup submission
eligibility violations
intentional misrepresentation

Penalties may include:
line default
match default
team penalty points
captain disciplinary action

2.9 CAPTAIN RESPONSIBILITY RULE
Captains are fully responsible for:
lineup accuracy
roster compliance
submission timing
System errors caused by user input = captain liability

3.1 CORE SCHEDULING MODEL
PTL operates on a:
Weekly Match Cycle System

Each team plays:
exactly 1 match per week

Key Constraint:
No team may play more than 1 official match per week unless PTL grants an exception

3.2 SEASON STRUCTURE
A PTL season is divided into:
Phase 1 — Regular Season
round-robin style within division
fixed weekly match cadence
standings accumulate over time

Phase 2 — Playoff Qualification Lock
all regular season matches must be completed
no early playoff seeding allowed

Phase 3 — Postseason
playoff bracket system activated
promotion/relegation matches occur

3.3 MATCH WINDOWS (CRITICAL SYSTEM RULE)
Each market operates under:
Defined Weekly Match Windows

Example structure:
Saturday window
Sunday window
or weekday assigned windows depending on market

Rules:
PTL defines allowed match days per market
Home teams select exact match time within window
Matches outside approved windows are invalid unless PTL approves exception

3.4 SCHEDULING AUTHORITY STRUCTURE
Scheduling control is split:
PTL Controls:
season calendar
match windows
buffer weeks
league-wide structure
conflict resolution

Home Team Controls:
exact match timing within allowed window
facility selection (approved list)
court assignment (pre-match)

3.5 SCHEDULING CONFLICT RESOLUTION
If scheduling conflict occurs:
Priority Order:
PTL directive overrides all
Facility availability constraints
Home team preference
Away team accommodation (when possible)

If no resolution:
-> PTL assigns final match time

3.6 RESCHEDULING RULES
Matches may only be rescheduled for:
Valid Reasons:
weather
facility closure
emergency (PTL-approved only)

Invalid Reasons:
player availability issues
casual scheduling preference
travel inconvenience

3.7 BUFFER WEEK SYSTEM
Each season includes:
built-in buffer weeks

Purpose:
reschedule delayed matches
resolve incomplete fixtures
maintain competitive integrity

3.8 WEATHER INTERRUPTION SYSTEM
If match is interrupted:
Completed Lines:
fully count and are locked permanently

Incomplete Lines:
resume at exact score state
no replay of completed games

3.9 MATCH VALIDITY RULE
A match is valid only if:
scheduled within PTL-approved window
played on approved facility
lineup system followed correctly

If invalid:
-> PTL may void, reschedule, or default match

3.10 MULTI-MARKET TIMING SYSTEM (IMPORTANT FOR SCALE)
PTL supports staggered league start times in future:
Phase 1 (Launch)
synchronized national season start

Phase 2 (Expansion)
regional staggered season calendars

Each market may operate:
different season start dates
different weekly windows

BUT:
governed under same PTL rule structure

3.11 SCHEDULING FAILURE CONDITIONS
A match is considered scheduling-failed if:
not completed within allocated window + buffer
no PTL-approved extension exists

Result:
-> PTL determines outcome (reschedule, default, or adjusted result)

3.12 SYSTEM PRINCIPLE
All scheduling rules follow one core principle:
Competitive integrity always overrides convenience.

4.1 PLAYOFF QUALIFICATION RULES
4.1.1 Qualification Threshold
Top 2 teams per division qualify for playoffs (base 8-team division model)

4.1.2 Eligibility Requirement
To qualify for playoffs:
team must complete full regular season schedule
all match results must be verified and locked
no outstanding disputes may remain unresolved

If disputes remain unresolved:
-> PTL may delay seeding lock

4.2 PLAYOFF STRUCTURE
4.2.1 Format Type
PTL playoffs use:
single elimination structure
no aggregate scoring
no multi-leg matches

4.2.2 Match Format Consistency Rule
All playoff matches MUST use:
identical format to regular season matches:
4 doubles lines
no-ad scoring
best of 3 sets
7-point tiebreak at 6-6
No format deviation allowed.

4.3 SEEDING SYSTEM
4.3.1 Seeding Basis
Seeding is determined by:
total points
head-to-head record
total match wins
line differential
set differential
game differential
PTL final resolution (if needed)

4.3.2 Tiebreak Integrity Rule
No seeding is finalized until:
all matches are completed
all disputes resolved
all results locked

4.4 HOME ADVANTAGE RULE
4.4.1 Hosting Rights
Higher seed hosts playoff match
Facility must be PTL-approved
Facility must meet 4-court requirement

4.4.2 Hosting Failure
If higher seed cannot host:
match is moved to next eligible facility
PTL may assign neutral venue if necessary

4.5 PLAYOFF MATCH VALIDITY
A playoff match is valid only if:
all 4 lines are completed OR properly defaulted
no unresolved rule violations exist
PTL confirms match integrity

If invalid:
-> PTL may order replay or adjusted ruling

4.6 POSTSEASON DISPUTE RULE (STRICTER THAN REGULAR SEASON)
Dispute window remains 48 hours
However, PTL may extend review period if:
championship integrity is in question
eligibility violations are suspected

4.7 GOLDEN LINE SYSTEM (POSTSEASON ONLY)
If playoff match ends 2-2:

4.7.1 Activation
Golden Line is immediately triggered

4.7.2 Format
one pro set to 8 games
at 7-7 -> 7-point tiebreak

4.7.3 Player Selection
must be chosen from players who competed in that match
captains select lineup
PTL may intervene if eligibility dispute exists

4.7.4 Purpose
Golden Line determines:
advancement
elimination outcome
championship progression

4.8 PLAYOFF SCHEDULING RULE
playoffs occur in a dedicated postseason window
no regular season matches overlap
all matches scheduled by PTL centrally

4.9 COMPETITIVE INTEGRITY RULE
PTL may intervene in playoffs if:
lineup manipulation is suspected
eligibility violations occur
match integrity is compromised
external conditions affect fairness
PTL authority overrides all playoff outcomes if necessary.

5.1 CORE LEAGUE STRUCTURE MODEL
PTL operates on a tiered pyramid system:
Each market contains:
multiple divisions (tiers)
each division ideally structured in 8-team blocks
divisions stacked vertically by competitive strength

5.2 BASE DIVISION STRUCTURE (LAUNCH MODEL)
At launch:
2 divisions per market
8 teams per division
Total:
-> 16 teams per market ecosystem minimum

5.3 PROMOTION RULES
5.3.1 Automatic Promotion
At end of season:
1st place team in lower division -> promoted automatically

5.3.2 Scaling Rule (IMPORTANT)
As divisions grow:
16-team divisions: 2 automatic promotion spots
24-team divisions: 3 automatic promotion spots

5.3.3 Promotion Eligibility Requirement
A team is eligible for promotion only if:
all matches completed
no outstanding disputes
roster compliance maintained
PTL integrity approval passed

5.4 RELEGATION RULES
5.4.1 Automatic Relegation
Bottom team(s) in upper division are relegated automatically

5.4.2 Scaling Rule
Same scaling logic applies:
16 teams -> 2 relegation spots
24 teams -> 3 relegation spots

5.4.3 Relegation Protection Exception
PTL may override relegation if:
extreme imbalance occurred (injury anomalies, schedule disruption)
integrity of division is compromised
extraordinary circumstances exist

5.5 PROMOTION/RELEGATION PLAYOFF SYSTEM
5.5.1 Playoff Match Structure
In addition to automatic movement:
next-highest lower division team vs lowest safe upper division team
They play:
single PTL match
higher division team hosts

5.5.2 Outcome Rules
Winner plays in higher division next season
Loser plays in lower division next season

5.6 SEASON RESET SYSTEM
At season end:
all divisions reset for restructuring
new schedules generated
new competitive balance applied
teams redistributed based on movement rules

5.7 EXPANSION INTEGRATION RULE
When new teams enter PTL:
They are placed:
at bottom of lowest division
NOT in top tiers

This preserves:
competitive integrity
earned advancement structure

5.8 MARKET SCALING MODEL
As markets grow:
Division structure expands:
8-team base -> standard unit
16-team -> dual tier system
24-team -> multi-tier pyramid
5-6 tier markets allowed long-term

5.9 COMPETITIVE BALANCE RULE
PTL reserves authority to:
rebalance divisions
adjust tier composition
restructure markets
ONLY between seasons

5.10 CORE PRINCIPLE
Promotion/relegation exists to ensure:
Teams always play at their true competitive level.`;

export default function RulesPage() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] py-16 text-[#111827] sm:py-20">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-court.jpeg"
          alt="Premier Tennis League court background"
          fill
          priority
          className="object-cover opacity-[0.1]"
        />
        <div className="absolute inset-0 bg-[#F7F5F0]/92" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <EditorialRule surface="light" align="start" />
          </div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A] sm:mt-6">
            Rules
          </p>
          <h1 className="mt-6 font-display text-[2.55rem] leading-[1.03] tracking-[-0.02em] text-[#111827] sm:text-[3.1rem] lg:text-[3.55rem]">
            PTL Rules &amp; Competition Format
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-[1.72] text-[#1F2933]/78 sm:text-[1.08rem]">
            This page is the official rules reference for PTL competition. Other
            pages summarize the system, but the rulebook governing match format,
            lineups, scheduling, playoffs, and movement lives here.
          </p>
        </div>

        <section className="mt-12 rounded-[24px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] px-6 py-7 shadow-[0_10px_34px_rgba(17,24,39,0.06),0_2px_10px_rgba(17,24,39,0.035)] sm:px-8 sm:py-8 lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
            System Of Record
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
            Official PTL competition governance.
          </h2>
          <p className="mt-5 max-w-[46rem] text-[0.98rem] leading-[1.76] text-[#1F2933]/84">
            This page defines how PTL competition is administered in practice,
            from enforcement and match validity to scheduling control and
            dispute review.
          </p>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {[
              "PTL enforces lineup, eligibility, substitution, and procedural rules through the rule framework on this page.",
              "Match results are recognized only when PTL start, completion, default, and validity conditions are satisfied.",
              "Scheduling conflicts, reschedule requests, and post-match disputes are governed by PTL deadlines, authority, and review procedures.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[16px] border border-[#E7E2D8] bg-white px-4 py-4 shadow-[0_3px_12px_rgba(17,24,39,0.03)] sm:px-5"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C8A96A]"
                    aria-hidden
                  />
                  <p className="text-[0.95rem] leading-[1.72] text-[#1F2933]/88">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-[#E5E1D8] bg-white/90 px-6 py-6 shadow-[0_8px_28px_rgba(17,24,39,0.05),0_2px_8px_rgba(17,24,39,0.03)] sm:px-8 sm:py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                Rule Index
              </p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-[1.1] text-[#111827] sm:text-[2.05rem]">
                Jump directly to the rule section you need.
              </h2>
            </div>
            <p className="max-w-[24rem] text-sm leading-7 text-[#1F2933]/72 sm:text-right">
              Structured for quick scanning on desktop and mobile.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {rulesSections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="group rounded-[18px] border border-[#E7E2D8] bg-[#FBF8F1] px-4 py-4 shadow-[0_3px_12px_rgba(17,24,39,0.03)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#D8C28D] hover:bg-white hover:shadow-[0_8px_22px_rgba(17,24,39,0.06)]"
              >
                <p className="font-display text-[1.18rem] leading-tight text-[#111827] transition group-hover:text-[#0d1219]">
                  {section.title}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 space-y-6">
          {rulesSections.map((section) => (
            <section
              id={section.id}
              key={section.id}
              className="rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8 lg:px-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                Core Rules
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                {section.title}
              </h2>
              <p className="mt-5 max-w-[48rem] text-[1rem] leading-[1.75] text-[#1F2933]/84">
                {section.description}
              </p>

              <ol className="mt-7 divide-y divide-[#EEE8DE] border-y border-[#EEE8DE]">
                {section.rules.map((rule, index) => (
                  <li key={rule} className="flex items-start gap-4 py-4 sm:gap-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8C28D] bg-[#FBF8F1] text-[11px] font-semibold tracking-[0.08em] text-[#8C7341]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="pt-1 text-[0.98rem] leading-[1.78] text-[#1F2933]/88">
                      {rule}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8 lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
            Full PTL Rulebook (Complete Reference)
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
            Full PTL Rulebook (Complete Reference)
          </h2>
          <p className="mt-5 max-w-[48rem] text-[1rem] leading-[1.75] text-[#1F2933]/84">
            Expand the full verbatim rulebook below for the complete reference
            text from `PTL Rulebook.docx`.
          </p>
          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/PTL_Rulebook.pdf"
              download
              className="btn-ptl-secondary px-8 py-3"
            >
              Download PTL Rulebook PDF
            </a>
          </div>

          <details className="mt-7 rounded-[20px] border border-[#E7E2D8] bg-[#FBF8F1] px-5 py-5 shadow-[0_3px_12px_rgba(17,24,39,0.03)] sm:px-6">
            <summary className="cursor-pointer list-none text-[0.98rem] font-medium leading-7 text-[#111827]">
              Expand Full Rulebook
            </summary>
            <div className="mt-5 max-h-[36rem] overflow-y-auto rounded-[16px] border border-[#E5E1D8] bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
              <pre className="whitespace-pre-wrap font-mono text-[12.5px] leading-[1.72] text-[#1F2933]/86">
                {fullRulebookText}
              </pre>
            </div>
          </details>
        </section>

        <section className="mt-10 rounded-[24px] border border-[#2A3344] bg-[linear-gradient(180deg,#1a2332_0%,#141c29_100%)] px-6 py-8 text-center text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DCC9A0]">
            Next Step
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-tight text-white sm:text-[2.35rem]">
            Ready to enter the PTL system with the full rules in view?
          </h2>
          <p className="mx-auto mt-5 max-w-[38rem] text-[0.98rem] leading-8 text-white/82">
            Review the system layer here, then move into league structure or
            Founding Season application with the full rules context in place.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn-ptl-primary px-8 py-3">
              Apply for Founding Season
            </Link>
            <Link
              href="/league-structure"
              className="inline-flex min-h-9 items-center justify-center rounded-[11px] border border-white/20 bg-white/[0.05] px-8 py-3 text-center text-[13px] font-medium tracking-[0.02em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out hover:bg-white/[0.09]"
            >
              View League Structure
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
