import {getPassports, keys} from "./helpers";

const passports = getPassports()

let  count = 0
for (const pass of passports) {
  console.log('Passport: ' + JSON.stringify(pass))
  let ok = true
  for (const key of keys) {
    console.log('Checking key: ' + key)
    if (!(key in pass)) {
      console.log('..... WARNING! Missing key: ' + key)
      if (!(key == 'cid')) {
       ok = false;
       break
      } else {
        console.log('..... OH, IT`S OK, its cid')
      }
    } else {
      console.log('.....' + key + ' key in passport')
    }
  }

  if (ok) {
    count ++
  }
}

console.log(count)
