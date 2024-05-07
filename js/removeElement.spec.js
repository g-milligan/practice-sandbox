/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};

describe(`removeElement`, () => {
    it(`case 1`, () => {
        const actual = removeElement([3,2,2,3], 3);
        expect(actual).toEqual([2,2]);
    });
    it(`case 2`, () => {
        const actual = removeElement([0,1,2,2,3,0,4,2], 2);
        expect(actual).toEqual([0,1,4,0,3]);
    });
});