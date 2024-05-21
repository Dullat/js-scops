function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("done")
      reject("Error-404")
    }, 3000)
  })
}

async function start() {
  try {
    let result = await getData()
    console.log(result)
  } catch (error) {
    console.log(`sorry : ${error}`)
  }
}

start()
