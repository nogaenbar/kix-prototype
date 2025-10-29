Screen‑specific guidelines
Dashboard

No ticket tabs or global ticket filters on this page.

Clickable KPIs and chart legends may deep‑link to Tickets with pre‑applied filters.

Tables fit inside the card; small chips; no right‑edge clipping.

Tickets page

Tabs are allowed here.

Top area contains search and filters consistent with the table toolbar pattern.

Row click opens Ticket Detail and preserves current filters when navigating back.

Ticket Detail

Sticky object header (see Page Header section).

Left column

Details card: 2‑column field grid (Organization, Contact, Type, State, Priority (read‑only), Lock, Assignee/Owner, SLA due, Accounted time). Long values truncate with tooltips; copy icons where relevant.

Conversation card (formerly Communication History):

Single filter bar (segmented: All | External | Internal | Unread) with counts; Search and Date controls to the right.

Thread uses the existing message item pattern (author, timestamp, External/Internal, unread dot).

Per message actions live in a kebab menu (Reply, Split, Print).

Composer pinned at the bottom: RTE with segmented External reply / Internal note, plus To/Cc/Bcc and attachments.

Right sidebar

Contact card: clear “Call / Email / Copy” CTAs.

Linked assets: Top N as a list; View all opens drawer with full table.

Linked tickets (contact): Top N list; View all drawer.

Suggested knowledge: Top N list; View all drawer.

Subtasks: Top N list; View all drawer.

All modules are collapsible and remember last state; headers show counts.

Remove the legacy top tabs (Ticket Information / History / Attachments). Their content is already mapped to Details, Conversation, and the composer/attachments strip.

Micro‑interactions (use existing motion tokens)

Search expand/collapse: short ease (~150–200ms).

Row hover and selection: subtle background and left bar; avoid heavy shadows.

Collapse/expand chevrons rotate; animate height changes smoothly.

Content & microcopy

“Tickets for contact” → “Linked tickets (contact)”

“Assigned assets” → “Linked assets”

“Suggested FAQ” → “Suggested knowledge”

Empty states include a short description + clear CTA (“Link asset”, “Create subtask”).

Do / Don’t

Do

Reuse components/tokens; compose missing variants from existing parts.

Keep pages responsive; ensure tables do not overflow cards.

Make all icon‑only controls focusable with tooltips.

Use one Primary action per region.

Don’t

Add new hex colors or custom CSS.

Introduce tabs on the Dashboard.

Place “New Ticket” back in the top nav (keep it aligned with the page header where designed).

Create new iconography styles; stick to the current set.

QA checklist for generated screens

No hard‑coded colors; all fills/borders/text use existing tokens.

All interactive elements show the standard focus ring and meet target sizes.

Dashboard has no tabs; Tickets has tabs; Ticket Detail has a sticky header.

Tables fit inside cards at standard widths; Subject truncates with tooltip; no horizontal scroll.

Conversation shows one filter bar with counts; composer is pinned at the bottom.

Sidebar modules show Top N with View all drawers; headers display counts.

Breadcrumb back to Tickets works and preserves the last filter state.