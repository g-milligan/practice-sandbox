/**
 * Given a staircase with n steps, we need to find the total number of distinct ways to climb it by taking 1 or 2 steps at a time. 
 * Sure, this can be done by a brute force method and finding all the possibilities, but there is a really easy way to understand this. 
 * This video shows how you can form building blocks and ultimately arrive at a very efficient solution.
 * 
 * https://www.youtube.com/watch?v=UUaMrNOvSqg
 */
const calculateNumberOfWaysToClimbStairs = (nStepsTotal) => {
    // if there are fewer than 4 steps
    if (nStepsTotal < 4) { return nStepsTotal; }

    // running list of number of steps that could be taken for each step
    const steps = [0, 1, 2];

    for (let i = steps.length; i <= nStepsTotal; i++) {
        // the number of steps possible for this step is equal to the sum of the previous two possible number of steps
        steps.push(steps[i - 1] + steps[i - 2]);
    }

    // return the latest count
    return steps[steps.length - 1];
};

describe(`calculateNumberOfWaysToClimbStairs`, () => {
    it(`when the number of steps is1 then return 1`, () => {
        const actualResult = calculateNumberOfWaysToClimbStairs(1);
        expect(actualResult).toEqual(1);
    });

    it(`when the number of steps is 2 then return 2`, () => {
        const actualResult = calculateNumberOfWaysToClimbStairs(2);
        expect(actualResult).toEqual(2);
    });
    
    it(`when the number of steps is 3 then return 3`, () => {
        const actualResult = calculateNumberOfWaysToClimbStairs(3);
        expect(actualResult).toEqual(3);
    });

    it(`when the number of steps is 4 then return 5`, () => {
        const actualResult = calculateNumberOfWaysToClimbStairs(4);
        expect(actualResult).toEqual(5);
    });

    it(`when the number of steps is 7 then return 21`, () => {
        const actualResult = calculateNumberOfWaysToClimbStairs(7);
        expect(actualResult).toEqual(21);
    });
});