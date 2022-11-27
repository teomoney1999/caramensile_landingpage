export function filterCommas(
  items,
  viewObj,
  pattern = /<\/div>,<div/gi,
  replacement = "</div><div"
) {
  return items
    .map((item) => viewObj(item))
    .toString()
    .replaceAll(pattern, replacement);
}
