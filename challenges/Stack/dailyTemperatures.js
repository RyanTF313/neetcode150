const dailyTemperatures = (temperatures) => {
  const result = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevDay = stack.pop();
      result[prevDay] = i - prevDay;
    }

    stack.push(i);
  }

  return result;
};
