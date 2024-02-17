// simple example 
// function along with its scop
function outer(outerVar){
  let name = 'hi';
  return function (innerVar) {
    console.log(outerVar);
    console.log(innerVar);
    console.log(name);
  };
}

let exec = outer(3);
exec(56);

// 3 lvl example
function outer2(){
  let y = 300;
  return function(){
    let x = 200;
    return function(){
      console.log(x, y);
    };
  };
}

let exec2 = outer2();
let exec3 = exec2();
// outer2 and exec2 are gone but most inner return or exec3 still remember lex scop
exec3();