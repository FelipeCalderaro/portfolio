<template>
  <q-page padding>
    <!-- content -->
    <!-- <div
      class="column"
      style="height: 300px; max-height: 100%"
    >
      <div
        class="col-9 q-pa-xs"
        v-for="card in cards"
        v-bind:key="card.title"
      >
        <q-card>

          <q-img :src="card.imgUrl">
            <div
              class="absolute-bottom text-left"
              style="background-color: rgba(0, 0, 0, 0.8)"
            >
              <h6 style="line-height:0.1px">
                <strong>
                  {{ card.title }}
                </strong>
              </h6>
              <p style="text-align:justify">
                {{ card.text }}
              </p>
            </div>
          </q-img>

        </q-card>
      </div>

    </div> -->
    <div
      class="column"
      style="height: 600px; max-height: 100%"
    >
      <div
        class="row q-my-sm"
        v-for="card in cards"
        :key="card.title"
      >

        <q-img
          class="rounded-borders"
          :src="card.imgUrl"
          width="400px"
          @mouseenter="card.show = true"
          @mouseleave="card.show = false"
        >
          <q-slide-transition>

            <div
              class="q-my-xs absolute-bottom text-center items-center justify-center rounded-borders"
              v-show="card.show"
            >
              <div class="column">

                <p style="font-size: 20px">{{ card.title }}</p>
                <p style="text-align: justify">{{ card.text }}</p>
              </div>
            </div>
          </q-slide-transition>

        </q-img>

      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  meta: {
    title: 'Portfolio',
    titleTemplate: title => '{0} - Calderaro'.replace('{0}', title)
  },
  data () {
    return {
      cards: [
        {
          title: 'AnimeNew - Notícias sobre Animes, Mangás, Games',
          text: 'A news application about animes, mangas',
          imgUrl: require('../assets/AnimeNew.png'),
          show: false
        },
        {
          title: 'Rádio Ynterativa FM',
          text: 'A radio and news application',
          imgUrl: require('../assets/YnterativaFM.png'),
          show: false
        },
        {
          title: 'Little Light In The Dark ',
          text: 'Uma modelagem simples da qual tive a ideia em um caminhar pela noite',
          imgUrl: require('../assets/white-light.jpg'),
          show: false
        },
        {
          title: 'Mirror Force',
          text: 'A muito tempo, me lembro desta carta de um jogo que tem origem Japonesa chamado Yu-Gi-Oh! criado pela Konami',
          imgUrl: require('../assets/Yugih.jpg'),
          show: false
        }
      ]
    }
  },
  methods: {
    array_split (array, splitSize) {
      var newArray = []
      if (array.length > 0 && array.length > splitSize) {
        var betweenNumbers = parseInt((array.length / splitSize).toFixed(0))
        var space = betweenNumbers
        for (var i = 0; i < splitSize; i++) {
          if (i === splitSize - 1) {
            newArray.push(array.slice(betweenNumbers, array.length))
          } else if (i === 0) {
            newArray.push(array.slice(0, betweenNumbers))
          } else {
            newArray.push(array.slice(betweenNumbers, betweenNumbers + space))
            betweenNumbers += space
          }
        }
        console.log(newArray)
        return newArray
      }
    },
    configureKeys (array) {
      var newArray = []
      array.forEach(element => {
        newArray.push({ key: Math.random(), theArray: element })
      })
      return newArray
    }

  },
  mounted () {
    // this.cards = this.configureKeys(this.array_split(this.cards, 2))

    console.log(this.cards)
  }
}
</script>
