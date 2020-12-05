import {seatIDs} from "./part1";

for (let i = 0; i < seatIDs.length-1; i++) {
  const seatID = seatIDs[i]
  const nextSeatId = seatIDs[i+1]
  if (!(seatID == (nextSeatId - 1))) {
    const mySeatID = seatID + 1
    console.log("My SeatID: " + mySeatID)
  }
}
