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


// define property

let player = {
    name: "idk",
    lvl: "10",
}

Object.defineProperty(player, "status", {
    get(){
        return `Name = ${this.name} and lvl = ${this.lvl}`;
    }
});

console.log(Object.getPrototypeOf(player));

console.log(player.status);

//another example

const obj = {
  name: "harman",
  get nameIt() {
    console.log(this.name)
  },
  set nameItD(value) {
    if (typeof value !== "string") {
      throw new Error("type must be string")
    } else this.name = value
  },
}

let me = new obj(123)


//studied at https://javascript.info/property-accessors
