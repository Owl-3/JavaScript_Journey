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
var strFloat1 = 34.54267;
console.log(strFloat1.toFixed(2)); //rounds off to 2-decimal places. You can choose the number of decimal places by changing the value(x) in the toFixed(x) parenthesis.

//##STRINGS

var string1 = 'My name is Dancan'
console.log(typeof(string1));

//handling double quotes and single quotes in a string
//var doubleQuotes = " "Messi" is my nickname";
//console.log(typeof(doubleQuotes); //this generates an error. Had to comment them out to run the proceeding codes.
//An alternative aroound this is using a backslash. Lets dig in!
//one way to solve the above is by adding a backslash before the start of the opening double quote of inside string and immediately before the closing double quote. 

//Double Quotes
var doubleQuotes = " \"Messi\" is my nickname";
console.log(doubleQuotes); 

//Single Quotes
//var singleQuotes = ' 'Messi' is my nickname'; //this generates an error simmilar to one above. can be solved by adding backslash similar to double quotes.

var singleQuotes = ' \'Messi\' is my nickname';
console.log(singleQuotes);

//Another way around this is by using single and double Quotes alternatively in a single string1. Let's see! 
var doubleQuotes = "'Messi' is my nickname";
console.log(singleQuotes);

var singleQuotes = ' "Messi" is my nickname';
console.log(singleQuotes); 


//STRING FUNCTIONS

//1.length funtion
//returns the length of this string

var myFirstString = "This is my first string function";
console.log(myFirstString.length); 

//2. indexOf
// finds the index/position of a string inside the parent string.
 
console.log(myFirstString.indexOf('function'));
console.log(myFirstString.indexOf('This'));

//3. lastIndexOf
//finds the index of the last similar string inside a parent string. For example, in the case below, we have 2 functions.

var myFirstString = "This function is my first string function";
console.log(myFirstString.lastIndexOf('function'));

//4. slice
//extracts part of a string. 
//syntax: .slice(start index, end index)
var myFirstString = "This is my first string function";
console.log(myFirstString.slice(0, 4)); //Note! the function slices the characters.
console.log(myFirstString.slice(24, 32));
console.log(myFirstString.slice(-9)); //prints the last 9 characters.
console.log(myFirstString.slice(7)); // prints from 7th character till the end.

//5. substr()
//Gets the substring of the parent string. Works more like slice.Works
console.log(myFirstString.substr(24, 32));

//6. toUpperCase()
//converts characters to upper case
console.log(myFirstString.toUpperCase());

//7. toLowerCase()
//converts characters to lower case

console.log(myFirstString.toLowerCase());
//8. concat()
//combines two or more strings
var sentence1 = 'JavaScript ';
var sentence2 = 'battlefield';
console.log(sentence1.concat(sentence2));

// use '+' as an alternative to concat() function/ for more strings/elements.
console.log(sentence1 + sentence2);

//9.trim()
//removes extra-spaces
var extraSpaces = '    My name is Dancan';
console.log(extraSpaces.trim()); //remobves the spaces between the first single quote and the first string character.

var extraSpaces = '    My   name is Dancan   ';
console.log(extraSpaces.trim());
