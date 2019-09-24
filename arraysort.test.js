const bill=require("./Arraysort")
test('should be able to sort an array', ()=>{
    const array = [1,2,3,4,'tests','javascript']
    const result = {"chars": ["tests", "javascript"], "even": [2, 4], "odds": [1, 3]}
    expect(bill(array)).toEqual(result)
})
