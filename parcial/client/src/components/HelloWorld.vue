<template>
  <div class="hello">
    
     <h1>Inicio de sesion</h1>
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
            <b-button variant="outline-dark" @click="signIn()">Iniciar Sesion</b-button>
            <b-button variant="info" type="reset">Limpiar</b-button>
          </b-form>
          <b-form-group label="No estas registrado?">
            <router-link to="register">Registrate</router-link>
            </b-form-group>
        </b-card>
      </b-card-group>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from  'axios'
const client = axios.create({
  baseURL: 'http://localhost:3000',
  json: true
})
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   methods: {
    sendRequest() {
      if (firebase.auth().currentUser) {
        firebase.auth().currentUser.getIdToken(true)
        .then((idToken) => {
          client({
            method: 'get',
            url: '/',
            headers: {
              'AuthToken': idToken
            }
          }).then((res) => {
            this.response = res.data.message
          }).catch((error) => {
            this.response = error
          })
        }).catch((error) => {
          this.response = "Error getting auth token"
          this.response = error
        });
      } else {
        client({
          method: 'get',
          url: '/'
        }).then((res) => {
          this.response = res.data.message
        }).catch((error) => {
          this.response = error
        })
      }
    },
    signIn() {
      firebase.auth()
      .signInWithEmailAndPassword(this.email, this.pass)
      .then(()=>this.$router.replace('principal'))
      .catch((error)=> {
        alert(error.message)
      })
    }
  },
   data: function() {
    return{
      response: 'No data yet...',
      authStatus: 'No Auth Status'
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
