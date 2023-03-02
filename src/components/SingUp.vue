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
import {auth,createUserWithEmailAndPassword} from '../firebase/config'
export default {
setup(){
  let username = ref('')
  let email = ref('')
  let password = ref('')
  let error = ref(null)

  let signUp = async() => {
    try {
      const res = await createUserWithEmailAndPassword(auth,email.value, password.value)
      if(!res) throw new Error('Could not create user')
      console.log(res.user)
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
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