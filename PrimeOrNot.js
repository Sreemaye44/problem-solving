
function countPrime(n){
  if(n<3){
    return 0;
  }
  let count=1;
    function PrimeOrNot(m){

        if(m<=1){
            return false;
        }
        else if(m<=3){
            return true;
        }
        else{
            for(let i=2; i*i<m; i++){
                if(m%i===0){
                    return false;
                }
            }
            return true;
        }
    
    }
    for(i=3; i<n; i++){

        if(PrimeOrNot(i)){
            count++;

        }
    
    }
    return count;
}

console.log(countPrime(10))