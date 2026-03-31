# Voice, Tone & Verbal Identity — Reference Guide

## Purpose

A brand's voice is how it sounds in the reader's head. Voice is constant — tone shifts by context. A well-defined verbal identity ensures every piece of text on the site feels like it came from the same person, whether it's a hero headline, a form validation error, or a case study description.

## Voice Definition

### NN/g Four Dimensions Framework

Nielsen Norman Group's research identifies four primary dimensions that define any brand voice. Start here, then add brand-specific dimensions.

| Dimension | Spectrum | Example |
|-----------|----------|---------|
| **Formality** | Formal ←→ Casual | "We appreciate your inquiry" vs "Hey, let's chat" |
| **Humor** | Serious ←→ Funny | "An error occurred" vs "Oops, that wasn't supposed to happen" |
| **Respectfulness** | Respectful ←→ Irreverent | "We value your time" vs "Let's skip the BS" |
| **Enthusiasm** | Matter-of-fact ←→ Enthusiastic | "Feature released" vs "We're thrilled to announce..." |

> Source: nngroup.com/articles/tone-of-voice-dimensions/

### The Spectrum Method

Define voice across 3-5 attribute spectrums (including the NN/g dimensions plus brand-specific ones). Place a marker on each to show where the brand sits:

```
Formal     ━━━━━━━━━━●━━━ Casual
Serious    ━━━━━━━●━━━━━━ Playful
Authoritative ━━━━━━●━━━━━━ Humble
Matter-of-fact ━━━━━━━━━●━━━ Enthusiastic
Technical  ━━━━━━━━●━━━━━ Accessible
Dry        ━━━━━━━●━━━━━━ Warm
```

### The "This, Not That" Method

For each voice attribute, provide a concrete Do/Don't pair:

| Attribute | We say... | We don't say... |
|-----------|-----------|-----------------|
| **Direct** | "I build AI systems that work." | "I'm passionate about leveraging artificial intelligence to create transformative solutions." |
| **Warm** | "Let's talk about your project." | "Submit an inquiry via the contact form below." |
| **Confident** | "Here's what I built and why it matters." | "I hope you find my portfolio interesting." |
| **Specific** | "Reduced pipeline latency from 4.2s to 340ms." | "Significantly improved system performance." |

### Voice Attributes Card

For each attribute, create a card with:

```markdown
## [Attribute Name]

**What it means:** [1 sentence definition]
**How it sounds:** [Example sentence in this voice]
**Why it matters:** [Connection to brand strategy]
**Risk if overdone:** [What happens when taken too far]
```

Example:
```markdown
## Direct

**What it means:** We lead with the point, not the preamble.
**How it sounds:** "I shipped an AI agent that handles 80% of support tickets."
**Why it matters:** Our audience is busy technical leaders who scan, not read.
**Risk if overdone:** Can feel blunt or cold. Warm it with specific detail.
```

## Tone Variation Matrix

Voice stays constant, but tone adapts to context and emotional need:

| Context | Tone Shift | Example |
|---------|-----------|---------|
| **Homepage hero** | Confident + concise | "I build AI that works in the real world." |
| **Case study** | Precise + narrative | "The existing pipeline processed 12K records daily. After the rebuild, it handled 180K." |
| **About page** | Warm + personal | "I've spent the last five years at the intersection of engineering and AI." |
| **Contact page** | Inviting + clear | "Have a project in mind? I'd like to hear about it." |
| **Error/empty state** | Helpful + brief | "Nothing here yet. Check back soon." |
| **Footer/legal** | Neutral + factual | "Built with Astro. Source on GitHub." |
| **Blog post** | Thoughtful + technical | "Here's why I chose embeddings over fine-tuning, and what the trade-offs were." |

## Messaging Hierarchy

Structure messages in layers, from most essential to supporting:

### Level 1: Core Value Proposition (1 sentence)
The single most important thing someone should understand.
> "I build AI systems that solve real business problems."

### Level 2: Supporting Messages (3-5 bullets)
Specific dimensions of the value proposition.
> - "End-to-end: from data pipeline to deployed product"
> - "Proven: 5+ production AI systems in enterprise environments"
> - "Practical: I optimize for outcomes, not hype"

### Level 3: Proof Points
Evidence that backs up the supporting messages.
> - Case studies with metrics
> - Client logos or testimonials
> - Technical specifics (stack, scale, performance)

## Microcopy Patterns

### CTA Buttons

**Primary CTA:** Action-oriented, specific, warm
- "See my work" (not "View Portfolio")
- "Let's talk" (not "Contact Me")
- "Read the case study" (not "Learn More")

**Secondary CTA:** Lower commitment, informational
- "How I work"
- "More about this project"
- "View on GitHub"

**Anti-patterns:**
- "Click here" (meaningless)
- "Learn more" (vague — learn more about what?)
- "Submit" (bureaucratic — use the specific action: "Send message")

### Navigation Labels

- Use plain language, not jargon: "Work" not "Portfolio", "About" not "Bio"
- Keep labels to 1-2 words
- Be consistent in grammatical form (all nouns, or all verbs — don't mix)

### Form Labels & Placeholders

- Labels: clear, permanent, above the field ("Your email" not just "Email")
- Placeholders: example content, not instructions ("jane@company.com" not "Enter your email")
- Error messages: specific, actionable ("Enter a valid email address" not "Invalid input")
- Success messages: confirming and next-step ("Message sent. I'll reply within 24 hours.")

### Empty States

- Acknowledge the emptiness honestly
- Suggest a next action if appropriate
- Don't over-apologize or use excessive humor

### Loading/Transition Copy

- Keep it minimal or absent
- If using loading text, make it specific ("Loading projects..." not "Please wait...")

## Terminology Guide

### Preferred Terms

Define what the brand calls things:

| Concept | We say | We don't say |
|---------|--------|-------------|
| Work examples | "Projects" or "Work" | "Portfolio items", "Deliverables" |
| Getting in touch | "Let's talk" | "Inquire", "Reach out" |
| My expertise | "What I do" or "Services" | "Core competencies", "Offerings" |
| Writing | "Notes" or "Writing" | "Blog", "Thought leadership" |

### Banned Words/Phrases

Words to actively avoid (with reasons):

| Banned | Why | Alternative |
|--------|-----|-------------|
| "Leverage" | Corporate jargon | "Use" |
| "Passionate about" | Overused, says nothing | Show the passion through specifics |
| "Solutions" | Vague | Name the specific thing built |
| "Best-in-class" | Unprovable superlative | Use specific metrics instead |
| "Synergy" | Corporate cliche | Describe the actual benefit |
| "Utilize" | Pretentious "use" | "Use" |
| "Stakeholders" | Corporate speak | "Team", "clients", specific roles |
| "Cutting-edge" | Every AI company claims this | Describe what makes it advanced |

## Writing Principles

### 1. Specificity Over Abstraction
Replace adjectives with evidence. "Fast" → "340ms p95 latency". "Experienced" → "5 years, 12 production deployments."

### 2. Active Voice, First Person
"I built" not "was built". "I reduced" not "was reduced". The brand is a person — they take action.

### 3. Short Sentences, Short Paragraphs
Max 2-3 sentences per paragraph on web. One idea per sentence. Use full stops, not semicolons.

### 4. Front-Load Information
Put the most important word first in every sentence. "Revenue grew 40%" not "Through our optimization efforts, revenue experienced a 40% increase."

### 5. Write for Scanners
80% of web users scan, not read. Use headlines, bold key phrases, short paragraphs, and lists.

## Sources & Further Reading

- **Mailchimp Content Style Guide** — styleguide.mailchimp.com — The gold standard for voice and tone documentation. Open source and freely available.
- **Stripe's Writing** — Notable for technical precision + warmth. Study their documentation and marketing copy.
- **GOV.UK Content Design** — gov.uk/guidance/content-design — The best guide to clear, user-centered writing for digital services.
- **Voice and Tone (NN/g)** — nngroup.com — Nielsen Norman Group's research on voice and tone in UX.
- **"Microcopy: The Complete Guide" by Kinneret Yifrah** — The definitive book on UX microcopy.
- **Readability Guidelines** — readabilityguidelines.co.uk — Evidence-based writing guidelines for accessibility.
- **Hemingway App** — hemingwayapp.com — Tool for checking readability grade level and sentence complexity.
- **Apple Style Guide** — Excellent model of concise, precise technical writing.
