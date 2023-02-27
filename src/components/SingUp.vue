<template>
  <h1>Sing Up Here!</h1>
  <form v-on:submit.prevent="signUp">
    <input type="text"  placeholder="Enter Username" v-model="username">
    <input type="email"  placeholder="Enter Email" v-model="email">
    <input type="password"  placeholder="Enter Password" v-model="password">
    <button>Sign Up</button>

  </form>
</template>

<script>
import { ref } from 'vue'
export default {
setup(){
  let username = ref('')
  let email = ref('')
  let password = ref('')

  let signUp = () => {
    console.log(username.value)
    console.log(email.value)
    console.log(password.value)
  }

  return {
    username,
    email,
    password,
    signUp
  }
}
}
</script>

<style>

</style>