console.log("kkk");
function outer(a) {
    return function(a) {
        console.log(a);
    };
}

let exec = outer();
exec();