console.log("kkk");
function outer() {
    let a = 10;

    return function() {
        console.log(a);
    }
}

let exec = outer();
exec();