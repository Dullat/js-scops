// immediately invoke function expression
// it prevent global polution, executed immediately also allow us to wrap functions, provide clean code

(function print() {
  console.log("h");
})();

(() => {
  console.log("arow")
})()


(function (age) {
  console.log("Running the Anon function");
  return `Your are cool and ${age}`;
})(15);

//example1

let calculator = (function () {
  return function (a, b) {
    let add = () => a + b;
    let sub = () => a - b;
    let mul = () => a * b;
    let div = () => a / b;

    return { add, sub, mul, div }
  }
})();

console.log(calculator(12, 3).add());

//or

let calc1 = calculator(14, 12);
console.log(calc1.sub());

//example2

let calculator2 = (function () {
  let add = (a, b) => a + b;
  let sub = (a, b) => a - b;
  let mul = (a, b) => a * b;
  let div = (a, b) => a / b;

  return {add, sub, mul, div}
})();

let result = calculator2.add(12,15);

console.log(result);