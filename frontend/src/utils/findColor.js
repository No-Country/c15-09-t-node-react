export function findColor(colorRanges, averageColor) {
  return colorRanges.find(
    (range, index) =>
      averageColor >= range.min && (averageColor < range.max || index === colorRanges.length - 1)
  );
}
