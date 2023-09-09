function validParenthesis(s){
     const str=s.split('');
     let stack=[];
     for(z of str){
        if(z==='(' || z==='{' || z==='['){
            stack.push(z);
        }
        else{
        let top=stack[stack.length-1];
        if((z===')' && top=== '(' )|| (z==='}' && top=== '{' )|| (z===']' && top=== '[' )){

           stack.pop(); 
        }
        else
            return false;
        
    }
      //console.log(i);
     }

  return stack.length === 0; 
}

const s='()';
console.log(validParenthesis(s));