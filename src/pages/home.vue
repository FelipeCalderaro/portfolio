<template>
  <q-page class="light-color">

    <div class="col">
      <q-img
        :src="url"
        class="center-img"
        spinner-color="#3f4747"
        ratio="16/9"
      />
    </div>

    <div class="hero-image">
      <div class="opacity-container"></div>
      <div class="hero-text">
        <div class="column items-center q-ma-xs">
          <h4
            class="bebas-font"
            style="height:45px;"
          >
            HELLO, I'M
            <br>
            FELIPE CALDERARO
          </h4>
          <p
            class="arctic-font"
            style="font-size: 13px"
          >
            <em>
              Between 0's and 1's a new world develops through the code
            </em>
          </p>
          <q-btn
            rounded
            label="My portfolio"
            :to="{name:'portfolio'}"
            class="bebas-font"
            style="background: #3f4747; color: #FFFFFF; font-size:14px; width: 100px"
          >
          </q-btn>
        </div>
      </div>
    </div>

    <!-- <div
      class="column items-center absolute"
      :style="{
        top: 0,
        left: 0,
        right: 0,
        bottom:0
      }"
    >
      <span style="font-size: 25px; color: #FFFFFF">
        <h2>
          OLÁ, EU SOU
          <br>
          FELIPE CALDERARO
        </h2>
      </span>
      <q-btn
        rounded
        label="Meu portfolio"
        style="background: #3f4747; color: #FFFFFF; font-size:12px"
      >

      </q-btn>
    </div> -->

  </q-page>
</template>

<script>
export default {
  meta: {
    title: 'Home',
    titleTemplate: title => '{0} - Calderaro'.replace('{0}', title)
  },
  data () {
    return {
      url: require('../assets/Yugih.jpg'),
      imageIndex: 0
    }
  },
  methods: {
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    changeImage () {
      var images = [
        require('../assets/Poste.png'),
        require('../assets/AnimeNew.png'),
        require('../assets/YnterativaFM.png'),
        require('../assets/sledgeHammer.png'),
        require('../assets/Yugih.jpg')
      ]
      if (this.imageIndex === images.length) {
        this.imageIndex = 0
      } else {
        this.imageIndex++
      }
      // var numb = this.getRandomInt(0, images.length)
      this.url = images[this.imageIndex]
    }
  },
  mounted: function () {
    setInterval(() => {
      this.changeImage()
    }, 3500)
  }
}
</script>
