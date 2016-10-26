module.exports = (string) => {
  let m = /\bx=(\d+)\b/.exec(string)
  return m ? m[1] : null
}
