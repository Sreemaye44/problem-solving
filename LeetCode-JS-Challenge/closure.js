function counter() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
    return privateCounter;
  }

  return {
    increment() {
      return changeBy(2);
      
    },
    decrement() {
      return changeBy(-3);
      
    },
  };
};

console.log(counter().increment()); // 0.
console.log(counter().decrement()); // 0.
