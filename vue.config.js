const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, '../dist'),
}

module.exports = defineConfig({
  transpileDependencies: true
})


