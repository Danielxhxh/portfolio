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
  <div class="container" ref="container"><h1>Work</h1></div>
</template>

<style scoped>
.container {
  opacity: 0;
}
</style>
