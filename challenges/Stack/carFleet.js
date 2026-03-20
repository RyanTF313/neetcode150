const carFleet = (target, position, speed) => {
  const cars = position
    .map((pos, i) => [pos, speed[i]])
    .sort((a, b) => a[0] - b[0]);

  let fleets = 0;
  let maxTime = 0;

  for (let i = cars.length - 1; i >= 0; i--) {
    const time = (target - cars[i][0]) / cars[i][1];
    if (time > maxTime) {
      fleets++;
      maxTime = time;
    }
  }

  return fleets;
};
