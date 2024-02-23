class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class teacher extends person {
    constructor(name,job, dep) {
        super(name);
        this.job = job;
        this.dep = dep;
    }

    sayHi(){
        console.log(this.name,this.job);
    }
}

let teacher1 = new teacher("dullat", "hod", "computer");

teacher1.sayHi();