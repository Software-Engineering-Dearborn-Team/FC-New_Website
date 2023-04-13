<template>
    <div class="signup">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <form action="/action_page.vue">
    <div class="container">
      <h1>Register for an Account</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <label for="email"><b>First Name<br></b></label>
      <input type="text" placeholder="Enter First Name" name="fName" id="fName" required>
  
      <label for="email"><b><br>Last Name</b><br></label>
      <input type="text" placeholder="Enter Last Name" name="lName" id="lName" required>
  
      <label for="email"><b><br>Username<br></b></label>
      <input type="text" placeholder="Enter Username" name="uname" id="uname" required>
  
      <label for="email"><b><br>Email</b><br></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required>
  
      <label for="psw"><b><br>Password</b><br></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
  
      <label for="psw-repeat"><b><br>Repeat Password</b><br></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
      <hr>
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
  
      <button type="submit" class="registerbtn"><router-link to="/UserProfile">Register</router-link></button>
    </div>
    
    <div class="container login">
      <p>Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
  </form>
  
  </div>
  </template>
  
  <style> 
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f8f6f4;
  }
  
  /* Add padding to containers*/
  .container {
    padding: 16px;
    background-color: white;
  }
   
  /* Full-width input fields */
  input[type=text], input[type=password] {
    width: 20%;
    padding: 10px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #b1cbbb;
  }
  
  input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }
  
  /* Overwrite default styles of hr */
  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }
  
  /* Set a style for the submit button */
  .registerbtn {
    background-color: #587e76;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 50%;
    opacity: 0.9;
  }
  
  .registerbtn:hover {
    opacity: 1;
  }
  
  /* Add a brown text color to links */
  a {
    color: #4f3222;
  }
  
  /* Set a grey background color and center the text of the "sign in" section */
  .signin {
    background-color: #daebe8;
    text-align: center;
  }
  </style>
  