/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let newCount = init
    function increment() {
        return ++newCount;
    }
    function decrement() {
        return --newCount;
    }
      function reset() {
      return (newCount = init);
  }
    return { increment, decrement, reset};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */