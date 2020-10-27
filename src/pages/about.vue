<template>
  <q-page>
    <!-- content -->

    <div class="column q-pa-md q-pl-xl">
      <h5
        class="title-color calderdale-regular-font"
        style="font-size: 30px"
      >
        ABOUT ME
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
        Born in Belém, Brazil - 1999.
        <br>
        <br>
        I'm a Computer Engineer Student with passion in system development, current working as Mobile Developer using the hybrid development platform Flutter
        <br>
        Continuously looking for new projects to develop and participate in, learning from challenges and overcoming limits.
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
        <p class="arterio-font">FULLSTACK DEVELOPER</p>
        <div class="q-px-sm">
          <q-separator
            color="primary"
            style="width: 2px; height:20px"
            vertical
          ></q-separator>
        </div>
        <p class="arterio-font">PROGRAMMER</p>
        <div class="q-px-sm">
          <q-separator
            color="primary"
            style="width: 2px; height:20px"
            vertical
          ></q-separator>
        </div>
        <p class="arterio-font">COMPUTER ENGINEER</p>
      </div>

      <div class="row">
        <q-img
          :style="{cursor: 'pointer'}"
          @click="github()"
          class="rounded-borders"
          :ratio="1"
          width="30px"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />

        <q-separator
          vertical
          class="q-mx-xs"
        />

        <q-img
          :style="{cursor: 'pointer'}"
          @click="linkedin()"
          class="rounded-borders"
          :ratio="1"
          width="30px"
          src="https://img2.gratispng.com/20180529/str/kisspng-linkedin-computer-icons-logo-professional-network-social-networks-5b0d65b29ec943.2054111815276046586504.jpg"
        />

      </div>

      <p
        class="phitton-font title-color"
        style="font-size: 25px"
      > <strong> SKILLS </strong> </p>

      <!-- barras lineares -->

      <div class="column q-col-gutter-x-md">
        <div
          v-for="skill in skills"
          :key="skill.name"
        >

          <p
            class="arctic-font"
            style="font-size: 14px; height: 0px"
          >{{ skill.name }}</p>
          <div class="row items-center">
            <q-linear-progress
              size="10px"
              style="width: 30%"
              :value="skill.progress"
            ></q-linear-progress>

            <p
              class="self-end q-pl-sm arctic-font"
              style="font-size: 12px"
            >
              {{ skill.progress * 100}}%
            </p>
          </div>

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
      i: 0,
      skills: [
        {
          name: 'Flutter',
          progress: 0.0
        },
        {
          name: 'Python',
          progress: 0.0
        },
        {
          name: 'Flask',
          progress: 0.0
        },
        {
          name: 'Node.Js',
          progress: 0.0
        }
      ],
      skillsProgress: [
        0.79,
        0.83,
        0.77,
        0.64
      ],
      imgConfig: {
        width: (window.innerWidth * 0.47) + 'px',
        height: window.innerHeight + 'px'
      },
      show: true
    }
  },
  methods: {
    startBar () {
      console.log(window.scrollY)
      // if (window.scrollY > 75) {
      setTimeout(() => {
        for (this.i = 0; this.i < this.skillsProgress.length; this.i++) {
          this.skills[this.i].progress = this.skillsProgress[this.i]
        }
      }, 300)
      // }
    },
    ajustImage () {
      if (window.innerWidth < 800 && window.innerWidth > 400) {
        this.imgConfig.width = (window.innerWidth * 0.47) + 'px'
        this.imgConfig.height = window.innerHeight + 'px'
      } else if (window.innerHeight < 400) {
        this.show = false
        console.log(this.show)
      }
    },
    github () {
      window.location = 'https://github.com/FelipeCalderaro'
    },
    linkedin () {
      window.location = 'https://www.linkedin.com/in/felipe-calderaro-57531a153/'
    }

  },
  mounted () {
    // window.addEventListener('scroll', this.startBar)
    window.addEventListener('rezise', this.ajustImage)
    window.onload = this.startBar()
    if (window.innerWidth < 500) {
      this.show = false
    }
  }
}
</script>
