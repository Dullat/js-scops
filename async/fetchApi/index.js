function sucess(data) {
  console.log(data.json())
}
fetch(`https://http.cat/404`).then(sucess)
