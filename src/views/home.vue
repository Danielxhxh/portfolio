<script setup>
import { ref, onMounted } from "vue";
import router from "../router";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const blob = ref(null);
const work = ref(null);
const about = ref(null);
const name = ref("DANIEL XHAKALLIU");

onMounted(() => {
  //The moment the page loads, make the blob appear
  blob.value.animate(
    { height: `36vmax` },
    { duration: 1000, fill: "forwards" }
  );

  // Used to make the blob follow the mouse
  document.onpointermove = (event) => {
    const { clientX, clientY } = event;

    blob.value.animate(
      { left: `${clientX}px`, top: `${clientY}px` },
      { duration: 3000, fill: "forwards" }
    );
  };

  // The cool effect on the name
  document.querySelector("h1").onmouseover = (event) => {
    let iterations = 0;

    const interval = setInterval(() => {
      name.value = name.value
        .split("")
        .map((letter, index) => {
          if (letter === " " || index < iterations)
            return "DANIEL XHAKALLIU"[index];
          else return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= name.value.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  };
});

function moveTo(path) {
  work.value.animate(
    { color: `var(--bg-color)` },
    { duration: 1000, fill: "forwards" }
  );

  about.value.animate(
    { color: `var(--bg-color)` },
    { duration: 1000, fill: "forwards" }
  );

  blob.value.animate(
    { height: `0vmax` },
    { duration: 1000, fill: "forwards" }
  ).onfinish = () => {
    // Call your function here
    router.push(path);
  };
}
</script>

<template>
  <div id="blob" ref="blob"></div>
  <div id="blur">
    <h1 id="name">{{ name }}</h1>

    <div class="menu">
      <h2 @click="moveTo('/work')" ref="work">Work</h2>
      <h2 @click="moveTo('/about')" ref="about">About</h2>
    </div>
  </div>
</template>

<style>
html {
  overflow: hidden;
}

#name {
  font-size: 4em;
  font-weight: 700;
  transition: color 1s;
}

#name:hover,
.menu > h2:hover {
  color: white;
}

.menu {
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 0;
}

.menu > h2 {
  cursor: pointer;
  margin: 1em;
  transition: color 1s;
}

#blob {
  background: linear-gradient(to right, var(--primary), var(--secondary));
  height: 0vmax;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  animation: rotate 20s infinite;
  z-index: -1;
  opacity: 0.8;
}

#blur {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--bg-color);
  height: 100%;
  width: 100%;
  z-index: 0;
  backdrop-filter: blur(12vmax);
}
</style>
