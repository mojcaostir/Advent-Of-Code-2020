import {readFileSplitByNewLine} from "../util";

export function getPassports(): {}[] {
  const data = readFileSplitByNewLine('/day04/input.txt');
  const passportData = []
  for (const entry of data) {
    const newEntry = entry.replace(/\n/g, ' ')
    passportData.push(newEntry)
  }

  let passports = []
  for (const passport of passportData) {
    let obj = {}
    const entry = passport.split(' ')
    entry.forEach(item => {
      const [key, value] = item.split(":")
      // @ts-ignore
      obj[key] = value
    })
    passports.push(obj)
  }
  return passports
}

export const keys = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'cid', 'hgt']
