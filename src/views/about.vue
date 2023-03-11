<script setup>
import { ref, onMounted } from "vue";
import router from "../router";

import Contacts from "../components/Contacts.vue";
import Skills from "../components/Skills.vue";
import Education from "../components/Education.vue";
import Experience from "../components/Experience.vue";
import Personal from "../components/Personal.vue";
import BigSpinner from "../components/BigSpinner.vue";
import TextAnimation from "../components/TextAnimation.vue";
import GoBack from "../components/GoBack.vue";

let container = ref(null);

onMounted(() => {
  container.value.animate(
    { opacity: `1` },
    { duration: 1000, fill: "forwards" }
  );

  // Animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-scroll");
      } else {
        entry.target.classList.remove("show-scroll");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden-scroll");
  hiddenElements.forEach((el) => observer.observe(el));
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
    <div class="left"><BigSpinner /> <TextAnimation /></div>
    <div class="right">
      <h1>
        I am a passionate Full Stack Developer with a keen interest in
        technology and a strong desire to learn.
      </h1>

      <div class="section hidden-scroll">
        <Skills />
      </div>
      <div class="section hidden-scroll">
        <Experience />
      </div>
      <div class="section hidden-scroll">
        <Education />
      </div>
      <div class="section hidden-scroll">
        <Personal />
      </div>
      <div class="section hidden-scroll"><Contacts /></div>
      <GoBack @goHome="goHome()" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  /* justify-content: stretch; */
  opacity: 0;
}

.left {
  width: 40%;
  background-image: linear-gradient(to right, var(--primary), var(--bg-color));
  z-index: -5;
  position: relative;
}
.right {
  width: 60%;
  padding: 10%;
  padding-bottom: 0;
}

.section {
  margin: 15em auto 3em auto;
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
