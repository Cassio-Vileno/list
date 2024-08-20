<template>
  <div class="main">
    <router-view />
  </div>
</template>

<style>
body {
  background-color: #d6d7ef;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  display: flex;
  flex-direction: column;
}
</style>
