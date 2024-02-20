console.log("runing");

let user = {
    name: "dullat",
    sName: "jatt",
    get fullName() {
        return `${this.name} ${this.sName}`;
    },
    set fullName(value){
        [this.name, this.sName] = value.split(" ");
    }
}

//we can insert some logic in set and set , like error checking etc

console.log(user.fullName);

user.fullName = "alice dullat";

console.log(user.fullName);

console.log(user.name);