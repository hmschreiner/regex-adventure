const marked = require('marked')

module.exports = function (string) {
  let md = marked(string)
  return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
}
