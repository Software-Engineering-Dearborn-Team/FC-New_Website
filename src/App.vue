<template>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" />
    
    <div class="wrapper">
      <HelloWorld msg="Farmer's Connect" />
    
  <div id="app">
    
    <!--navigation for routing links.-->
    <nav>
        <ul>
          <li> <router-link to="/">Home</router-link> </li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/login">Log In</router-link>"</li>
          <li><router-link to="/signup">Sign Up</router-link></li>
        </ul>
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
  overflow: hidden;
  padding: 30px;
 
}

nav a {
  font-weight: bold;
  color: rgb(34, 152, 237);
 
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
