<template>
  <h1>Login</h1>
  <form v-on:submit.prevent="LoginUser">
    <input type="email" placeholder="Enter Email" v-model="email">
    <input type="password" placeholder="Enter Password" v-model="password">
    <div class="error" v-if="error">{{ error }}</div>
    <button>Login</button>

  </form>
</template>
  
<script>
import { ref } from 'vue'
import {login, error} from '../service/login'
export default {
  setup() {
    let email = ref('')
    let password = ref('')

    let LoginUser = async () => {
      let res = await login(email.value, password.value)
     if(res){
      console.log(res)
     }
    }

    return {
      email,
      password,
      LoginUser,
      error
    }
  }
}
</script>
  
<style></style>