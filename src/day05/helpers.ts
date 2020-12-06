export function arraySeatIDs(data: string []): number[] {
  const seatIDs: number[] = []
  for (const pass of data) {
    if (pass == "") {break}
    const rowString = pass.slice(0,7)
    const columnString = pass.slice(7)

    let rowMin = 0
    let rowMax = 127
    for (const char of rowString) {
      if(char == "F") {
        rowMax = Math.floor((rowMax - rowMin) / 2) + rowMin
      }
      if (char == "B") {
        rowMin = Math.floor((rowMax - rowMin) / 2) + rowMin + 1
      }
    }

    let columnMin = 0
    let columnMax = 7
    for (const char of columnString) {
      if(char == "L") {
        columnMax = Math.floor((columnMax - columnMin) / 2) + columnMin
      }
      if (char == "R") {
        columnMin = Math.floor((columnMax - columnMin) / 2) + columnMin + 1
      }
    }
    const seatID = rowMax*8 + columnMax
    seatIDs.push(seatID)
  }
  return seatIDs
}
