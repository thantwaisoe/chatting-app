<template>
  <div class="welcome container">
    <div v-if="isShowLoginForm">
      <SingUp @enterChatRoom="enterChatRoom"></SingUp>
      
      <p>Already crated? <span @click="isShowLoginForm=!isShowLoginForm">Go to login</span></p>
    </div>
    <div v-else>
      <Login @enterChatRoom="enterChatRoom"></Login>
      <p>not a member? <span @click="isShowLoginForm=!isShowLoginForm">create account?</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Login from '../components/Login'
import SingUp from '../components/SingUp'
export default {
  components: {
    Login, SingUp 
  },
  setup(){
    let isShowLoginForm = ref(true)
    const router = useRouter()
    let enterChatRoom = () =>{
      router.push('/chatroom')
    }
    return {
      isShowLoginForm,
      enterChatRoom
    }
  }

}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
.welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>