<template>
  <div class="hello">
    <h1>Welcome to Farmer's Connect</h1>
    <p>
      Welcome to Farmer's Connect, check out your local area for farmers here.
    </p>
          <!-- Bilal menu stuff-->
          <div class="wrapper">
    <nav>
      <!-- nav content -->
      <ul>
        <li><a href="#">Home</a></li>
     <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Login</a></li>
      <li><a href="#">Farmer's Near Me</a></li>
      <li>     <a href="https://github.com/Software-Engineering-Dearborn-Team"
        target="_blank">Github</a></li>
</ul>
    </nav>

    <div class="content">
      <div class="container">
        <div class="left-panel">
          <!-- Left panel content -->
        </div>
        <div class="right-panel">
          <!-- Right panel content -->
        </div>
      </div>
    </div>
  </div>
    
  </div>
</template>

<script>
export default {
  class: "hello",
  props: {
    msg: String,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 30px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style>
.top-section {
  position: relative;
}
.background-design {
  position: absolute;
  top: 0;
  right: 100%;
  left: -300%;
  width: 750%;
  height: 100%;
  background-image: linear-gradient(to bottom right,#ff3b3b ,#32a852 );
  
}
.logo-container {
  margin-bottom: 400%;
 right: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26vh;
  
  
  
  
}

.logo {
  max-width: 100%;
  max-height: 100%;
  
}




nav {
  background-color: #3a3a3a;
  height: 50px;
  margin: 0 auto;
  right: -100px;
  left: -60%;
  margin-top: 200px;
  width: 100%;
  max-width: 960px; /* adjust this value based on your design */
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  float: left;
}

a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:hover {
  background-color: #111;
}

</style>









  <RouterView />


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}


.left-panel {
  flex: -1;
  background-color:rgb(59, 42, 42); /* Change this to your desired background color */
  width: 100%;
  float: left;
}

.right-panel {
  flex: 1;
  background-color:blue ; /* Change this to your desired background color */
  width: 500%;
  float: right;}
