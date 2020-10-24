<template>
  <q-page>
    <div class="col">
      <q-img
        :src="url"
        spinner-color="#3f4747"
        class="center-img-contact"
        ratio="16/9"
      />
    </div>
    <div
      class="column q-pa-md"
      style="max-width: 400px"
    >
      <h4
        class="text-color bebas-font"
        style="line-height: 0.1"
      >CONTATO</h4>
      <p class="text-color arctic-font">Me pergunte, ficare honrado em responder-lhe.</p>
      <p class="text-color dayrom-font">
        Email:
        <em class="bebas-font q-pr-lg">j.felipe.calderaro@gmail.com</em>
        Localização:
        <em class="bebas-font">Belém, Brasil</em>
      </p>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          style="width: 140%; color: black"
          input-style="color: primary"
          label-color="secondary"
          bg-color="primary"
          color="yellow"
          filled=""
          dark
          lazy-rules
          v-model="name"
          label="Seu nome *"
          hint="Nome e sobrenome"
          :rules="[ val => val && val.length > 0 || 'Campo não pode estar vazio.']"
        />

        <q-input
          style="width: 140%; color: black"
          input-style="color: primary"
          label-color="secondary"
          bg-color="primary"
          color="yellow"
          filled=""
          dark
          lazy-rules
          v-model="email"
          label="Seu email *"
          hint="Email comercial ou particular"
          type="email"
          :rules="[ val => val && val.length > 0 || 'Campo não pode estar vazio.']"
        />

        <q-input
          style="width: 140%; color: black"
          input-style="color: primary"
          label-color="secondary"
          bg-color="primary"
          color="yellow"
          filled=""
          dark
          lazy-rules
          v-model="text"
          label="Sua mensagem *"
          type="textarea"
          :rules="[ val => val && val.length > 0 || 'Campo não pode estar vazio.']"
        />

        <div>
          <q-btn
            label="Enviar"
            type="submit"
            color="primary"
          />
          <q-btn
            label="limpar"
            type="reset"
            color="white"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>

    <!-- Barra de loading -->
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="primary"
      size="10px"
      skip-hijack
    />
  </q-page>
</template>

<script>
import Axios from 'axios'
export default {
  // name: 'PageName',
  meta: {
    title: 'Contact',
    titleTemplate: title => '{0} - Calderaro'.replace('{0}', title)
  },
  data () {
    return {
      url: require('../assets/Poste.png'),
      name: null,
      email: null,
      text: null,

      accept: false

    }
  },
  methods: {

    onSubmit (event) {
      console.log('sending ... ')

      const bar = this.$refs.bar
      bar.start()
      Axios({
        method: 'post',
        url: 'https://felipecalderaroapis.herokuapp.com/portfolio',
        data: {
          name: this.name,
          email: this.email,
          text: this.text
        },
        headers: {
          'Content-Type': 'Application/json'
        }
      }).then((response) => {
        console.log(response.status)
        if (response.status === 200) {
          this.$refs.bar.stop()
          this.$q.notify({
            message: 'Mensagem enviada retornarei-a em breve, obrigado por entrar em contato.',
            color: 'primary',
            icon: 'check_circle'
          })
          event.target.reset()
        }
      })
    },

    onReset () {
      this.name = null
      this.email = null
      this.text = null
    },

    clearForm () {
      this.name = ''
      this.email = ''
      this.text = ''
    }
  }
}
</script>
