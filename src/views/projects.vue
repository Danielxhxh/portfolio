<script setup>
import { ref, onMounted } from "vue";
import router from "../router";

import GoBack from "../components/GoBack.vue";

let container = ref(null);

onMounted(() => {
  container.value.animate(
    { opacity: `1` },
    { duration: 1000, fill: "forwards" }
  );
});

function goHome() {
  container.value.animate(
    { opacity: `0` },
    { duration: 1000, fill: "forwards" }
  ).onfinish = () => {
    // Call your function here
    router.push("/");
  };
}
</script>

<template>
  <div class="container" ref="container">
    <h1>Projects</h1>

    <GoBack @goHome="goHome()" />
  </div>
</template>

<style scoped>
.container {
  opacity: 0;
}
</style>
