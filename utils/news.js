export function getList(url) {
  // TODO => put URLs in NEV files
  return fetch(url)
    .then(data => data.json())
}