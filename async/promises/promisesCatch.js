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

// explained in last prog, catch invoked when error occuer in any function doesnt matter if its 1st fun or last

// finially is just used to clearup things , its executed at last it does not matter if it suceed or not
