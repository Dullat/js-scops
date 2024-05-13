function getWeather(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === true) {
        resolve("true")
      } else reject("ERROR: 404")
    })
  })
}

function logData(data) {
  console.log(data)
}

function onError(data) {
  console.log(data)
}

getWeather(false).then(logData).catch(onError)

// explained in last prog
