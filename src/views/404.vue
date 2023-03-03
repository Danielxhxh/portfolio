<script setup>
import { ref, onMounted } from "vue";

let container = ref(null);

onMounted(() => {
  container.value.animate(
    { opacity: `1` },
    { duration: 1000, fill: "forwards" }
  );
});
</script>

<template>
  <div class="container" ref="container">
    <h2 @click="$router.push('/')">Back to home</h2>
  </div>
</template>

<style scoped>
.container {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

h2 {
  cursor: pointer;
}
</style>
