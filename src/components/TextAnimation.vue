<script setup></script>
<template>
  <h1>
    <span>always be</span>
    <div class="message">
      <div class="word1">learning</div>
      <div class="word2">exploring</div>
      <div class="word3">creating</div>
    </div>
  </h1>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
h1 {
  font-size: 3rem;
  font-weight: 100;
  line-height: 1.5;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  left: 5%;
  position: relative;
  width: 550px;
}

.message {
  background-color: var(--primary);
  color: var(--bg-color);
  display: block;
  overflow: hidden;
  position: absolute;
  padding-left: 0.5rem;
  top: 0.2rem;
  left: 270px;
  animation: openclose 5s ease-in-out infinite;
}

@keyframes openclose {
  0% {
    top: 0.2rem;
    width: 0;
  }
  5% {
    width: 0;
  }
  15% {
    width: 300px;
  }
  30% {
    top: 0.2rem;
    width: 300px;
  }
  33% {
    top: 0.2rem;
    width: 0;
  }
  35% {
    top: 0.2rem;
    width: 0;
  }
  38% {
    top: -4.5rem;
  }
  48% {
    top: -4.5rem;
    width: 350px;
  }
  62% {
    top: -4.5rem;
    width: 350px;
  }
  66% {
    top: -4.5rem;
    width: 0;
    text-indent: 0;
  }
  71% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }
  86% {
    top: -9rem;
    width: 285px;
  }
  95% {
    top: -9rem;
    width: 285px;
  }
  98% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }
  100% {
    top: 0;
    width: 0;
    text-indent: 0;
  }
}
</style>
