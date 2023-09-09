var findWords = function (words) {

    let newAr=[];
    let firstRow = "qwertyuiop";
    let secondRow = "asdfghjkl";
    let thirdRow = "zxcvbnm";

    for(let i=0; i<words.length; i++){
        LowerCaseWord=words[i].toLowerCase();
        let firstRowResult = words[i]==firstRow;
        console.log("🚀 ~ file: keyboardRow.js:11 ~ findWords ~ firstRowResult:", firstRowResult)
        let secondRowResult = words[i]==secondRow;
        console.log("🚀 ~ file: keyboardRow.js:13 ~ findWords ~ secondRowResult:", secondRowResult)
        let thirdRowResult = words[i]==thirdRow;
        console.log("🚀 ~ file: keyboardRow.js:15 ~ findWords ~ thirdRowResult:", thirdRowResult)

        if(firstRowResult===1 || secondRowResult===1 || thirdRowResult===1){
          newAr.push(words[i])
          console.log("🚀 ~ file: keyboardRow.js:16 ~ findWords ~ newAr:", newAr)
        }
        else{
            console.log("oh");
        }
    }
};
findWords(["Hello", "Alaska", "Dad", "Peace"]);