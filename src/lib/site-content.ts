export const navLinks = [
  { href: "/league-structure", label: "League Structure" },
  { href: "/play", label: "Play" },
  { href: "/cities", label: "Cities" },
  { href: "/captains-corner", label: "Captain's Corner" },
  { href: "/about", label: "About" },
];

export const footerLeagueLinks = [
  { href: "/league-structure", label: "League Structure" },
  { href: "/play", label: "Play" },
  { href: "/league-structure", label: "Scoring & Standings" },
  { href: "/league-structure", label: "Promotion & Relegation" },
  { href: "/faq", label: "FAQ" },
];

export const footerPlayerLinks = [
  { href: "/contact", label: "Start a Team" },
  { href: "/captains-corner", label: "Captain's Corner" },
  { href: "/cities", label: "Cities" },
  { href: "/league-structure", label: "Season Calendar (future)" },
  { href: "/contact", label: "Contact PTL" },
];

export const heroBullets = [
  "Eliminate ratings and subjective placement",
  "Teams compete, advance, and fall together",
  "Real stakes through promotion and relegation",
  "Turn amateur tennis into a true league system",
];

export const leaguePillars = [
  {
    title: "Team-Built, Not Rating-Built",
    description:
      "Captains build teams from friends, partners, and mixed experience levels. There are no ratings, caps, or algorithms separating players. Teams rise or fall together.",
  },
  {
    title: "Results Do the Sorting",
    description:
      "Premier Tennis League does not pre-sort teams. Match results determine movement. Strong teams move up. Weak teams move down. Teams find their true level naturally over time.",
  },
  {
    title: "Collective Accountability",
    description:
      "There is no hiding behind individual numbers. Teams adapt, support each other, and own outcomes together. This reduces ego and builds real team culture.",
  },
  {
    title: "Tennis Without Ratings",
    description:
      "PTL removes the most toxic part of amateur tennis. No rating anxiety. No strategic underperformance. You compete freely and let the table decide.",
  },
];

/** Homepage “Core Principles” pillar cards only (About/Play still use leaguePillars). */
export const homeCorePrincipleCards = [
  {
    title: "Team-Built, Not Rating-Built",
    text: "Teams are formed by captains—not algorithms. No caps. No forced balance. Just real teams.",
  },
  {
    title: "Results Do the Sorting",
    text: "There are no preset levels. Match results determine where teams belong.",
  },
  {
    title: "Collective Accountability",
    text: "No hiding behind individual ratings. Teams win and lose together.",
  },
  {
    title: "Tennis Without Ratings",
    text: "No anxiety. No manipulation. You compete—and let the standings decide.",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Form a Team",
    description:
      "Teams are formed by captains from friends, partners, and mixed experience levels. Teams register together and compete as a unit for the full season.",
  },
  {
    step: "02",
    title: "Play the Season",
    description:
      "Teams compete in scheduled weekly matches using defined formats. Matchups are known in advance. Every result counts.",
  },
  {
    step: "03",
    title: "Standings Decide",
    description:
      "Wins and losses accumulate across the full season. Standings are published and transparent. There is no ladder manipulation or re-rating.",
  },
  {
    step: "04",
    title: "Advance or Defend",
    description:
      "Top teams earn promotion. Lower teams fight to defend their position. Movement is earned only on the court.",
  },
];

export const valuePoints = [
  "A structured, team-based tennis league built around results, not ratings",
  "Clear standings, scheduled seasons, and a defined competitive model",
  "Promotion and relegation that make every season matter",
  "A better amateur experience without ratings politics or manipulation",
];

export const faqItems = [
  {
    question: "Do players need ratings to join?",
    answer:
      "No. Premier Tennis League does not use ratings, decimals, or algorithms. Teams are built by captains, not assigned by numbers. Performance on the court determines outcomes and nothing else.",
  },
  {
    question: "How are divisions determined in the first season?",
    answer:
      "All teams participate in an opening evaluation weekend during the inaugural season only. Results are used solely to establish initial division placement. Once divisions are set, evaluation results are discarded and season play alone determines standings and movement.",
  },
  {
    question: "Will there be evaluation weekends in future seasons?",
    answer:
      "No. The opening evaluation applies only to the inaugural season. In future seasons, all new teams will enter at the bottom division and earn advancement through regular season performance.",
  },
  {
    question: "How long is the season?",
    answer:
      "The regular season runs 14 weeks with scheduled weekly matches. A full season calendar is published at least two weeks before play begins, and all matches are scheduled in advance.",
  },
  {
    question: "What is the team match format?",
    answer:
      "Each team match consists of four lines of doubles. Captains submit pairings before match start. Once play begins, no substitutions are allowed.",
  },
  {
    question: "How does scoring work?",
    answer:
      "Each line plays three full sets with standard scoring. There are no short sets or modified formats. Ties are allowed at the team match level. Every line and every set matters.",
  },
  {
    question: "How many players can be on a team?",
    answer:
      "There is no roster limit. Teams may carry unlimited players to account for availability, injuries, or scheduling conflicts. However, only registered players may compete in matches.",
  },
  {
    question: "Can teams reschedule matches?",
    answer:
      "No. This is a fixed-schedule league. Matches are scheduled in advance and played weekly. Teams are expected to manage availability through roster depth rather than rescheduling.",
  },
  {
    question: "Which cities are launching first?",
    answer:
      "Pilot cities are still being finalized. This version of the site is focused on explaining the model and gathering interest ahead of the fall launch.",
  },
];

export const leagueStructure = [
  {
    title: "Season Length",
    points: [
      "14-week regular season",
      "Weekly matches on a fixed schedule",
      "Full calendar published two weeks before the season begins",
      "All matches scheduled in advance",
    ],
  },
  {
    title: "Opening Weekend Evaluation (Inaugural Season Only)",
    points: [
      "16 teams total",
      "2 divisions of 8 teams",
      "Teams compete only within their division",
      "Each team plays every opponent twice (home and away)",
      "Unlimited team rosters",
    ],
  },
  {
    title: "Division Placement",
    points: [
      "All teams participate",
      "Results determine initial division placement only",
      "No ratings, algorithms, or historical carryover",
      "Once divisions are set, season results alone determine standings",
      "Future teams enter at the bottom and earn advancement through results",
    ],
  },
  {
    title: "Match Format",
    points: [
      "4 lines of doubles",
      "Captains submit pairings before match start",
      "No substitutions once play begins",
    ],
  },
  {
    title: "Scoring",
    points: [
      "3 full sets per line",
      "Standard scoring (no short sets)",
      "Ties are allowed at the team-match level",
      "Every line matters. Every set matters.",
    ],
  },
  {
    title: "Standings & Results",
    points: [
      "Wins, losses, and ties all count",
      "Standings are updated as soon as scores are entered",
      "No manipulation, resets, or point inflation",
    ],
  },
  {
    title: "Promotion & Relegation",
    points: [
      "Top teams earn promotion",
      "Bottom teams face relegation",
      "Teams move together, not individually",
      "Movement is earned only through season performance",
    ],
  },
];

export const teamFit = [
  "Players who want real competition without ratings",
  "Teams that value commitment and chemistry",
  "Groups willing to play a full season on a fixed schedule",
  "Competitors who accept results as earned",
  "Players who want promotion, relegation, and real stakes",
];

export const teamNotFit = [
  "Players looking to protect or game a rating",
  "Drop-in or casual-only participation",
  "Frequent rescheduling or flexible availability",
  "Individual-first competition",
  "Short seasons with no consequence",
];

export const captainSteps = [
  {
    title: "Step 1 - Build Your Team",
    subtitle: "Teams are built by people, not ratings.",
    description:
      "Assemble a team of players you trust: friends, partners, or mixed experience levels. There are no ratings, caps, or algorithms. Your team competes together for the entire season.",
  },
  {
    title: "Step 2 - Commit to the Season",
    subtitle: "This is not a drop-in league.",
    description:
      "Teams commit to a fixed schedule and full season. Matches are published in advance and played weekly. Reliability and availability matter, and you have an unlimited roster to manage it.",
  },
  {
    title: "Step 3 - Earn Your Place",
    subtitle: "Movement is decided on the court.",
    description:
      "Results determine everything. Teams rise or fall together through promotion and relegation. There are no shortcuts, resets, or protection mechanisms.",
  },
];

export const pilotCityDetails = [
  "Pilot cities are still to be announced",
  "This phase is focused on information and early interest",
  "Teams and local players can signal demand before launch",
  "City selection will follow actual traction and rollout readiness",
];

export const partnerTypes = [
  {
    title: "Facilities and clubs",
    description:
      "Courts and clubs interested in hosting structured weekly team play, evaluation weekends, or future division activity.",
  },
  {
    title: "Local organizers",
    description:
      "People with strong community ties who can help identify demand, connect captains, and support launch readiness in a market.",
  },
  {
    title: "Brand and sponsor partners",
    description:
      "Businesses that want to align with an organized, team-first tennis experience built around competition and accountability.",
  },
];

export const contactDetails = {
  email: "info@tennispl.com",
  phone: "+1-800-997-0150",
  launchNote: "Launching this fall in pilot cities to be announced.",
};
