<template>
  <h1>Sing Up Here!</h1>
  <form v-on:submit.prevent="signUp">
    <input type="text"  placeholder="Enter Username" v-model="username">
    <input type="email"  placeholder="Enter Email" v-model="email">
    <input type="password"  placeholder="Enter Password" v-model="password">
    <div class="error" v-if="error">{{ error }}</div>
    <button>Sign Up</button>

  </form>
</template>

<script>
import { ref } from 'vue'
import {createAccount, error} from '../service/signUp'
export default {
setup(props, context){
  let username = ref('')
  let email = ref('')
  let password = ref('')


  let signUp = async() => {
   let res =  await createAccount(email.value, password.value, username.value)
  if(res) {
    context.emit('enterChatRoom')
  }
  }

  return {
    username,
    email,
    password,
    signUp,
    error
  }
}
}
</script>

<style>

</style>