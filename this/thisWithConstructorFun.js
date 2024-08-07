function Person(n) {
  this.name = n
  setTimeout(
    function () {
      //it does not gonna work coz set time out is being executed in a diff
      // execution , so you need to bind object with it by using .bind
      console.log(this)
    }.bind(this),
    1000
  )
}

const p1 = new Person("jas")

// or you can use arrow function to resolve this problem

function Person2(n) {
  this.name = n
  setTimeout(() => {
    console.log(this)
  }, 2000) // Arrow functions do not create their own execution context for the this keyword. Instead, they inherit the this value from the enclosing lexical context where they are defined. This behavior is sometimes referred to as lexical scoping or lexical this binding.
}

const p2 = new Person2("hahah")
