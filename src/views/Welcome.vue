<template>
  <div class="welcome container">
    <p>Welcome</p>
  </div>
</template>

<script>
import { db } from '../firebase/config';
export default {
setup(){
    console.log(db)
}
}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
</style>