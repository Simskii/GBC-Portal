<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hem</router-link> |
      <router-link to="/profile">Profil</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>

  </div>
</template>

<style lang="scss">
#app {
  font-family: "Segoe UI", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.box-title {
  margin-bottom: 20px;
}

.box-footer {
  text-align: right;
}

.el-alert__title{
  display:flex;
}
</style>
