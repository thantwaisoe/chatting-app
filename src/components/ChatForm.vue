<template>
    <textarea @keypress.enter="handleSubmitMessage" v-model="message"
        placeholder="Write messages and Hit Enter to Send "></textarea>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/service/getUser'
import {timestamp} from '../firebase/config'
export default {
    setup() {
        let message = ref('')
        let {user} = getUser()
        let handleSubmitMessage = () => {
            let chat = {
                message: message.value,
                senderName: user.value.displayName,
                created_at: timestamp
            }
            message.value=''
            console.log(chat)
        }
        return {
            message,
            handleSubmitMessage
        }
    }

}
</script>

<style></style>