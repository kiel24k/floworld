<template>
    <div class="row navigation-bar">
        <div class="col">
            <ul class="navbar nav item-one">
                <li class="nav-item">
                   <router-link class="nav-link" :to="{name: 'HomePage'}"> <img src="/public/icon/logo.png" alt="" width="100px" class="img-fluid"></router-link>
                </li>
            </ul>
        </div>

        <button class="burger btn btn-info" @click="burger">
            <h1>=</h1>
        </button>

        <transition name="showItemTransition">
            <div class="col navTwo">
                <ul class="navbar nav ">
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'HomePage'}">Home</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'ProductPage'}">Product</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'AboutUsPage'}">About Us</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'Profile'}">
                          <img src="/public/icon/people.png" alt="">
                      </router-link>
                  </li>
                  <li class="nav-item">
                      <img src="/public/icon/checkout.png" alt="" id="checkout">
                  </li>
                </ul>
              </div>
        </transition>
    </div>

    <div class="profile" v-if="profileModal">
         <div class="profile-content">
            <p class="closeModalButton" @click="closeModal">
                <button>X</button>
            </p>
            <div class="login">
                
                    <router-link class="nav-link" :to="{name: 'LoginPage'}" @click="closeModal">
                       <button class="btn">Login</button>
                    </router-link>
                
             </div>
             <div class="signup">
                <router-link :to="{name: 'SignupPage'}" @click="closeModal">
                    <button class="btn">Signup</button>
                </router-link>
             </div>
         </div>
       
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const profileModal = ref(false)
   const profile = () => {
    profileModal.value = true
   }
   const closeModal = () =>{
    profileModal.value = false
   }

   const burger = () => {
    let navTwo = document.querySelector(".navTwo")
    navTwo.classList.add("showItem")
    console.log(navTwo);
   
    
   
   }

</script>

<style scoped>
.profile .nav-link{
    text-decoration: none;
    color:white;
}
.row{
background: white;
border-style: solid;
border-color: rgb(56, 163, 196);
border-width: 0;
box-shadow: 0px 0px 20px 0px rgb(19, 123, 207);
position:sticky;
top:0;
z-index:999;
min-width: 100%;
display: flex;
}
ul{
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    gap:50px;
}
a{
    color:rgb(53, 51, 51);
    font-size: medium;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 3px;
}

.two{
    display: flex;
    justify-content: flex-start;
}
.item-one{
    display: flex;
    justify-content: flex-start;
    margin-left:7rem
}

.nav-item{
    cursor: pointer;
}
.profile {
    width: 100%;
    background: rgba(116, 108, 108, 0.4);
    position: absolute;
    top:0;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    backdrop-filter: blur(10px);
    z-index:999;
   
    
}
.profile-content{
    width: 50rem;
    height: 40rem;
    display: grid;
    align-content: center;
    margin:auto;
    align-items: center;
    justify-content: center;
    gap:10px;
    border-radius: 10px;
    border-width: 2px;
    border-style:solid;
    background: white;
    border:0;
}
.profile .login button{
    width: 40rem;
    height: 10rem;
    background: rgb(83, 198, 243);
    font: bold;
    color:white;
}
.profile .signup button{
    width: 40rem;
    height: 10rem;
    background: green;
    font:bold;
    color:white;
    letter-spacing: 3px;
}
.closeModalButton{
    text-align: end;
    position: relative;
    bottom:5rem;
  
}
.closeModalButton button{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 5px;
    border:0;
    background: rgb(228, 93, 93);
}
.burger{
    display: none;
}
.navtwo{
    transition: all linear 2s;
    background: red;
}
@media screen and (max-width: 1600px) {
    .navTwo{
        display: none;
        transition: all linear 2s;
        background: red;
    }
    .navTwo ul{
        display:grid ;
        justify-content: center;
        align-content: center;
    }
   
    .burger{
       display: block;
       position:absolute;
       width:5rem;
       right:0;
      
    }
    .nation-bar{
        display: flex;
    }
    .two{
        display: flex;
        justify-content: end;
    }
    .showItem{
        display: grid;
        background: rgb(241, 241, 241);
        width: 20rem;
        position:absolute;
        right:0;
        height:max-content;
        transition: all linear 2s;
    }
    .showItemTransition-enter-from, 
    .showItemTransition-leave-to {
        background: rgb(46, 43, 43);
    }
    
}
</style>