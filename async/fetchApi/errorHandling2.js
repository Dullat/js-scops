const url = "https://api.spotify.com/v1/artists/776Uo845nYHJpNaStv1Ds4"

function onError(message, error) {
  console.log(message, error)
}

const request = new Request(url, {
  headers: {
    Authorization: "Bearer 123",
  },
})

async function getData() {
  try {
    const response = await fetch(request)
    const data = await response.json()
    if (response.status === 200) {
      console.log("good")
    } else {
      onError("Server Error:", response.status)
      onError("Server Error:", data.error.message)
    }
  } catch (error) {
    onError("Error", error)
  }
}

getData()
