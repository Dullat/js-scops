class user{
    #id;
    name = "";
    constructor(name){
        this.name = name;
        this.#id = Math.floor(Math.random() * 1200);
    }

    getDetails() {
        console.log({name: this.name, id: this.#id});
    }
}

let user1 = new user("dullat");
user1.getDetails();

//node protected&private.js <-- does not gonna work in node coz of &
//so use: node 'protected&private.js'

//you already know private protected. same as java