const url = "https://api"

function onError(error) {
  console.log("Error", error)
}

async function getData() {
  try {
    const request = new Request(url, {
      headers: {
        Authorization: "Bearer 123",
      },
    })

    const response = await fetch(request) // data is not fetch but it still does not run catch coz connection was sucessfull , it doesnot matter if fetched data is correct or not
    const data = await response.json()
    console.log(response.ok, response.status) // used to varify if data is right or not
  } catch (error) {
    onError(error)
  }
}

getData()

// perameters
