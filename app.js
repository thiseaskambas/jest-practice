const calculator = {
   add(a, b) { return (a + b) },
   subtract(a, b) { return (a - b) },
   multiply(a, b) { return (a * b) },
   divide(a, b) { return (a / b) },
}

function capitalize(aString) {
   return aString.replace(aString[0], aString[0].toUpperCase())
}


function reverseString(aString) {
   return aString.split('').reverse().join('')
}

function caesarCipher(aString, key) {

   const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];
   const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

   const newArr = [];


   for (let i = 0; i < aString.length; i++) {
      if (alphabetUpper.includes(aString[i])) {
         if (alphabetUpper.indexOf(aString[i]) + key < 26) {
            newArr.push(alphabetUpper[alphabetUpper.indexOf(aString[i]) + key])
         } else {
            newArr.push(alphabetUpper[alphabetUpper.indexOf(aString[i]) + key - 26])
         }

      } else if (alphabetLower.includes(aString[i])) {
         if (alphabetLower.indexOf(aString[i]) + key < 26) {
            newArr.push(alphabetLower[alphabetLower.indexOf(aString[i]) + key])
         } else {
            newArr.push(alphabetLower[alphabetLower.indexOf(aString[i]) + key - 26])
         }
      } else {
         newArr.push(aString[i])
      }
   }

   return newArr.join('')


}

function analyzeArray(array) {
   return {
      average: array.reduce((prev, cur) => prev + cur) / array.length,
      min: array.reduce((prev, cur) => prev < cur ? prev : cur),
      max: array.reduce((prev, cur) => prev > cur ? prev : cur),
      length: array.length
   }

}

if (typeof module !== 'undefined')
   module.exports = { calculator, capitalize, reverseString, caesarCipher, analyzeArray };