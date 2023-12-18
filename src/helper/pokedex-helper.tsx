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
