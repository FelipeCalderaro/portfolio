<template>
  <q-page>
    <!-- content -->

    <div class="column q-pa-md q-pl-xl">
      <h5
        class="title-color calderdale-regular-font"
        style="font-size: 30px"
      >
        SOBRE MIM
      </h5>
      <q-separator
        class="col"
        color="primary"
        style="height: 3px; width: 50%"
      />
      <!-- <p
        class="phitton-font"
        style="font-size: 20px"
      ><strong>SOBRE MIM</strong></p> -->

      <p
        class="arctic-font"
        style="width: 40%; text-align: justify"
      >
        Nascido em Belém, Brasil - 1999.
        <br>
        <br>
        Trabalho como desenvolvedor mobile utilizando o Framework Flutter e backend com Python, atualmente estudo
        Engenharia de Computação no Centro Universitário do Estado do Pará - CESUPA.
        <br>
        Continuamente procurando por novos projetos para criar e participar assim aprendendo com os desafios que aparecem.
      </p>

      <div class="q-py-md">
        <q-separator
          class="col"
          color="primary"
          style="height: 3px; width:50%"
        />
      </div>

      <q-avatar
        class="col q-pa-md"
        size="100px"
        style="height: 140px, width; 30px"
      >
        <q-img
          :src="require('../assets/perfil/Foto.jpg')"
          cover
        ></q-img>
      </q-avatar>

      <p
        class="arctic-font"
        style="font-size: 23px"
      >Felipe Calderaro</p>

      <div class="row">
        <p class="arterio-font">DESENVOLVEDOR FULLSTACK</p>
        <div class="q-px-sm">
          <q-separator
            color="primary"
            style="width: 2px; height:20px"
            vertical
          ></q-separator>
        </div>
        <p class="arterio-font">PROGRAMADOR</p>
        <div class="q-px-sm">
          <q-separator
            color="primary"
            style="width: 2px; height:20px"
            vertical
          ></q-separator>
        </div>
        <p class="arterio-font">ENGENHEIRO DE COMPUTAÇÃO</p>
      </div>

      <p
        class="phitton-font title-color"
        style="font-size: 25px"
      > <strong> SKILLS </strong> </p>

      <!-- barras lineares -->

      <div class="column q-col-gutter-x-md">
        <p
          class="arctic-font"
          style="font-size: 14px; height: 0px"
        >Flutter</p>
        <div class="row items-center">
          <q-linear-progress
            size="15px"
            style="width: 30%"
            :value="progressBar1"
          ></q-linear-progress>

          <p
            class="self-end q-pl-sm arctic-font"
            style="font-size: 12px"
          >
            {{ progressBar1 * 100}}%
          </p>
        </div>

        <p
          class="arctic-font"
          style="font-size: 14px; height: 0px"
        >Python</p>
        <div class="row items-center">
          <q-linear-progress
            size="15px"
            style="width: 30%"
            :value="progressBar2"
          ></q-linear-progress>

          <p
            class="self-end q-pl-sm arctic-font"
            style="font-size: 12px"
          >
            {{ progressBar2 * 100}}%
          </p>
        </div>

        <p
          class="arctic-font"
          style="font-size: 14px; height: 0px"
        >Web</p>
        <div class="row items-center">
          <q-linear-progress
            size="15px"
            style="width: 30%"
            :value="progressBar3"
          ></q-linear-progress>

          <p
            class="self-end q-pl-sm arctic-font"
            style="font-size: 12px"
          >
            {{ progressBar3 * 100}}%
          </p>
        </div>
      </div>
      <!-- fim barras lineares -->

    </div>
    <template v-if="show  === true">
      <q-page-sticky
        position="right"
        :offset="[16,0]"
      >
        <q-img
          src="../assets/white-light.jpg"
          v-bind:style="imgConfig"
        ></q-img>
      </q-page-sticky>
    </template>
    <template v-else></template>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  meta: {
    title: 'About Me',
    titleTemplate: title => '{0} - Calderaro'.replace('{0}', title)
  },
  data () {
    return {
      progressBar1: 0.0,
      progressBar2: 0.0,
      progressBar3: 0.0,
      imgConfig: {
        width: (window.innerWidth * 0.47) + 'px',
        height: window.innerHeight + 'px'
      },
      show: true
    }
  },
  methods: {
    startBar () {
      if (window.scrollY > 130) {
        this.progressBar1 = 0.79
        this.progressBar2 = 0.83
        this.progressBar3 = 0.66
      }
    },
    ajustImage () {
      console.log('aquiiiii')
      if (window.innerWidth < 800 && window.innerWidth > 400) {
        console.log('aqui')
        this.imgConfig.width = (window.innerWidth * 0.47) + 'px'
        this.imgConfig.height = window.innerHeight + 'px'
      } else if (window.innerHeight < 400) {
        console.log('change state of img')
        this.show = false
        console.log(this.show)
      }
    }

  },
  mounted () {
    window.addEventListener('scroll', this.startBar)
    window.addEventListener('rezise', this.ajustImage)
    if (window.innerWidth < 500) {
      this.show = false
    }
  }
}
</script>
