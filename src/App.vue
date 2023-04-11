<template>
    <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Farmer's Connect" />
    
  <div id="app">
    
    <nav>
      <router-link to="/">Home</router-link> |
    </nav>
    <router-view/>
  </div>
  </div>
  </header>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
