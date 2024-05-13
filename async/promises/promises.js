function getWeather() {
  return new Promise(function (resolve, reject) {
    resolve("sunny")
    reject("rejcted")
  })
}

const promise = getWeather()
promise.then(
  function (data) {
    console.log(data)
  },
  function (data) {
    console.log(data)
  }
)
console.log(promise)
// it saves from callback hell
