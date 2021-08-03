//   var num1 = 9;
//  var num2 = 2;
//  var sum = num1 + num2;
//  console.log(sum);

console.log('hellow there');

// strings
var firstName = 'Dancan';
console.log(firstName);

var firstNum = 10;
console.log(firstNum);

// ways to write variable names
// camel case
// var firstNum

// pascal case
// FirstNum

// snake case
// first_name

// Rules for naming js variables
// names are case sensitive
// var a, A;
// names can contain letters, digits , _ and $
// var JavaScript,HTML5, first_name
// names cannot start with a digits
// 1firstName
// name can start with an _ or $
// _first_name
// names cannot be researved words
// var

// JS Numbers

console.clear();

var num1 = 23; //integer
var num2 = 4.3; //float/decimal

console.log(typeof(num2));
// #addition js
var addition = num1 + num2;
console.log(addition);

// #substraction
var substraction = num1 - num2;
console.log(substraction);

// #division
var div = num1 / num2;
console.log(div);

// multiplication
var multiplication = num1 * num2;
console.log(multiplication);

// toString() changes integer to string
var num3 = 3;
var num4 = 4.6;
console.log(num3.toString());
console.log(num4.toString());

// parseInt() changes string numeral input to integer/numer

var strNum1 = '23.5';
var strNum2 = '12.4';
var strNum3 = 'ABC';
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3)); //expected output is a NaN which means that the input is not a number thus cannot be parsed/converted to an integer
 
//parseFloat() string float numeral as input and retuns a floating number
console.log(parseFloat(strNum2));
console.log(parseFloat(strNum1));

//toFixed() takes a floating number and rounds it off to a given position
var strFloat1 = '34.54267';
console.log(strFloat1.toFixed());
console.log(strFloat1.toFixed(2)); //convers to 2-decimal AnimationPlaybackEvent.

