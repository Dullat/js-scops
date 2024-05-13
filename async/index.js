let pizza
function orderPizza(callback) {
  setTimeout(() => {
    pizza = "🍕"
    callback() // this reffers to pizzaReady
  })
}

function pizzaReady() {
  console.log(`pizza is ready, ${pizza}`)
}
orderPizza(pizzaReady)
console.log("done")
