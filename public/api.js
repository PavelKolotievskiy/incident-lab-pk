export function searchUrl(term) {
  return `/api/search?${new URLSearchParams({ q: term })}`;
}
