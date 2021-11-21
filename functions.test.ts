const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should return an array', () => {
        expect(shuffleArray).toEqual([]);
    });

    // test('should return array same length', () => {
        
    //     function shuffleArray(array) {
    //         let arrCopy = [...array]
    //         for (let i = arrCopy.length - 1; i > 0; i--) {
    //             const j = Math.floor(Math.random() * (i + 1));
    //             [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
    //         }
    //         return arrCopy
    //     }
        
      
    //     expect(shuffleArray([2,5])).toHaveLength(2);
    // })
})