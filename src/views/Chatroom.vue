<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <ChatForm />
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import ChatForm from '../components/ChatForm'
import getUser from '@/service/getUser'
import { useRouter } from 'vue-router'
export default {
  components: {
    ChatWindow, Navbar, ChatForm },
  setup(){
    let {user} = getUser()
    let router = useRouter()
    console.log(user.value)
    watch(user, () => {
      if(!user.value){
        router.push({name: 'Welcome'})
      }
    })
  }

}
</script>

<style scoped>

</style>