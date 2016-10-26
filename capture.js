module.exports = string => {
  let m = /x=(\d+)/.exec(string)
  return m ? m[1] : null
}
