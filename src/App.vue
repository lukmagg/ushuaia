<script setup>
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="container">
    <Sidebar />
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: start;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
