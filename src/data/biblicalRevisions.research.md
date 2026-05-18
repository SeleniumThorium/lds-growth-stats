# Biblical Revisions — Layout Research Notes

37 entries spanning roughly 250 BC (Septuagint) through 2021 (NRSVue), grouped by `RevisionCategory`. The dataset is shaped to support several natural axes of interaction.

## Dimensions in the data

- **Time** — every entry has `sortYear` (negative for BC). The spread is heavily back-loaded: 4 BC entries, 7 in AD 90–600, 4 medieval/early-modern (1382–1568), then a dense cluster from 1611 onward (15 entries between 1611 and 2021).
- **Category** — seven color-coded buckets: Manuscript Tradition, Canon Decision, Translation, Critical Text, Disputed Passage, Modern Translation, Restoration.
- **Geography / Language** — implicit but visible: Hebrew, Greek, Latin, German, English, plus a Restoration-era English branch.
- **Passages affected** — many entries carry concrete verse anchors that recur across entries (Mark 16:9–20, John 7:53–8:11, 1 John 5:7, Isaiah 7:14). This cross-linking is the strongest interactive hook.

## Natural groupings for a layout

1. **Horizontal timeline with category lanes.** A swimlane chart (x = sortYear, lane = category) shows that "Canon Decision" clusters in AD 90–400, "Translation" runs from c. 250 BC to 1611, and "Modern Translation" and "Critical Text" dominate post-1800. Restoration sits as its own short branch (1830, 1979).
2. **Verse-centric cross-reference view.** Several disputed passages thread through 4–5 entries each (e.g., 1 John 5:7 touches Codices, Erasmus/TR, Tischendorf, Westcott-Hort, Comma Johanneum entry, RV/ASV, NRSV). A small "passage" filter or chord diagram would let a reader click Mark 16:9–20 and see every entry that touched it.
3. **Lineage tree.** Translations have a clear inheritance pattern: Tyndale → Coverdale/Matthew/Great → Geneva/Bishops' → KJV 1611 → KJV 1769 → LDS KJV; and RV 1881 → ASV 1901 → RSV → NRSV / ESV. A tree or Sankey would make this lineage legible.
4. **LDS lens overlay.** Four entries (JST, Book of Mormon biblical quotations, LDS KJV, KJV 1611) form a Restoration arc that could be highlighted as a separate "what an LDS reader should know" path through the broader catalog.
5. **Reason vs. Impact comparison.** Each entry has both `reason` (cause) and `doctrinalImpact` (effect). A two-column card layout or expandable accordion makes the cause/effect symmetry scannable.

## Recommended primary treatment

A vertical or horizontal scrollable timeline keyed on `sortYear`, color-coded by category, with click-to-expand cards showing description / reason / impact / sources, **plus** a secondary "filter by affected passage" pill row at the top. The passage filter is the highest-information interaction because it surfaces the textual connectivity that makes the whole story coherent for an LDS reader thinking about "plain and precious things."
