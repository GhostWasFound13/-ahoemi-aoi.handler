const { Handler } = require("./src/handler.js");

console.log('\033[36mInitializing Aoi.Handler\u001b[0m');

setTimeout(() => {
  console.log("Initialized all the handlers")
}, 1500)

module.exports = {
  Handler
}