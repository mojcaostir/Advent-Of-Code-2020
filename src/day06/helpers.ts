export function splitToGroups(data: string[]): string[] {
  const groups: string[] = [];
  for (const entry of data) {
    const newEntry = entry.replace(/\n/g, ' ');
    groups.push(newEntry);
  }
  return groups;
}

export function splitToPeopleInGroups(groups: string[]): string[][] {
  const peopleGroup: string[][] = [];
  for (const group of groups) {
    const split = group.split(' ');
    peopleGroup.push(split);
  }
  return peopleGroup;
}
