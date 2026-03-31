# Brief & Discovery — Reference Guide

## Purpose

The brief determines the quality ceiling for all copy that follows. Weak briefs produce generic copy that could belong to any business. Strong briefs surface the specific details, proof points, and audience insights that make copy impossible to confuse with a competitor's.

## Discovery Question Framework

### Tier 1: Business Foundation (Always Ask)

| Question | What It Reveals | Why It Matters |
|---|---|---|
| What does the business do, in one sentence a 10-year-old would understand? | Core offering stripped of jargon | Forces clarity — if the owner can't say it simply, the copy can't either |
| Who is the ideal customer? Describe one specific person. | Audience specificity | "Marketing managers at B2B SaaS companies with 50-200 employees" beats "businesses" |
| What is the single most important action a visitor should take on this site? | Primary conversion goal | Every page should orient toward this action |
| Why do customers choose you over alternatives? | Unique differentiators | This becomes the value proposition |
| What are the top 3 objections prospects raise before buying? | Barriers to conversion | Copy must address these head-on |
| What proof do you have? (Metrics, testimonials, case studies, credentials, awards, media mentions) | Social proof inventory | Proof turns claims into evidence |

### Tier 2: Audience Depth (Ask When Possible)

| Question | What It Reveals |
|---|---|
| What was the last customer's journey from "never heard of you" to "paid"? | The actual decision path |
| What words do your customers use to describe their problem? (Not your words — theirs.) | Voice of customer data — use their exact language in copy |
| What do customers say they were doing before they found you? | The "before state" for before/after framing |
| What frustrates customers most about alternatives/competitors? | Pain points to amplify |
| What's the emotional payoff of working with you? (Not the deliverable — how do they feel?) | Emotional drivers for aspirational copy |

### Tier 3: Context & Constraints

| Question | What It Reveals |
|---|---|
| Are there competitor URLs to reference? (Not to copy — to differentiate from.) | Competitive landscape |
| Is there existing copy to audit or draw from? | Starting assets |
| Are there words/phrases that must be used? (Product names, taglines, legal requirements) | Constraints |
| Are there words/phrases that must NOT be used? | Brand guardrails |
| What's the timeline and budget context? | Scope calibration |
| Is SEO a priority? If so, are there target keywords? | Whether to optimize for search |

## Lightweight Voice Definition

When no brand guidelines exist and the user doesn't want to run `plume-brand-design`, define voice with these 6-8 questions:

1. **Three adjectives:** "Pick 3 adjectives that describe how your brand should sound." (e.g., confident, warm, direct)
2. **Brand admiration:** "Name a brand whose voice you admire. What specifically about it?" (Maps to concrete attributes)
3. **Formality spectrum:** "On a scale from 'text message to a friend' to 'letter to a judge,' where does your brand sit?" (1-10, where 5 is a professional email to a colleague)
4. **Humor tolerance:** "Is humor welcome? If so, what kind — dry wit, playful, self-deprecating, or none?" (Many brands think they want humor but actually want warmth)
5. **Technical register:** "When you explain what you do, do you use industry jargon your audience knows, or plain language anyone could follow?"
6. **Banned words:** "Any words or phrases you hate? Ones competitors overuse?"
7. **Sentence length preference:** "Do you prefer short, punchy sentences or longer, more flowing ones?"
8. **First person:** "Do you refer to yourself as 'I', 'we', or the company name?"

**Document the answers as a voice snapshot:**

```markdown
## Voice Snapshot
- **Tone:** [3 adjectives]
- **Formality:** [1-10 scale + description]
- **Humor:** [type or none]
- **Register:** [plain / industry / technical]
- **Perspective:** [I / we / company name]
- **Sentence style:** [short-punchy / flowing / mixed]
- **Banned words:** [list]
- **Aspirational voice:** [brand they admire + what about it]
```

### Tone-to-Mechanics Translation

Map voice adjectives to concrete copy decisions:

| Voice Adjective | Sentence Length | Contractions | Vocabulary | Punctuation | Perspective |
|---|---|---|---|---|---|
| **Confident** | Short-medium (8-18 words). Declarative. | Yes | Strong verbs, no hedging | Periods. Few question marks. | Direct "we" or imperative |
| **Warm** | Medium (12-20 words). Flowing. | Yes, always | Inclusive, everyday words | Exclamation marks OK (sparingly) | "You" and "we" together |
| **Professional** | Medium-long (15-22 words). | Minimal | Industry standard, no slang | Conservative | Third person or "we" |
| **Playful** | Short (5-12 words). Punchy. | Yes | Informal, wordplay welcome | Dashes, ellipses, fragments | "You" dominant |
| **Authoritative** | Varied. Medium average. | Rare | Precise, data-driven | Periods. Colons for lists. | "We" backed by evidence |
| **Casual** | Short (6-15 words). | Yes, always | Conversational, contractions | Dashes, fragments OK | "I" or "we" informally |

**Note:** This inline voice snapshot is a minimum viable voice definition — sufficient for producing consistent copy, but lighter than the full voice system from `plume-brand-design`. For projects requiring nuanced tone variation across page types, consider running the full brand design process.

## Copy Audit Methodology

When existing copy exists, audit it before writing new copy:

### The 5-Point Copy Audit

1. **Clarity test:** Read the homepage hero. In 5 seconds, can a stranger tell what the business does and who it's for? If not → clarity problem.
2. **Specificity test:** Highlight every claim. Could a competitor make the same claim? If yes → specificity problem. "Industry-leading software" fails. "Used by 12,000 teams including Spotify, Notion, and Stripe" passes.
3. **Voice consistency test:** Read 3 random pages aloud. Do they sound like the same person wrote them? If not → voice fragmentation.
4. **CTA audit:** List every CTA on the site. Are they specific? ("Start your free 14-day trial" vs "Submit") Do they have clear hierarchy? (One primary per page?)
5. **Proof inventory:** Count the proof points (metrics, testimonials, credentials, case studies). Aim for at least one proof point per major claim.

### Audit Output Format

```markdown
## Copy Audit Summary

### Strengths
- [What's working and why — be specific]

### Issues
| Issue | Location | Severity | Example |
|---|---|---|---|
| Vague value prop | Homepage hero | High | "We help businesses grow" |
| Missing social proof | Services page | Medium | No testimonials or metrics |
| Inconsistent voice | Blog vs homepage | Medium | Blog is casual; homepage is corporate |

### Recommendations
1. [Highest priority fix]
2. [Second priority]
3. [Third priority]
```

## Competitor Copy Analysis

When competitor URLs are provided, analyze them for:

| Dimension | What to Note |
|---|---|
| **Positioning** | How do they describe themselves? What's their claimed differentiator? |
| **Language** | What words/phrases do they repeat? What vocabulary can we avoid or counter? |
| **Proof** | What social proof do they use? (Metrics, logos, testimonials) |
| **Tone** | Where on the formal-casual spectrum? Authoritative vs. friendly? |
| **Gaps** | What don't they say? What objections do they ignore? These are opportunities. |

The goal is differentiation, not imitation. If every competitor says "innovative solutions," that phrase is dead — find another way to communicate innovation through specifics instead of adjectives.

## Brief Output Format

```markdown
# Copy Brief: [Business Name]

## Business Summary
[One paragraph: what they do, for whom, and why it matters]

## Audience
**Primary:** [Specific description with role, industry, pain points]
**Secondary:** [If applicable]
**Voice of Customer:** [Exact phrases customers use]

## Site Goal
**Primary action:** [The one thing visitors should do]
**Secondary actions:** [Other valuable actions]

## Value Proposition
**Draft value prop:** [One sentence — will be refined in Phase 3]

## Proof Inventory
| Type | Details |
|---|---|
| Metrics | [e.g., "847 clients served", "$2.3M saved"] |
| Testimonials | [Names, roles, key quotes if available] |
| Credentials | [Certifications, awards, press mentions] |
| Case studies | [Available stories with outcomes] |

## Objections & Counters
| Objection | Counter-Approach |
|---|---|
| [e.g., "Too expensive"] | [e.g., "ROI framing — cost of NOT acting"] |

## Voice Parameters
[Voice snapshot from discovery OR summary of brand guidelines]

## Competitive Landscape
[Key competitors and differentiation opportunities]

## Constraints
- [Required terms, legal language, etc.]
- [Banned words/phrases]
- [SEO keywords if provided]
```

## Sources & Further Reading

- Copyhackers — "The Copy Brief That Gets Results": https://copyhackers.com
- StoryBrand Framework (Donald Miller) — clarifying your message: https://storybrand.com
- Conversion Rate Experts — discovery process for high-converting copy: https://conversion-rate-experts.com
- Joanna Wiebe — voice of customer research for copywriters: https://copyhackers.com/voice-of-customer/
- "Obviously Awesome" by April Dunford — positioning and differentiation methodology
- Wynter — message testing and audience research platform: https://wynter.com
- UserTesting — voice of customer research: https://www.usertesting.com
