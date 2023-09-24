let text = "Please locate where 'locate' occurs!";
//The indexOf() method returns the index (position) the first occurrence of a string in a string:
let indexFirst = text.indexOf("locate"); //7
let indexLast = text.lastIndexOf("locate"); // 21
let indexNone = text.lastIndexOf("John"); // -1

text.search("locate");  //7
text.search(/locate/);
//The match() method returns 
//an array containing the results of matching a string 
//against a string (or a regular expression).
let mat=text.match('ere');
console.log("🚀 ~ file: stringSearch.js:11 ~ mat:", mat)
