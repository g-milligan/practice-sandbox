const getSquareRoot = (inputNum) => Math.floor(Math.sqrt(inputNum));

describe(`getSquareRoot`, () => {
    it(`when input is 5 then return 2`, () => {
        const actualResult = getSquareRoot(5);
        expect(actualResult).toEqual(2);
    });
    it(`when input is 4 then return 2`, () => {
        const actualResult = getSquareRoot(4);
        expect(actualResult).toEqual(2);
    });
    it(`when input is 49 then return 7`, () => {
        const actualResult = getSquareRoot(49);
        expect(actualResult).toEqual(7);
    });
    it(`when input is 13 then return 3`, () => {
        const actualResult = getSquareRoot(13);
        expect(actualResult).toEqual(3);
    });
});