import {readFileSplitByNewLine} from "../util";

let lines = readFileSplitByNewLine('/day07/input.txt');

let count = 0;

let bags = {};

// collect bags in format: { 'dim red' : [ 'bright gold', 'striped fuchsia' ] }
for (const line of lines) {
  // split bag types after outer bag type
  let innerBagTypes = line.replace(/.*?bags/, "").split(",");
  // trim to just bag name
  innerBagTypes = innerBagTypes.map(x => x.replace(/.*\d /, "").replace(/[^a-zA-Z ]/g, "").replace(/(bags|bag)/,"").trim())
  // set object at outer bag type
  // @ts-ignore
  bags[line.replace(/bags.*/, "").trim()] = innerBagTypes;
}

function checkBagContainsGold(bags: { [x: string]: any; }, bag: string) {
  // bag does not contain anything
  if (!bags[bag]) {
    return false;
  }
  // bag contains gold directly
  if (bags[bag].includes("shiny gold")) {
    return true;
  }
  // check inner bags
  for (const innerBag of bags[bag]) {
    // check if inner bag contains gold bag
    if (checkBagContainsGold(bags, innerBag)) {
      return true;
    }
  }
  // none of the inner bags contain gold
  return false;
}

for (const bag in bags) {
  // add 1 for each bag containing gold
  count += checkBagContainsGold(bags, bag) ? 1 : 0;
}

console.log(count);
