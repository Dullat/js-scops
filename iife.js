// immediately invoke function expression
// it prevent global polution, executed immediately also allow us to wrap functions, provide clean code

(function print(){
  console.log("h");
})();

(() => {
  console.log("arow")
})()