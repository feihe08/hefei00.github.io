export function log(str) {
  let date = new Date()
  console.log(date.toGMTString() + str)
}
