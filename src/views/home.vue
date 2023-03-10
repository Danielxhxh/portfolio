<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import router from "../router";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const blob = ref(null);
const projects = ref(null);
const about = ref(null);
const name = ref("DANIEL XHAKALLIU");
const projectsButton = ref("PROJECTS");
const aboutButton = ref("ABOUT");

onMounted(() => {
  document.documentElement.style.overflow = "hidden";

  //The moment the page loads, make the blob appear
  blob.value.animate(
    { height: `36vmax` },
    { duration: 1000, fill: "forwards" }
  );

  // Used to make the blob follow the mouse
  window.onpointermove = (event) => {
    const blobWidth = blob.value.offsetWidth;
    const blobHeight = blob.value.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

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

  // The cool effect on projects
  document.getElementById("projects").onmouseover = (event) => {
    let iterations = 0;

    const interval = setInterval(() => {
      projectsButton.value = projectsButton.value
        .split("")
        .map((letter, index) => {
          if (index < iterations) return "PROJECTS"[index];
          else return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= name.value.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  };

  // The cool effect on about
  document.getElementById("about").onmouseover = (event) => {
    let iterations = 0;

    const interval = setInterval(() => {
      aboutButton.value = aboutButton.value
        .split("")
        .map((letter, index) => {
          if (index < iterations) return "ABOUT"[index];
          else return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= name.value.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  };
});

onBeforeUnmount(() => {
  document.documentElement.style.overflow = "auto";
  document.onpointermove = null;
});

// Takes care of the animations right before changing the path
function moveTo(path) {
  projects.value.animate(
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
      <h2 @click="moveTo('/projects')" ref="projects" id="projects">
        {{ projectsButton }}
      </h2>
      <h2 @click="moveTo('/about')" ref="about" id="about">
        {{ aboutButton }}
      </h2>
    </div>
  </div>
</template>

<style scoped>
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
