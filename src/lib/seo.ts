export function jsonLd(data: object) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}
