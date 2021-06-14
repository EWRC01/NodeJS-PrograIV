<template lang="html">

  <section class="src-components-header">
      <div id="app">
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item v-bind:to="{path:'/'}">Home</b-nav-item>
          <b-nav-item v-bind:to="{path:'/about'}">Acerca de</b-nav-item>
           <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#" @click="profile">Perfil</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout">Cerrar Sesion</b-dropdown-item>
           </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    


  </section>

</template>

<script lang="js">
import firebase from 'firebase'
  export default  {
    name: 'src-components-header',
    props: [],
    mounted () {
    },
    data () {
      return {
        usuario: firebase.auth().currentUser.email
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(()=> this.$router.replace('/login'))
      },
      profile(){
        this.$router.replace('/profile')
      }
    },
    computed: {
    }
}
</script>

<style scoped lang="scss">
  .src-components-header {
  }
</style>