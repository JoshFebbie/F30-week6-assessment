const {shuffleArray} = require('./utils')

const testArr1 = [1, 2, 3, 4, 5]
const testArr2 = [5, 4, 3, 2]
const testArr3 = ["will", "array", "shuffle"]


describe('shuffleArray should', () => {
    test("returns shuffled array", () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
    })

    test("array should be returned with same length", () => {
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
        expect(shuffleArray(testArr2)).toHaveLength(testArr2.length)
        expect(shuffleArray(testArr3)).toHaveLength(testArr3.length)
    })
})