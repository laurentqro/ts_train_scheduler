type Letter = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "I" |
              "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" |
              "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z"

type StationCode = `${Letter}${Letter}${Letter}`

export { StationCode }