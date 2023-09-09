var createCounter = function (init) {
    let mainValue=init;
  return {
    increment() {
     mainValue++;
     return mainValue;
    },
    decrement() {
        mainValue--;
      return mainValue;
    },
    reset(){
      mainValue=init;
       return mainValue;
    }
  };
};
const counter = createCounter(5);
console.log(counter.increment())
console.log(counter.reset());
console.log(counter.decrement());
