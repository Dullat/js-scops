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

getWeather().then(setWeatherIcon).then(onSucess, onError)
