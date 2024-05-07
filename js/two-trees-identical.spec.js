
/**
 * Determine if Two Trees are Identical.
 * This method uses recursion to traverse each node in two trees to determine if the trees are identical.
 * 
 * @param {*} tree1 
 * @param {*} tree2 
 * @returns boolean true or false
 */
const areIdenticalTrees = (tree1, tree2) => {
    // if the two trees don't have the same number of branches
    if (tree1.length != tree2.length) {
        return false; // then the trees are not identical
    }

    // for each branch in the tree at this depth-level
    for (let b = 0; b < tree1.length; b++) {
        const branch1 = tree1[b];
        const branch2 = tree2[b];

        const branchName1 = Object.keys(branch1)[0];
        const branchName2 = Object.keys(branch2)[0];

        // if the branch name value is different between trees
        if (branchName1 != branchName2) {
            return false; // then the trees are not identical
        }

        // recursively check this child branch at one deeper depth-level
        return areIdenticalTrees(branch1[branchName1], branch2[branchName2]);
    }

    // if there are zero branches in both trees at this level
    return true;
};

describe(`areIdenticalTrees`, () => {
    const getTree1 = () => {
        return [
            {1: [
                {2: []},
                {3: []}
            ]}
        ];
    };

    const getTree2 = () => {
        return [
            {1: [
                {3: []},
                {2: []}
            ]}
        ];
    };

    const getTree3 = () => {
        return [
            {1: [
                {2: []}
            ]}
        ];
    };

    it(`when trees are identical, then return true`, () => {
        const tree1 = getTree1();
        const sameTree1 = getTree1();

        const actualResult = areIdenticalTrees(tree1, sameTree1);

        expect(actualResult).toEqual(true);
    });

    it(`when trees are NOT identical, then return false`, () => {
        const tree1 = getTree1();
        const tree2 = getTree2();

        const actualResult = areIdenticalTrees(tree1, tree2);

        expect(actualResult).toEqual(false);
    });

    
    it(`when trees are NOT identical because of different number of branches, then return false`, () => {
        const tree1 = getTree1();
        const tree3 = getTree3();

        const actualResult = areIdenticalTrees(tree1, tree3);

        expect(actualResult).toEqual(false);
    });
});