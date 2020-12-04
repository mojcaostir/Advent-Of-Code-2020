import fs from 'fs';

export function getPassports(): {}[] {
  const fileData: string[] =
    fs.readFileSync(__dirname + '/input.txt', 'utf-8').split(/\n\n/);

  const data = []
  for (const entry of fileData) {
    const newEntry = entry.replace(/\n/g, ' ')
    data.push(newEntry)
  }

  let passports = []
  for (const passport of data) {
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
