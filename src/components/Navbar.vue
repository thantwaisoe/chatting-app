<template>
    <nav>
        <div>
            <p>Hi Display Name</p>
            <p class="email">Login as Email</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
import { ref } from 'vue'
import {auth, signOut} from '../firebase/config'
export default {
    setup() {
        let error = ref(null)
        const logout = async () => {
            try {
                await signOut(auth)
                console.log('Log out success')
            } catch (err) {
                error.value = err.code
                console.log(err.code)
            }
        }
        return{
            logout
        }
    }
}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}

nav p.email {
    font-size: 14px;
    color: #999;
}
</style>