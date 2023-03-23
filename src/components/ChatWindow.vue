<template>
  <div class="chat-window">
    <div class="messages">
      <div class="single" v-for="message in formattedDate" :key="message.id">
        <span class="created-at"> {{ message.created_at ? message.created_at : ' ' }}</span>
        <span class="name">{{ message.senderName }}</span>
        <span class="message">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '@/firebase/config';
import { ref, computed } from 'vue';
import { formatDistanceToNow } from 'date-fns'
export default {
  setup() {
    let allMessaegs = ref([])
    let formattedDate = computed(() => {
      return allMessaegs.value.map((msg) => {
        return { ...msg, created_at: formatDistanceToNow(msg.created_at.toDate(), { includeSeconds: true, addSuffix: true }) }
      })
    })
    const dbRef = collection(db, 'messages')
    const q = query(dbRef, orderBy('created_at'))
    onSnapshot(q, data => {
      let result = []
      data.docs.forEach(eachRow => {
        let document = { ...eachRow.data(), id: eachRow.id }
        result.push(document)
      })
      allMessaegs.value = result
    })

    return {
      allMessaegs,
      formattedDate
    }
  }
}
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}

.single {
  margin: 12px 0;
}

.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}

.name {
  font-weight: bold;
  font-size: 20px;
  margin-right: 6px;
}

.messages {
  max-height: 400px;
  overflow: auto;
}</style>