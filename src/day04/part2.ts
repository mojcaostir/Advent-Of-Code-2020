import {getPassports, keys} from "./helpers";

function validValuesPassportCount(passports: {}[]): number {
  let  count = 0
  for (const pass of passports) {
    let present = true
    let valid = true
    for (const key of keys) {

      if (!(key in pass)) {
        if (!(key == 'cid')) {
          present = false;
          break
        }

      } else {
        // @ts-ignore
        const value = pass[key]
        if (key == 'byr') {
          if (!(value > 1919 && value < 2003)) {
            valid = false
            break
          }
        }
        if (key == 'iyr') {
          if (!(value > 2009 && value < 2021)) {
            valid = false
            break
          }
        }
        if (key == 'eyr') {
          if (!(value > 2019 && value < 2031)) {
            valid = false
            break
          }
        }
        if (key == 'hgt') {
          const unit = value.slice(value.length - 2)
          const number = value.slice(0, value.length - 2)
          if (unit == 'cm') {
            if (!(number > 149 && number < 194)) {
              valid = false
              break
            }
          }
          if (unit == 'in') {
            if (!(number > 58 && number < 76)) {
              valid = false
              break
            }
          }
        }
        if (key == 'hcl') {
          const string = value.substring(1)
          const find = string.match(/([a-f]+|[0-9]+)+/g)
          if (!(value.charAt(0) == '#' && find[0].length == 6)) {
            valid = false
            break
          }
        }
        if (key == 'ecl') {
          if (!(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value))) {
            valid = false
            break
          }
        }
        if (key == 'pid') {
          if (!(value.length == 9)) {
            valid = false
            break
          }
        }
      }
    }

    if (present && valid) {
      count ++
    }
  }
  return count
}


const passports = getPassports()

const day04part2Result = validValuesPassportCount(passports);

console.log('Number of valid passports with valid values: ' + day04part2Result);
