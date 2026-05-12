// SeleniumThorium wordmark, inlined as SVG so it inherits color from the
// nearest `text-*` Tailwind class via `currentColor`. Pair it with
// `text-gray-900 dark:text-white` (or any other color utility) on a wrapping
// element to retheme the mark.
//
// Why textLength + lengthAdjust: system fonts render at different widths on
// different OSes (Segoe UI on Windows is wider than -apple-system on macOS).
// textLength forces "Selenium" and "Thorium" to render at fixed widths so
// the logo looks identical everywhere — and so the wordmark never overflows
// the viewBox and gets clipped.

type Props = {
  className?: string;
  title?: string;
};

const FONT_SANS =
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const FONT_MONO =
  "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export function SeleniumThoriumLogo({
  className = "h-10",
  title = "SeleniumThorium",
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 64"
      fill="currentColor"
      role="img"
      aria-label={title}
      overflow="visible"
      className={className}
    >
      <title>{title}</title>
      <rect
        x="2"
        y="8"
        width="44"
        height="50"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text x="8" y="20" fontFamily={FONT_MONO} fontSize="8">
        34
      </text>
      <text
        x="7"
        y="46"
        fontFamily={FONT_SANS}
        fontSize="30"
        fontWeight="500"
        textLength="115"
        lengthAdjust="spacingAndGlyphs"
      >
        Selenium
      </text>
      <rect
        x="141"
        y="8"
        width="46"
        height="50"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text x="147" y="20" fontFamily={FONT_MONO} fontSize="8">
        90
      </text>
      <text
        x="146"
        y="46"
        fontFamily={FONT_SANS}
        fontSize="30"
        fontWeight="500"
        textLength="105"
        lengthAdjust="spacingAndGlyphs"
      >
        Thorium
      </text>
    </svg>
  );
}
