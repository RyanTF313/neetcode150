const productExceptSelf = (nums) => {
  const arrSize = nums.length;
  const answer = new Array(arrSize).fill(1);

  let leftSideProduct = 1;
  for (let i = 0; i < arrSize; i++) {
    answer[i] = leftSideProduct;
    leftSideProduct *= nums[i];
  }

  let rightSideProduct = 1;
  for (let i = arrSize - 1; i >= 0; i--) {
    answer[i] *= rightSideProduct;
    rightSideProduct *= nums[i];
  }

  return answer;
};
