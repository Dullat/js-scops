fetch("https://api.weatherapi.com/v1/current.json?key=key&q=london")
  .then(function (response) {
    return response.json()
  })
  .then((data) => {
    console.log(data.current.temp_c)
  })
  .catch((error) => {
    console.error("Error fetching data:", error)
  })
