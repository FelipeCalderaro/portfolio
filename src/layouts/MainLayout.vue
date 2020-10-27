<template>
  <q-layout
    class="light-color"
    style="height: 100%"
  >
    <q-header
      bordered
      class="light-color"
      style="height:110px"
    >
      <div
        class="column items-center q-pb-md"
        style="height:80px"
      >
        <div class="header-container"></div>
        <!-- <q-toolbar style="background: #3f4747; height:5px"></q-toolbar> -->
        <div class="col self-center">
          <p>
            <span
              style="font-size: 19px;"
              class="bebas-font title-color"
            >
              {{ title }}
            </span>
          </p>
        </div>
        <div class="col self-end">
          <div class="row justify-end q-pa-md">
            <div class="col-auto q-pr-sm">
              <q-btn
                outline
                style="color: #3f4747; font-size: 14px"
                label="Home"
                :to="{name:'home'}"
                size="sm"
                class="arterio-font"
              ></q-btn>
            </div>
            <div class="col-auto q-pr-sm">
              <q-btn
                outline
                style="color: #3f4747; font-size: 14px"
                label="ABOUT ME"
                size="sm"
                :to="{name:'about'}"
                class="arterio-font"
              ></q-btn>
            </div>
            <div class="col-auto q-pr-sm">
              <q-btn
                outline
                style="color: #3f4747; font-size: 14px"
                label="portfolio"
                size="sm"
                :to="{name:'portfolio'}"
                class="arterio-font"
              ></q-btn>
            </div>
            <div class="col-auto q-pr-sm">
              <q-btn
                style="background: #3f4747; color: #FFFFFF; font-size: 14px"
                label="CONTACT"
                :to="{name: 'contato'}"
                size="sm"
                class="arterio-font"
              ></q-btn>
            </div>
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      class="light-color"
      style="height: 70px"
      elevated
    >
      <div class="col q-pa-sm q-pt-lg">
        <h8 style="color: #3f4747; font-size:12px">
          <strong>
            © FELIPE CALDERARO {{ new Date().getFullYear() }} / ALL RIGHTS RESERVED.
          </strong>
        </h8>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'MainLayout',
  data () {
    return {
      title: 'CALDERARO'
    }
  },
  methods: {
    getConnection () {
      Axios.get('https://felipecalderaroapis.herokuapp.com/').then((response) => console.log(response))
    }
  },
  mounted: function () {
    this.getConnection()
  }
}
</script>
