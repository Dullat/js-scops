function getWeather(bool) {
  return new Promise(function (resolve, reject) {
    if (bool === true) {
      resolve("true: 🍕 is ready")
    } else reject("false: 🍕 is not ready")
  })
}

const promise = getWeather(true)
promise.then(
  (data) => console.log(data),
  (error) => console.log(error) // handling rejction
)
// console.log(promise)
// it saves from callback hell

// You need to handle the rejected state as well, either by chaining a .catch() method or by adding a second function to .then() to handle the rejection.
