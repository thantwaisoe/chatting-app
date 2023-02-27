<template>
    <h1>Login</h1>
    <form v-on:submit.prevent="Login">
      <input type="email"  placeholder="Enter Email" v-model="email">
      <input type="password"  placeholder="Enter Password" v-model="password">
      <button>Login</button>
 
    </form>
  </template>
  
  <script>
  import { ref } from 'vue'
  export default {
  setup(){
    let email = ref('')
    let password = ref('')
  
    let Login = () => {
      console.log(email.value)
      console.log(password.value)
    }
  
    return {
      email,
      password,
      Login
    }
  }
  }
  </script>
  
  <style>
  
  </style>