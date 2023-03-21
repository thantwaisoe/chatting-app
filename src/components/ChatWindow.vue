<template>
  <div class="chat-window">
    <div class="messages">
        <div class="single">
            <span class="created-at"> 3 min ago</span>
            <span class="name">OO</span>
            <span class="message">Hello Test Messages</span>
        </div>
        <div class="single">
            <span class="created-at"> 3 min ago</span>
            <span class="name">OO</span>
            <span class="message">Hello Test Messages</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

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
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>