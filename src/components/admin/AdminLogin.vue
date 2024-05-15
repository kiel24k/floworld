<template>
    <transition name="login-transition">
     <div class="logins" v-if="loginAnimation">
         <div class="login-form">
             <h1>Login your account now</h1>
             <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error accusamus voluptatem harum doloribus eveniet pariatur nostrum eius sunt necessitatibus, possimus accusantium, amet quaerat laborum recusandae, modi sapiente blanditiis vitae!</small>
             <form action="" @submit.prevent="submitLogin">
                
                 <div class="username-input">
                     <label for="">Username</label>
                     <input type="text" placeholder="Enter Username" class="form-control" v-model="input.email">
                 </div>
                 <div class="password-input">
                     <label for="">Password</label>
                     <input type="text" placeholder="Enter password" class="form-control" v-model="input.password">
                 </div>
                 <div class="submit">
                     <button class="btn btn-primary">
                         Login
                     </button>
                  <router-link :to="{name: 'LoginPage'}">
                     <button class="btn btn-info mt-2">Login as User</button>
                  </router-link>
                 </div>
             </form>
         </div>
     </div>
 
    
    </transition>
 </template>
 <script setup>
 import axios from 'axios';
 import { onMounted, ref } from 'vue';
 import { useRouter } from 'vue-router'
 
 const router = useRouter()
 //animation transition
 const loginAnimation = ref(false)
 onMounted(() => {
   loginAnimation.value = true
 })
 
 const input = ref({
     email: '',
     password: ''
 })
 
 //login submit function
 const submitLogin = async () => {
     await axios.get("/sanctum/csrf-cookie")
     await axios.post("/login", {
         email: input.value.email,
         password: input.value.password
     }).then(response => {
         console.log(response);
        if(response.status == 204){
         localStorage.setItem("user", "authenticated")
         router.push("/")
        }
     })
     
 }
 
 </script>
 
 <style scoped>
 
 .logins{
     transition: all linear 1s;
     transform:translate(0)
 }
 .login-transition-enter-from,
 .login-transition-leave-to{
     transform: translateZ(100%);
     opacity: 0;
 }
 *{
     font-family: sans-serif;
 }
 .login-form{
     width:40%;
     margin:auto;
     background: rgb(231, 228, 228);
     border-radius: 10px;
     margin-top:5rem;
     height: 30rem;
     display: grid;
     padding:2rem;
    
 }
 small{
     color:gray;
 }
 
 
 form{
     display:grid;
     gap:20px;
     
 }
 form > div{
     display: grid;
     justify-content: center;
 }
 form input{
     width:20rem;
     margin:auto;
 }
 label{
     letter-spacing: 2px;
     font:500;
 }
 .submit{
     text-align:center;
 }
 .login-info{
     text-align:center;
 }
 
 </style>