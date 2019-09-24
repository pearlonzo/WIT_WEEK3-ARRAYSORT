const arraySort = require('./arraysort');

test('It does not accept numbers as input', () => {
    expect(arraySort(y)).toBe('invalid input');
});

test('It does not accept strings as input', () => {
    expect(arraySort('string')).toBe('invalid input');
});

test('It sorts a given array', () => {
    expect(
        arraySort([2,9,15,40,19,13,17,30,0,6,5,1,7,8,'ray','12','doc','p','e','a','r','l' ])
        ).toEqual(
            {'evens': [ 2, 40, 30, 0, 6, 8, '12' ], 'odds': [9, 15, 19, 13, 17, 5, 1, 7], 'chars': ['ray', 'doc', 'p', 'e', 'a', 'r', 'l',]}
            );
});
