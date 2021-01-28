<template>
  <div>
    <div class="header">主应用header</div>
    <div class="container" id="subapp-viewport">子应用容器container</div>
  </div>
  <!-- <router-view /> -->
</template>

<style lang="scss">
body {
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
.header {
  height: 40px;
  line-height: 40px;
  background: #eee;
  text-align: left;
  padding: 0 20px;
}
.container {
  height: 500px;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
