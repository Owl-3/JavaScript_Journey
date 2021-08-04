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
console.log(extraSpaces.trim()); //as noticed in the output, the trim() function only removes the spaces before or after the string characters but not between them!

//10.charAt()
//takes the position/index as an argument and return the character ata that position
console.log(extraSpaces.charAt(15));  //took the position of the character indexed 15 and outputed it.
 
//11. split()
//splits string on the based on the argument passed.
var string2 = 'This is my JavaScript introductory lesson'
console.log(string2.split('')); //splits the individual character including whitespace.

//other forms of formatting: ("o") -use of a letteras a seperator.
console.log(string2.split("o")); //seperates wherever there's a letter 'o' or any other letter you might passed in the argument.


 //:("", x) - use of limit seperator. x is the limit.
 console.log(string2.split("", 4)); //sets seperator as "" with limit of the first 4 characters.
                            

 
 
 //NULL and UNDEFINED VALUES
//NULL- value assigned to a variable to indicate it holds no value.
//Undefined - variable declared but not initialized.

var name   //
console.log(name); //outputs undefined. the variable name is not allocated any value.

var name = null;
console.log(name); //outputs null. variable name is assigned a null value.





//CONDITIONAL STATEMENTS

//if-else statements

let hour = 13;
if ( hour < 9) {
    console.log('Good Morning');
}
else if (hour > 12 ){
    console.log('Good Afternoon');
}
else{
    console.log('Good Evening');
}


//switch ... case
//In the codes below, I want to indicate the javaScript topics I am supposed to cover. Let's dip in!
var currentDay = 'Tue'
switch (currentDay) {
    case 'Mon':
        console.log('Conditional statements');
        break;
    case 'Tue':
        console.log('Operators');
        break;
    case 'Wed':
        console.log('Type Coercion');
        break;
    case 'Thur':
        console.log('Objects and Arrays');
        break;
    case 'Fri':
        console.log('Loops');
        break;                

    default:
        console.log('HTML and CSS');
        break;
}



//OPERATORS

addition: '+'
var num1 = 10;
var num2 = 4;
console.log(num1 + num2); //outputs 14 (10 + 4)

substraction: '-'
console.log(num1 - num2); //outputs 6 (10 - 4)

modulus:  '%'
console.log(num1 % num2); //outputs 2 (10 % 4). 2 is the remainder when you divide 10 by 4..

multiplication: '*'
console.log(num1 * num2); //outputs 40 (10 * 4)

division: '/'
console.log(num1 / num2); //outputs 2.5 (10 / 2)

increment: '++' // post-increment- first variable used then values increased. Or, operator increases and returns the value before increasing.
                //pre-increment- increament operator increases and returns the value after the increase. Let's dip in!
//post-increament.

//example1
 let a = 2;
 b = a++;
 console.log(b);   //outputs b=2. This is the value before the increment.
 console.log(a);   //outputs a=3. the value a increases.          

 //pre-increament
 let c = 5;
 d = ++c;
 console.log(c); //outputs 6. The variable c is increased and returned.
 console.log(d); // outputs 6. variable c is increased and returned.

decreament: '--'
//applies pre and post increment
//post-decrement
let x = 4;
y = x--;
console.log(y);
console.log(x);

//pre-decrement
let k = 4;
j = --k;
console.log(j);
console.log(k);



//ASSIGNMENT OPERATORS
//assigns values to variables

//=
//var num1 = 3; //assigns value 3 to varia

//+=
var num1 = 4;
var num2 = 10;
num1 += 16; //means that 16 is added to the original value of num1.
console.log(num1); 

// -=
num2 -= 3; // num2 = (num2 - 3)
console.log(num2);

// *=
num2 *=  5; //num2 = (num2 * 5)
console.log(num2); //outputs 35 because num2 was changed to 7 in the preceding expression

// %=
num2 %= 4; //num2 = num2 % 4 ==>gives a remaindeer of 3
console.log(num2);

// /=
num1 /= 2; // num1 = num1 / 2
console.log(num1);