<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import getUser from '@/service/getUser'
import { useRouter } from 'vue-router'
export default {
  components: { Navbar },
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

<style>

</style>