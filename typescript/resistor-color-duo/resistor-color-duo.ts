const ColorList = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
]

export function decodedValue(colors: string[]) {
  if (colors.length < 2) {
    throw new Error("At least two colors need to be present")
  }
  return Number(
    colors
      .slice(0, 2)
      .map((color) => ColorList.indexOf(color))
      .join("")
  )
}
