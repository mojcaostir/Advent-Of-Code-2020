import {readFileSplitByNewLine} from "../util";

type Rule = {bag: string, content: Bag[]}
type Bag = {number: number, color: string}

function sliceRulesToArrayOfObjects(data: string[]): Rule[] {
  let rules:Rule[] = [];
  for (const rule of data) {
    let count = 0;
    for (let i = 0; i < rule.length; i++) {
      if (rule.charAt(i) === " ") {
        count ++
        if (count === 2) {
          const bags: Bag[] = []

          const contentBags =
            rule
              .substring(i+14)
              .replace(" bags.", "")
              .replace(" bags", "")
              .replace(" bag.", "")
              .replace(" bag", "")
              .split(", ");

          for (const item of contentBags) {
            const itemObj = {number: +item.slice(0,1), color: item.slice(2)}
            bags.push(itemObj)
          }
          const ruleObj: Rule = { bag: rule.substring(0, i), content: bags }
          rules.push(ruleObj);
          break;
        }
      }
    }
  }
  return rules
}

function shinyGoldCount(rules: Rule[]) {
  let color = [];
  for (const rule in rules) {
    const bag = rules[rule].bag
    const content = rules[rule].content
    if (bag == "shiny gold") {
      continue;
    }
    if (!(bag == "shiny gold")) {
      for (const bagInContent of content) {
        if (bagInContent.color === "shiny gold") {
          color.push(bag)
        } else {
          for (const r of rules) {
            if (bagInContent.color === r.bag) {
              for (const c of r.content) {
                if (c.color === "shiny gold") {
                  color.push(r.bag)
                }
              }
            }
          }
        }
      }
    }
  }
  return {color}
}

const fileData = readFileSplitByNewLine('/day07/test.txt');

const rulesInArray = sliceRulesToArrayOfObjects(fileData);

const day07part1Result = shinyGoldCount(rulesInArray);


console.log(day07part1Result)
