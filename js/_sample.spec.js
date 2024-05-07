const unitUnderTest = require('./_sample.js');

describe(`sample`, () => {
    it(`returns test`, () => {
        const actual = unitUnderTest.sample();
        expect(actual).toEqual('test2');
    });
});