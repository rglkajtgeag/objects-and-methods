// Question:1
// Write a program where you need to extract the middle part of the string and converted it to upperacse
let str1="hellothere",
midportion=str1.slice(0,5).toUpperCase();
console.log(midportion);

// Question:2
// Write a program that converts a string to uppercase and then calculates the length of the resulting string.
var str="thriveni";
var upper =str.toUpperCase();
var result =upper.length;
console.log(result);

// Question:3
// Write a program that retrieves the character at a specific position in a string, and then finds the ASCII value (character code) of that character.
 var str="thriveni";
 var char=str.charAt(1);
 var result=char.charCodeAt("h");
 console.log(result);

// Question:4
// Write a program that removes extra spaces from the start and end of a string, and then slices a portion of the string starting from the second character to the fourth character.
let a="  thriveni  ";
let exspace=a.trim();
let portion=exspace.slice(2,5);
console.log(portion);

// Question:5
// Write a program that concatenates two strings where the first string is in its original case and the second string is converted to lowercase before concatenation.
let one="lakkireddy";
let two="indureddy";
let lowstr=two.toLowerCase();
let concate=one.concat(" ",two);
console.log(concate);


// Question:6
// Write a program that removes leading spaces from a string, and then slices the string starting from the second character to the end.
var a="  headofminister";
var result=a.trimStart();
var startstr=result.slice(1,14);
console.log(startstr);

// Question:7
// Write a program that retrieves a specific character from a string and converts it to uppercase.
let str="amma";
let specific=str.charAt(3).toUpperCase();
console.log(specific);

// Question:8
// Write a program that removes trailing spaces from a string and then concatenates it with another string.
let a="javascript  ";
let b="css";
let space=a.trimEnd();
let result=space.concat(" ",b);
console.log(result);

// Question:9
// Write a program that:
// Trims extra spaces from the start and end of a string.
// Converts the trimmed string to uppercase.
// Extracts a substring from the second character to the fifth character from the uppercase string.
let a=" thriveni  ";
let spaces=a.trim().toUpperCase();
let substr=spaces.substring(1,6)
console.log(substr);

// Example Input:
// let input = "   HelloWorld   ";

// Question: 10
// Write a program that:
// Converts two strings to lowercase.
// Concatenates the two lowercase strings with a space in between.
// Retrieves the first character of the concatenated result.
// Example Input:
// javascript
// Copy code
let string1 = "HELLO";
let string2 = "WORLD";
let lowerstr=string1.concat(" ",string2).toLowerCase();
let firstchar=lowerstr.charAt(0);
console.log(firstchar);

