const scrore=400
console.log(scrore)
const balance= new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(1));

const otherNumber=23.8765
console.log(otherNumber.toPrecision(3)) //23.9
// Number of significant digits. Must be in the range 1 - 21, inclusive.Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
const otherNumber1=123.8765
console.log(otherNumber.toPrecision(3)) //124

const otherNumber2=1123.8765
console.log(otherNumber.toPrecision(3)) //1.12e+3 converted to exponential

const hundreds= 100000;
console.log(hundreds.toLocaleString('en-In')) //1,00,000 by default use US system 100,000.

/*constructor: ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf() */