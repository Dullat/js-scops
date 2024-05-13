function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(`sunny`)
    }, 2000)
  })
}

function setWeatherIcon(weather) {
  return new Promise(function (resolve, reject) {
    switch (weather) {
      case "sunny":
        resolve("☀️")
        break
      case "cloudy":
        resolve("☀️")
        break
      case "sunny":
        resolve("☀️")
        break
      default:
        reject("👾")
    }
  })
}

function onSucess(data) {
  console.log(`sucess ${data}`)
}

function onError(data) {
  console.log(`error ${data}`)
}

getWeather().then(setWeatherIcon).then(onSucess, onError) // chained
// you dont need to send any data the frist return is automatically send to next. setweatherIcon('no need')

// ## if an error is caught in then function it doest not stop the chain means all the other function will be executed, so to deal with it use catch block CHECK promisCatch.js
