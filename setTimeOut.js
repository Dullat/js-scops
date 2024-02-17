function print(){
  for(var i = 0; i < 5; i++){ // you will have to use let
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log('hh')
}

//print();

//with var 
function print2(){
  for(var i = 0; i < 5; i++){
    function clsr(x){
      setTimeout(function () {
        console.log(x);
      }, x*1000)
    }
    clsr(i);
  }
}

print2();