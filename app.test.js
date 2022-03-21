const { expect } = require('@jest/globals');
const { reverse } = require('lodash');
const { capitalize, calculator, reverseString, caesarCipher, analyzeArray } = require('./app.js')




test('capitalizes string', () => {
   expect(capitalize('alpha')).toBe('Alpha')
});

test('adds 1+2', () => {
   expect(calculator.add(1, 2)).toBe(3)
})
test('subtracts 10 - 5', () => {
   expect(calculator.subtract(10, 5)).toBe(5)
})
test('multiply 5*5', () => {
   expect(calculator.multiply(5, 5)).toBe(25)
})
test('divide 18/3', () => {
   expect(calculator.divide(18, 3)).toBe(6)
})


test('reverse a string', () => {
   expect(reverseString('beta')).toBe('ateb')
})

test('crypting', () => {
   expect(caesarCipher('heLlo my fRiend!', 5)).toBe('mjQqt rd kWnjsi!')
})

test('array analysis', () => {
   expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
      average: 4,
      min: 1,
      max: 8,
      length: 6
   })
})