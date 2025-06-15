function getTextContrastColor(hexColor: string): string {
  const hex = hexColor.replace("#", "");

  const fullHex =
    hex.length === 3
      ? hex
          .split("")
          .map((h) => h + h)
          .join("")
      : hex;

  const r = parseInt(fullHex.slice(0, 2), 16);
  const g = parseInt(fullHex.slice(2, 4), 16);
  const b = parseInt(fullHex.slice(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#1f2937" : "#f3f4f6";
}

export { getTextContrastColor };
