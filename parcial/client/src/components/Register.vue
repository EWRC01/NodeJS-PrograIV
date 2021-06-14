<template>
    
<section class="src-components-registro container">
    <h1>Registrate, para iniciar sesion</h1>
    <hr>
    <b-card-group deck class="p-3 mb-4">
      <b-card bg-variant="light">
        <b-form>
          <b-form-group label="Correo Electronico:" description="Ingrese su correo electronico">
            <b-form-input v-model="email" type="email" placeholder="edwin1026@hotmail.com" required></b-form-input>
            </b-form-group>
          
          
          <b-form-group label="Contraseña:" description="Ingrese su Contraseña">
            <b-form-input v-model="pass" type="password" placeholder="******" required></b-form-input>
            </b-form-group>
            <b-button variant="primary" @click="register()">Registrarse</b-button>
            <b-button variant="info" type="reset">Limpiar</b-button>
          </b-form>
           <b-form-group label="Ya estas registrado?">
            <router-link to="login">Inicia Sesion</router-link>
            </b-form-group>
        </b-card>
      </b-card-group>
  </section>
</template>


<script>
import firebase from 'firebase'
export default {
    props: [],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      register() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.pass)
            .then(() => this.$router.replace('/login'))
            .catch((error) => {
              alert(error.message)
              // ..
            });
      }
    },
    computed: {
    }
}


</script>