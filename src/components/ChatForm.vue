<template>
    <textarea @keypress.enter="handleSubmitMessage" v-model="message"
        placeholder="Write messages and Hit Enter to Send "></textarea>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/service/getUser'
import { timestamp } from '../firebase/config'
import useCollection from '@/service/addDoc'
export default {
    setup() {
        let message = ref('')
        const {error, addData} = useCollection()
        let { user } = getUser()
        let handleSubmitMessage = async() => {
            let chat = {
                message: message.value,
                senderName: user.value.displayName,
                created_at: timestamp
            }
             await addData('messages',chat)
            
            message.value = ''
        }
        return {
            message,
            handleSubmitMessage
        }
    }

}
</script>

<style>
form {
    margin: 10px
}
textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>