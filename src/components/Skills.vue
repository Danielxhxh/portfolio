<script setup></script>
<template>
  <h1>Skills</h1>
  <h3>Programming languages</h3>
  <div class="cards-group">
    <div class="card first" style="background-color: #6096b4">
      <h3>JavaScript</h3>
    </div>
    <div class="card second" style="background-color: #93bfcf">
      <h3>Java</h3>
    </div>
    <div class="card third" style="background-color: #bdcdd6">
      <h3>Python</h3>
    </div>
    <div class="card fourth" style="background-color: #eee9da"><h3>C</h3></div>
  </div>
  <h3>Frameworks and databases</h3>
  <div class="cards-group">
    <div class="card first" style="background-color: #d7e9b9">
      <h3>Vue 3</h3>
    </div>
    <div class="card second" style="background-color: #fffbac">
      <h3>MongoDB</h3>
    </div>
    <div class="card third" style="background-color: #ffd495">
      <h3>React</h3>
    </div>
    <div class="card fourth" style="background-color: #faab78">
      <h3>MySQL</h3>
    </div>
  </div>
  <h3>Others</h3>
  <div class="cards-group">
    <div class="card first" style="background-color: #f8ede3"><h3>AWS</h3></div>
    <div class="card second" style="background-color: #dfd3c3">
      <h3>Linux</h3>
    </div>
    <div class="card third" style="background-color: #d0b8a8">
      <h3>REST API</h3>
    </div>
    <div class="card fourth" style="background-color: #dba39a">
      <h3>Git</h3>
    </div>
  </div>
</template>
<style scoped>
.cards-group {
  width: 100%;
  height: 6%;
  position: relative;
}

.card {
  position: absolute;
  left: 0;
  top: 5%;
  box-shadow: 0.2em 0.2em 0.2em #00000040;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 25%;
  aspect-ratio: 2;
  margin: 10px;
  overflow-wrap: break-word;
  transition: all 1s ease-in-out;
}

.first {
  z-index: 4;
}

.second {
  left: 5%;
  z-index: 3;
}

.third {
  left: 10%;
  z-index: 2;
}

.fourth {
  left: 15%;
  z-index: 1;
}
.cards-group:hover > .first {
  top: 6%;
  left: 3%;
  transform: rotate(-1deg);
}

.cards-group:hover > .second {
  top: 0%;
  left: 25%;
  transform: rotate(3deg);
}

.cards-group:hover > .third {
  top: 6%;
  left: 48%;
  transform: rotate(-2deg);
}

.cards-group:hover > .fourth {
  top: 2%;
  left: 65%;
  transform: rotate(2deg);
}
</style>
