// basic syntax is just like i do in java and c++ lang

class student{
    constructor(name){
        this.name = name;
    }

    print() {
        console.log(this.name);
    }
}

let student1 = new student('dullat');

student1.print();

//class expression 

let plr = class {
    print(value){
        console.log(value);
    }
};

new plr().print(45);

//making class dynamically

function makeClass(value){
    return class {
        print(){
            console.log(value);
        }
    }
}

let p = makeClass(50);
console.log(new p().print);
new p().print();

