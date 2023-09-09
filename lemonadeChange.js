var lemonadeChange = function (bills) {
       let fives=0; let tens=0;
        let n= bills.length;
        for (let i=0; i<n; i++){
            if (bills[i]==5){
                fives++;
            }
            if (bills[i]==10){
                tens++;
                if (fives==0){
                    return false
                };
                fives--;
            }
            if (bills[i]==20){
                if (tens>0 && fives>0){
                    tens--;
                    fives--;
                }
                else if (fives>=3){
                    fives-=3;
                }
                else return false;
            }
        }
        return true;
    };
console.log(lemonadeChange([5, 5, 5, 10, 20]));
