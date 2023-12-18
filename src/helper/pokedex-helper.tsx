export function getPage(an_url: string): Number {
  const url = new URL(an_url)
  const params = new URLSearchParams(url.search);
  const page = params.get('page');

  if (page === null) {
    return 1;
  } else {
    return parseInt(page);
  }
}

export function getOffsetFromUrl(an_url: string): number {
  const offsetMatches = /offset=([0-9]+)/.exec(an_url)
  return offsetMatches && parseInt(offsetMatches[1]) || 0
}

export function getIdFromUrl(an_url: string): number | null {
  const firstIdMatches = /\/([0-9]+)\//.exec(an_url)
  return firstIdMatches && parseInt(firstIdMatches[1]) || null
}