<script setup></script>
<template>
  <h1>Contacts</h1>

  <div class="cards-group">
    <div class="card">
      <i class="pi pi-linkedin"></i>
      <a href="https://www.linkedin.com/in/daniel-xhakalliu/" target="_blank"
        >D.Xhakalliu</a
      >
    </div>
    <div class="card">
      <i class="pi pi-github"></i>
      <a href="https://github.com/Danielxhxh" target="_blank">Danielxhxh</a>
    </div>
    <div class="card">
      <i class="pi pi-instagram"></i>
      <a href="https://www.instagram.com/danielxh_/" target="_blank"
        >@danielxh_</a
      >
    </div>
    <div class="card">
      <i class="pi pi-twitter"></i>
      <a href="https://twitter.com/xhakalliu" target="_blank">@xhakalliu</a>
    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}

.cards-group {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  background-color: #212121;
  box-shadow: 0.2em 0.2em 0.2em #00000040;
  border: #212121 0.2em solid;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 20%;
  aspect-ratio: 1;
  transition: all 0.4s ease-in;
  margin: 10px;
  overflow-wrap: break-word;
}
.card:hover {
  transform: translateY(-1.3rem);
  border: var(--primary) 0.2em solid;
  border-radius: 2.5rem 0 2.5rem 0;
}

.card > i {
  font-size: 2em;
  margin-bottom: 0.5em;
  color: var(--primary);
}

@media (max-width: 800px) {
  .card {
    width: 40%;
    /* margin-bottom: 5%; */
  }
}
</style>
