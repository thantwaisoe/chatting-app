<template>
    <nav v-if="user">
        <div>
            <p>Hi {{ user.displayName }}</p>
            <p class="email">Login as {{ user.email }}</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
import { ref } from 'vue'
import { userLogout } from '../service/logout.js'
import getUser from '../service/getUser.js'
export default {
    setup() {
        // TODO: MAKE REFACTORING WITH COMPOSABLE
        const { user } = getUser()
        const logout = async () => {
            await userLogout()
        }

        return {
            logout,
            user
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