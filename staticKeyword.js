class mathUtil {
    static pi = 3.14;

    static universalValue(by) {
        console.log(`value of pi is ${this.pi}. ${by}`);
    }
}

console.log(mathUtil.pi);//no need to create object
mathUtil.universalValue("by by..");

let ex = new mathUtil();
console.log(ex.pi);//undefined



//static keyword define a Static var or fun. 
//a static var or fun is associated with class itself not with instances, 
//means only single copy is created ,
//to access it we dont need to create object or instance

class user {
    static userCount = 0;
    constructor(name) {
        console.log(`hi ${name}. your welcome`);
        user.userCount++;//user(class name) not this
    }
}

let user1 = new user("dullat");
let user2 = new user("jatt");

console.log(user.userCount);


//Static blocks

// class {
//     name;
//     static {                                 <--- static block
//         this.name = "ilhdkjshaflkjh";
//     }
// }