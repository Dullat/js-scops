function talk() {
  return this
}

const obj = {
  name: "jaja",
  talk,
}

const obj2 = {
  name: "jaja",
}

//console.log(obj.talk())

//const obj2Talk = talk.bind(obj2)

//console.log(obj2Talk()) //what if dont wanna create another function

// then use call

console.log(talk.call(obj2))

// guide video : https://youtu.be/fVXp7ZWjlO4?si=y0e_VMuPzwRIQl6v
