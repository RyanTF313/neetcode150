const encode = (strs) => {
  let result = "";

  for (const str of strs) {
    result += str.length + "#" + str;
  }

  return result;
};

const decode = (str) => {
  const result = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }

    const length = parseInt(str.substring(i, j), 10);

    j++;

    const s = str.substring(j, j + length);
    result.push(s);

    i = j + length;
  }

  return result;
};
