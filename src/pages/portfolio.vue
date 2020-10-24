<template>
  <q-page padding>
    <!-- content -->
    <div
      class="row row-wrap"
      style="display:flex; flex-wrap: wrap"
    >
      <div
        class="col-6 q-pa-xs"
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

    </div>
    <!-- <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="text-subtitle2 absolute-top text-center arctic-font">
          Teste
        </div>
      </q-img>
    </q-card> -->

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
          text: `Em 2019 obtive durante o tempo em que eu estava buscando projetos para realizar
                e a primorar meus conhecimentos sobre programação mobile, me deparei com o projeto AnimeNew
                que me despertou interesse tanto em seu conteudo como também uma ótima forma de praticar
                diversas implementações com a aplicação. Então entrei em contato, assim iniciei o desenvolvimento
                do aplicativo.`,
          imgUrl: require('../assets/AnimeNew.png')
        },
        {
          title: 'Rádio Ynterativa FM',
          text: `No começo de 2020 logo após a parceria com o AnimeNew obtive contato com a empresa Total Métrica - Inteligencia Comercial Aplicada, 
          onde desenvolvi o aplicativo para a Rádio Ynterativa`,
          imgUrl: require('../assets/YnterativaFM.png')
        },
        {
          title: 'Little Light In The Dark ',
          text: 'Uma modelagem simples da qual tive a ideia em um caminhar pela noite',
          imgUrl: require('../assets/white-light.jpg')
        },
        {
          title: 'Mirror Force',
          text: 'A muito tempo, me lembro desta carta de um jogo que tem origem Japonesa chamado Yu-Gi-Oh! criado pela Konami',
          imgUrl: require('../assets/Yugih.jpg')
        }
      ]
    }
  }
}
</script>
