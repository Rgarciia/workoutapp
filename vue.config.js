const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    //themeColor: process.env.VUE_APP_THEME_COLOR,
    //themeColor: "#000000",
  }
})
