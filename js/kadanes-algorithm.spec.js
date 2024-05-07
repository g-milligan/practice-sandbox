const getMaxSumOfContiguousSubArray = (givenArray) => {
    let currentSum = 0;
    let maxSum = -9999;

    for (let g = 0; g < givenArray.length; g++) {
        // accumulate a new number into the current sum
        currentSum += givenArray[g];

        // if a new maximum sum has been found
        if (currentSum > maxSum) {
            maxSum = currentSum; // remember this is the biggest maximum so far
          }
        
          if (currentSum < 0) {
            currentSum = 0; // discard previous negative number
          }
    }

    return maxSum;
};

describe(`getMaxSumOfContiguousSubArray`, () => {
    it(`when input is {1,2,3,-2,5} return 9`, () => {
        const actualResult = getMaxSumOfContiguousSubArray([1,2,3,-2,5]);
        expect(actualResult).toEqual(9);
    });
    it(`when input is {-1,-2,-3,-4} return -1`, () => {
        const actualResult = getMaxSumOfContiguousSubArray([-1,-2,-3,-4]);
        expect(actualResult).toEqual(-1);
    });
    it(`when input is {-2,-1,-3,-4} return -1`, () => {
        const actualResult = getMaxSumOfContiguousSubArray([-2,-1,-3,-4]);
        expect(actualResult).toEqual(-1);
    });
});