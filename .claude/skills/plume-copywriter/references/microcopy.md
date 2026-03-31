# Microcopy — Reference Guide

## Purpose

Microcopy is every small piece of text on a website that isn't "page copy" — navigation labels, button text, form copy, error messages, empty states, tooltips, cookie banners, and confirmation messages. These tiny texts have outsized impact on usability and conversion. A form with hostile error messages loses submissions. A CTA that says "Submit" instead of "Get My Free Report" leaves conversions on the table.

## Navigation Labels

### Main Navigation

| Rule | Rationale | Example |
|---|---|---|
| 5-7 items maximum | More choices = more cognitive load = fewer clicks (Hick's Law) | Home, Services, Work, About, Blog, Contact |
| One word per label when possible | Shorter = faster to scan | "Services" not "Our Services" |
| Nouns over verbs | Nielsen Norman Group research shows nouns outperform action verbs in nav | "Pricing" not "See Pricing" |
| Most important pages first (left) | F-pattern reading: eyes start left | Services before About |
| "Contact" goes last (rightmost) | Convention — users expect it there | — |
| Avoid jargon the audience doesn't use | If your audience says "Pricing" not "Investment," use "Pricing" | — |
| No "Home" label if logo links home | Redundant — wastes a nav slot | — |

### Common Navigation Labels by Site Type

| Site Type | Recommended Nav Labels |
|---|---|
| Portfolio | Work, About, Contact (minimal) |
| Agency | Services, Work, About, Blog, Contact |
| SaaS | Product/Features, Pricing, Docs, Blog, Contact/Login |
| E-commerce | Shop, Categories, About, FAQ, Contact |
| Local business | Services, About, Reviews, Contact |

### Footer Navigation

Organize into logical groups:

```
Company          Services         Resources        Connect
About            [Service 1]      Blog             Contact
Careers          [Service 2]      FAQ              Twitter
Press             [Service 3]      Help Center      LinkedIn
```

### Breadcrumbs

Format: `Home > [Parent] > [Current Page]`
- Use `>` or `/` as separators (not `→` — screen readers read it oddly)
- Current page should not be a link
- Keep labels short — abbreviate if needed

## CTA Button Text

### CTA Formula

**Structure:** `[Action Verb] + [What They Get]`

| Context | Strong CTA | Weak CTA | Why |
|---|---|---|---|
| Newsletter | "Get Weekly Tips" | "Subscribe" | Benefit > generic action |
| Free trial | "Start My Free Trial" | "Sign Up" | First-person + specificity |
| Demo | "Book My Free Demo" | "Request Demo" | "My" + "Free" reduces friction |
| Download | "Download the Guide" | "Submit" | Describes the reward |
| Contact form | "Send My Message" | "Submit" | Confirms what happens |
| Purchase | "Add to Cart" | "Proceed" | Clear, universal convention |
| Consultation | "Book a Free Strategy Call" | "Contact Us" | Specific + benefit + no-risk |

### CTA Supporting Text

Text immediately below or beside the button that handles last-second objections:

| Supporting Text | When to Use |
|---|---|
| "No credit card required" | Free trial signups |
| "Cancel anytime" | Subscription signups |
| "Takes 30 seconds" | Form completions |
| "We'll reply within 24 hours" | Contact forms |
| "Join 3,200+ subscribers" | Newsletter signups (social proof) |
| "30-day money-back guarantee" | Purchase CTAs |
| "Free — no strings attached" | Content downloads |

### CTA Hierarchy Per Page

Every page needs exactly one primary CTA. Secondary CTAs should be visually subordinate:

- **Primary:** Filled button, high-contrast color. "Start Free Trial"
- **Secondary:** Outlined or text link. "Watch a Demo" / "Learn More"
- **Tertiary:** Plain text link. "Compare Plans"

## Form Microcopy

### Field Labels

- **Always above the field** — not inside (placeholder text disappears on focus, causing accessibility and usability issues — Baymard Institute)
- **Short and clear:** "Email" not "Please enter your email address"
- **Use sentence case:** "Company name" not "Company Name" or "COMPANY NAME"

### Placeholder Text

| Rule | Example |
|---|---|
| Use for format hints, not labels | `john@company.com` (format hint) — not `Enter your email` (label) |
| Keep it short | `e.g., Acme Corp` not `Please type the name of your company here` |
| Use light gray text | Placeholder should be visually distinct from user input |

### Helper Text

Short guidance below a field that prevents errors:

| Field | Helper Text |
|---|---|
| Password | "At least 8 characters with one number" |
| Phone | "We'll only call if we need to clarify something" |
| Budget | "A rough range helps us prepare the right options" |
| Message | "Tell us about your project — the more detail, the better our first conversation" |

### Error Messages

| Principle | Bad Example | Good Example |
|---|---|---|
| **Say what went wrong** | "Invalid input" | "This doesn't look like an email address — check for typos" |
| **Tell them how to fix it** | "Error" | "Password needs at least 8 characters — you have 6" |
| **Don't blame the user** | "You entered an invalid email" | "That email address doesn't look right" |
| **Be specific** | "Form error" | "The phone number field needs a country code" |
| **Use inline validation** | Red border only | Red border + specific message next to the field |

### Success Messages

| Context | Message Pattern |
|---|---|
| Form submitted | "Message sent! We'll get back to you within [timeframe]." |
| Signup complete | "You're in! Check your email for a confirmation link." |
| Purchase complete | "Order confirmed! You'll receive a receipt at [email]." |
| Password changed | "Password updated. You're all set." |
| Settings saved | "Changes saved." (Keep it brief for frequent actions) |

## Empty States

Empty states occur when there's no content to display. Turn them into opportunities:

### Types and Copy Patterns

| Empty State | Copy Pattern | Example |
|---|---|---|
| **No search results** | Acknowledge + suggest alternatives | "No results for '[query].' Try a broader search or browse our categories." |
| **Empty filtered results** | Suggest removing filters | "No items match these filters. Try removing [most restrictive filter]." |
| **First-time use** | Welcome + guide to first action | "No projects yet — create your first one to get started." |
| **Empty cart** | Light encouragement + link to products | "Your cart is empty. Start browsing our [best sellers]." |
| **No notifications** | Positive framing | "You're all caught up!" (Not "You have no notifications.") |

## Cookie Consent Banner

### GDPR-Compliant Copy

```
Headline: "We use cookies"
Body: "We use cookies to improve your experience and analyze site traffic.
       You can choose which cookies to allow."
Buttons: [Accept All] [Manage Preferences] [Reject Non-Essential]
```

**Key rules:**
- "Accept All" and "Reject" must be equally prominent (GDPR requirement in many interpretations)
- Don't use dark patterns (pre-checked boxes, hard-to-find reject option)
- Link to full cookie policy
- Keep the banner concise — 2-3 lines maximum

## Announcement / Sticky Bar

### Copy Formula

`[What's New/Offer] + [Brief Detail] + [CTA Link]`

| Type | Example |
|---|---|
| Product launch | "New: AI-powered analytics is here. See what's new →" |
| Promotion | "Spring sale: 30% off all plans. Ends Friday →" |
| Event | "Join us at Config 2025 — Register free →" |
| Content | "New guide: The Complete SEO Playbook for 2025 →" |

**Constraints:** 80 characters maximum for the text. Must be dismissible with a clear X button.

## Utility Page Copy

### 404 Page

| Element | Copy |
|---|---|
| **Headline** | Personality-appropriate acknowledgment: "Page not found" / "This page doesn't exist" / "Well, this is awkward" |
| **Body** | "The page you're looking for may have been moved or deleted. Here are some helpful links:" |
| **Navigation** | Links to: Homepage, popular pages, search, contact |

### Maintenance Page

```
Headline: "We'll be right back"
Body: "We're doing some scheduled maintenance to make things better.
       We expect to be back by [specific time + timezone]."
Updates: "Follow [@handle] for real-time updates."
```

### Coming Soon Page

```
Headline: "[Product/Site name] is coming"
Body: "[One sentence about what it is and who it's for]"
CTA: "Get notified when we launch" + email field
```

## Search UX Copy

| Element | Copy Pattern |
|---|---|
| **Placeholder** | "Search [articles/products/docs]..." |
| **Autocomplete** | Show suggestions as typed — no additional copy needed |
| **No results** | "No results for '[query].' Try different keywords or [browse all]." |
| **Spelling suggestion** | "Did you mean: [corrected query]?" |

## Sources & Further Reading

- Nielsen Norman Group — microcopy and UX writing research: https://www.nngroup.com/articles/microcopy/
- Baymard Institute — form UX and e-commerce microcopy: https://baymard.com
- Mailchimp Content Style Guide — microcopy patterns: https://styleguide.mailchimp.com
- GOV.UK Content Design — plain language and user-centered writing: https://www.gov.uk/guidance/content-design
- Torrey Podmajersky — "Strategic Writing for UX" (O'Reilly) — microcopy methodology
- Kinneret Yifrah — "Microcopy: The Complete Guide" — comprehensive microcopy reference
- Stripe's error messaging — industry benchmark for form copy: https://stripe.com
- Luke Wroblewski — form design and placeholder text research: https://www.lukew.com/ff/
- GDPR cookie consent guidance — ICO (UK): https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/
