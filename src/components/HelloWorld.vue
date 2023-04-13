import <AboutUs class="vue"></AboutUs>
<template>
  <div class="hello">
    <h1>Welcome to Farmer's Connect</h1>
    <center> 
        <h3 class = "c" style= "font-family: verdana">
          Welcome to Farmer's Connect, the online platform that connects local farmers with their customers in the community. 
          Our goal is to make it easy for customers to find and support their local farmers. 
          With Farmer's Connect, you can discover local farmers in your area, learn about their products and services, and connect with them directly. 
          Our platform is designed to be user-friendly and accessible to everyone, regardless of their technical ability. 
          We believe that by supporting local farmers, we can help create a more sustainable and equitable food system for everyone. 
          So whether you're looking for fresh produce, dairy products, or other locally-sourced goods, Farmer's Connect is here to help you connect with the farmers in your community.
        </h3>
      </center>
    <br>
          <!-- Bilal menu stuff-->
          <div class="wrapper">
            <!--nav content 
    <nav>
      
      <ul>
        <li> <router-link to="/">Home</router-link> </li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/login">Log In</router-link>"</li>
          <li><router-link to="/signup">Sign Up</router-link></li>

      
</ul>
    </nav>
           -->
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
  .image-spacing { 
    margin-right: 20px; 
  } 

h3{
  text-align: center;
  width: 1100px;
  border: 1px solid white;
}
  h3.c{
  word-break: break-word;
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
  max-width: 30%;
  max-height: 30%;
  max-width: 30%;
  max-height: 30%;
  
}

nav {
  background-color: #3a3a3a;
  height: 40px;
  margin-top: 0px;
  font-size: large;
  max-width: 2000px; /* adjust this value based on your design */
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


  