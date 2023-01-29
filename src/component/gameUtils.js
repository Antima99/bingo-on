import possibilities from "../data/bingoPossibilities.json";

export const GetBingos = (data, matchedPossibilityIndexes) => {
  let allCells = [...data];
  let matchingBingos = [];
  let matchedPossibilityIndex = [];

  for (let i = 0; i < possibilities.length; i++) {
    let results = [];
    for (let j = 0; j < possibilities[i].matches.length; j++) {
      if (!matchedPossibilityIndexes.includes(i)) {
        let condition =
          j !== 0
            ? allCells[possibilities[i].matches[j]]?.isStriked &&
              allCells[possibilities[i].matches[j - 1]]?.isStriked
            : allCells[possibilities[i].matches[j]]?.isStriked &&
              allCells[possibilities[i].matches[j + 1]]?.isStriked;

        results.push(condition ? true : false);

        if (
          results.length === possibilities[i].matches.length &&
          !results.includes(false)
        ) {
          matchingBingos.push(possibilities[i].matches);
          matchedPossibilityIndex.push(i);
        }
      }
    }
  }
  return {
    matchingBingos,
    matchedPossibilityIndex,
  };
};
