<template>
  <div>
    <v-main>
      <v-container class="vertical-center">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-toolbar shaped dark>
              <v-spacer />
              <v-toolbar-title class="flex text-center">
                <h3>THE ULTIMATE TRANNING</h3>
              </v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <h4>CREATE YOUR OWN ROUTINE</h4>
            <label class="object">Put yourself in change. Create custom workout routines that</label>
            <label class="object2">fit your goals, fitness level and lifestyle.</label>
            <label class="object3" id="app"><router-link class="titulo" to="/signup" tag="button">SIGN UP</router-link>
              <p class="titulo">&nbsp;&nbsp;|&nbsp;&nbsp;</p><button class="titulo" v-on:click="log().in()"> LOG IN</button>
            </label>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  /*methods: {
    sign: function () {
      return {
        up: function () {
          alert('SING UP');
        }
      };
    },
    log: function () {
      return {
        in: function () {
          alert('LOG IN');
        }
      };
    }
  }*/
};

var imageWidth = '';
var imageHeight = '';

go();
window.addEventListener('resize', go);

function go() {
  imageWidth = document.documentElement.clientWidth;
  imageHeight = document.documentElement.clientHeight;
  console.log(imageHeight + ' ' + imageWidth);
}

const numItemsToGenerate = 1; //how many gallery items you want on the screen
const numImagesAvailable = 242; //how many total images are in the collection you are pulling from
const collectionID = 8518442; //the collection ID from the original url
const galleryContainer = document.querySelector('body');

function renderGalleryItem(randomNumber) {
  fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
    // eslint-disable-next-line no-unused-vars
    .then((response) => {
      galleryContainer.style = 'background-image: url(' + response.url + ')';
    })
}

for (let i = 0; i < numItemsToGenerate; i++) {
  let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
  window.setInterval(function () {
    renderGalleryItem(randomImageIndex);
  }, 3000);
}

</script>




