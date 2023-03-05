<script setup></script>
<template>
  <div class="spinner">
    <div class="spinner1">
      <div class="star"></div>
    </div>
  </div>
</template>
<style scoped>
.spinner {
  position: absolute;
  top: -4%;
  right: 0%;
  background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
  width: 200%;
  aspect-ratio: 1;
  animation: spinner-animation 10s linear infinite;
  border-radius: 50%;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255),
    0px 5px 20px 0px rgb(0, 225, 255);
  z-index: -1;
}

.star {
  width: 10%;
  aspect-ratio: 1;
  background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
  animation: spinner-animation 15s linear infinite;
  border-radius: 50%;
  z-index: -2;
}
.spinner1 {
  background-color: var(--bg-color);
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  filter: blur(10px);
}

@keyframes spinner-animation {
  to {
    transform: rotate(360deg);
  }
}
</style>
