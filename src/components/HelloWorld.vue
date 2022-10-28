<body style="background-repeat: no-repeat;">
<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-toolbar dark color="transparent">
              <v-spacer />
              <v-toolbar-title class="white--text"><label
                  style="background: border-box;
                      font-size: x-large;
                      font-family: fantasy;"
              >THE ULTIMATE TRANNING</label></v-toolbar-title>
              <v-spacer />
            </v-toolbar>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
</body>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
};

let clientID = "NsaE17tzMJR0ydKo1eU7QvcTAL1CnxU3hA3g291_FIU";
let page = Math.floor(Math.random() * 10)
let endpoint = 'https://api.unsplash.com/search/photos?page=' + page + '&query=workout&client_id=' + clientID;
var element = document.querySelector("body");

fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      //console.log(jsonData.results[page].urls.raw);
      element.background = jsonData.results[page].urls.raw + "&w=965&dpr=2";
      window.setInterval(function () {
        let page2 = Math.floor(Math.random() * 10)
        element.background = jsonData.results[page2].urls.raw + "&w=965&dpr=2";
      }, 10000);
    })
</script>


