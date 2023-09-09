const checkUnique=(ar)=>{
    if(ar.length){
       let i=0;
       for(j=1; j<ar.length; j++){
        if(ar[i]!==ar[j]){
           i++;
           ar[i]=ar[j]
        }
       }
       return i+1;
    }
    else{
        throw new Error("Array is empty")
    }


}
const countingUniqueNumber=checkUnique([1,2,2,3,10,10,12])
console.log(countingUniqueNumber)