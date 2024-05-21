function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done")
    }, 8000)
  })
}

async function start() {
  let countdown = 10 // initial countdown
  const interval = setInterval(() => {
    console.log(`Countdown: ${countdown}`)
    countdown--
    if (countdown < 0) {
      clearInterval(interval)
    }
  }, 1000)

  let result = await getData() // wait till promise resolves
  clearInterval(interval) // stop the countdown
  console.log(result)
  console.log("ji") // it also gonna take 8s coz await stops the execution of whole fun
}

start()
console.log("ji")

// https://youtu.be/spvYqO_Kp9Q?si=ri9NI7QAB8vQl__8
