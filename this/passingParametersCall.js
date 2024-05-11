function talk(lang, boo) {
  if (lang === "en") {
    return `its eng ${this.name} and its ${boo}`
  }
}

const obj = {
  name: "jas",
}

console.log(talk.call(obj, "en", true))
// console.log(talk.apply(obj, "en", true)) // cant do in this way

console.log(talk.apply(obj, ["en", true]))
