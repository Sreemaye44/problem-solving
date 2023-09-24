let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
//property access of a string
let char= text.charAt(0);
let char1=text[0];
  text[0] = "A";    // Gives no error, but does not work

 


let text1 = "Apple, Banana, Kiwi";

 //A string can be converted to an array with the split() method:
let splitByComma = text1.split(","); //["Apple", " Banana", " Kiwi"];
// let spliteEvery = text1.split(""); //[
//   'A', 'p', 'p', 'l', 'e',
//   ',', ' ', 'B', 'a', 'n',
//   'a', 'n', 'a', ',', ' ',
//   'K', 'i', 'w', 'i'
// ]

let partz = text1.slice(7, 13);    //output : Banana
let part2 = text1.slice(7);   //output : Banana, Kiwi
let part3 = text1.slice(-12);   //output : Banana, Kiwi
let part4 = text1.slice(-12, -6);   //output : Banana

//substring() is similar to slice().
//difference is that start and end values less than 0 are treated as 0 in substring().
let part5 = text1.substring(7, 13);  //output: Banana

//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
let partss = text1.substr(7, 6); //output: Banana
let parta = text1.substr(-4); //output: Kiwi

let newText = text1.replace("Apple", "Mango");
let newText1 = text1.replace(/apple/i, "Mango"); // regular expression i flag(insensitive)
let newText2 = text1.replace(/a/gi, "o"); // regular expression g flag(all occurance replace)
let newText3 = text1.toUpperCase(); // APPLE, BANANA, KIWI

let newConcat= text.concat(" ",text1)
let cutWhiteSpace = text.trim(); 
  //cut whitespace from both side of string trimStart(), trimEnd()





