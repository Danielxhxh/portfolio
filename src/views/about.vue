<script setup>
import { ref, onMounted } from "vue";
import router from "../router";

import Contacts from "../components/Contacts.vue";
import Skills from "../components/Skills.vue";
import Education from "../components/Education.vue";
import Experience from "../components/Experience.vue";
import Personal from "../components/Personal.vue";
import BigSpinner from "../components/BigSpinner.vue";
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
    <div class="left"><BigSpinner /></div>
    <div class="right">
      <h1>
        I am a passionate Full Stack Developer with a keen interest in
        technology and a strong desire to learn.
      </h1>

      <div class="divider"></div>
      <Skills />
      <div class="divider"></div>
      <Experience />
      <div class="divider"></div>
      <Education />
      <div class="divider"></div>
      <Personal />
      <div class="divider"></div>
      <Contacts />
      <div class="divider"></div>
      <GoBack @goHome="goHome()" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: stretch;
  opacity: 0;
}

.left {
  width: 40%;
  position: relative;
}
.right {
  width: 60%;
  padding: 10%;
}

.divider {
  height: 3em;
}

@media (max-width: 800px) {
  .left {
    display: none;
  }
  .right {
    width: 100%;
  }
}
</style>
