<template>
  <div>
      <v-main>
        <v-container class="vertical-center">
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-toolbar shaped dark>
                  <v-spacer/>
                  <v-toolbar-title class="flex text-center">
                    <h3>THE ULTIMATE TRANNING</h3>
                  </v-toolbar-title>
                  <v-spacer/>
                </v-toolbar>
              <h4>CREATE YOUR OWN ROUTINE</h4>
              <label class="object" style="text-align-last: justify;">Put yourself in change. Create custom workout routines that</label>
              <br>
              <label class="object2" style="text-align-last: justify;padding: 10px;">fit your goals, fitness level and lifestyle.</label></v-flex>
            <br>
              <div style="text-align-last: justify;"><h4>SIGN UP | LOG IN</h4></div>
          </v-layout>
        </v-container>
      </v-main>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
};

var imageWidth = '';
var imageHeight = '';


go();
window.addEventListener('resize', go);

function go(){
  imageWidth = document.documentElement.clientWidth;
  imageHeight = document.documentElement.clientHeight;
}

const numItemsToGenerate = 1; //how many gallery items you want on the screen
const numImagesAvailable = 242; //how many total images are in the collection you are pulling from
const collectionID = 8518442; //the collection ID from the original url
const galleryContainer = document.querySelector('body');

function renderGalleryItem(randomNumber){
  fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
      // eslint-disable-next-line no-unused-vars
      .then((response)=> {
        galleryContainer.style= 'background-image: url('+response.url+')';
      })
}

for(let i=0;i<numItemsToGenerate;i++){
  let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
  window.setInterval(function () {
    renderGalleryItem(randomImageIndex);
  }, 3000);
}
</script>
<style>
h3{
  font-family: Montserrat,Helvetica,Arial,sans-serif;
  font-weight: 600;
  letter-spacing: .05rem;
  line-height: 3.8rem;
  text-align: center;
  color: whitesmoke;
}
h4{
  font-family: Montserrat,Helvetica,Arial,sans-serif;
  font-weight: 600;
  letter-spacing: .05rem;
  line-height: 3.8rem;
  text-align: center;
  color: whitesmoke;
  margin-top: 100px;
}
.object{
  font-family: Roboto,Helvetica,Arial,sans-serif;
  margin-bottom: 25px;
  margin-top: 0;
  color: whitesmoke;
  font-size: 13px;
}
.object2{
  font-family: Roboto,Helvetica,Arial,sans-serif;
  margin-bottom: 25px;
  margin-top: 0;
  color: whitesmoke;
  font-size: 13px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.v-main__wrap{
  top: 275px!important;
}
.theme--dark.v-toolbar.v-sheet {
  background-color: #272727a1;
}
.theme--white.v-toolbar.v-sheet {
  background-color: #272727a1;
}
.container.fill-height > .layout{
  height: 60%
}

/* For Desktop View */
@media screen and (min-width: 1024px) {
  .vertical-center {
    position:fixed;
    top: 50%;
    left: 67%;
    transform:translate(-35%, -50%);
  }
  .object {
    padding: 120px;
  }
}

/* For Tablet View */
@media screen and (min-device-width: 768px)
and (max-device-width: 1024px) {
  .vertical-center {
    position:fixed;
    left:51%;
    top:51%;
    transform:translate(-51%, -51%);
  }
}

/* For Mobile Portrait View */
@media screen and (max-device-width: 480px)
and (orientation: portrait) {
  .vertical-center {
    position:fixed;
    left:51%;
    top:51%;
    transform:translate(-51%, -51%);
  }
}

/* For Mobile Landscape View */
@media screen and (max-device-width: 640px)
and (orientation: landscape) {
  .vertical-center {
    position:fixed;
    left:51%;
    top:51%;
    transform:translate(-51%, -51%);
  }
}

/* For Mobile Phones Portrait or Landscape View */
@media screen and (max-device-width: 640px) {
  .vertical-center {
    position:fixed;
    left:51%;
    top:51%;
    transform:translate(-51%, -51%);
  }
}

/* For iPhone 4 Portrait or Landscape View */
@media screen and (min-device-width: 320px)
and (-webkit-min-device-pixel-ratio: 2) {
  .vertical-center {
    position:fixed;
    left:51%;
    top:51%;
    transform:translate(-51%, -51%);
  }
}

/* For iPhone 5 Portrait or Landscape View */
@media (device-height: 568px) and (device-width: 320px)
and (-webkit-min-device-pixel-ratio: 2) {
  .vertical-center {
    position:fixed;
    left:51%;
    top:51%;
    transform:translate(-51%, -51%);
  }
}

/* For iPhone 6 and 6 plus Portrait or Landscape View */
@media (min-device-height: 667px) and (min-device-width: 375px)
and (-webkit-min-device-pixel-ratio: 3) {
  .vertical-center {
    position:fixed;
    left:51%;
    top:51%;
    transform:translate(-51%, -51%);
  }
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 10px;

}

</style>


