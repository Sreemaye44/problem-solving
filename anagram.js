const isAnagram=(str1, str2)=>{
    if(str1.length!==str2.length){
        return false;
    }

    let counter={};
    for(let letter of str1){
        counter[letter]=(counter[letter]||0)+1;
        console.log(counter)
    }
    for(let item of str2){
        if(!counter[item]){
            return false;
        }
        counter[item]-=1;
        console.log(counter)
    }
    return true;
}

const anagram=isAnagram('hello', 'llohe')
console.log(anagram);