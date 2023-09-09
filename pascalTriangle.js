const generate=(numRows)=>{

    let rows=[];
    if(numRows==0){
        return rows; 
    }
    rows.push([1]);
    if (numRows===1){
        return rows;
    }
    rows.push([1,1]);
    if(numRows===2){
        return rows;
    }

    for(let r=2; r<numRows; r++){
        let prevRow=rows[r-1];
        let newRow=[];

        newRow.push(1);

        for(let j=0; j<prevRow.length-1; j++){
            newRow.push(prevRow[j]+prevRow[j+1]);

        }
        newRow.push(1);
        rows.push(newRow);

    }

    return rows;
  
}

console.log(generate(5))