const groupAnagrams = (strs) => {
  const listOfList = [];

  const words = strs.map((str) => str.split("").sort().join(""));
  const anagramFound = [];
  words.forEach((word) => {
    const indices = words.reduce((acc, val, i) => {
      if (val === word) acc.push(i);
      return acc;
    }, []);
    if (!anagramFound.includes(word)) {
      anagramFound.push(word);
      const temp = [];
      indices.forEach((idx) => temp.push(strs[idx]));
      listOfList.push(temp);
    } else {
    }
  });

  return listOfList;
};
