<template>
    <div class="header">
      <div class="row">
        <div class="col">
          <ul class="navbar nav section-one">
            <li class="nav-item">
              <router-link :to="{name: ''}">
                <img src="/public/icon/logo.png" width="100px" alt="">
              </router-link>
            </li>
            <li class="nav-item">
              <input type="text" placeholder="search">
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="navbar nav section-two">
            <li class="nav-item">
              <router-link>
                <img src="/public/icon/people.png" alt="">
              </router-link>
            </li>
            <!-- <li>
              <router-link>
                <img src="/public/icon/notification.png" alt="">
              </router-link>
            </li> -->
                  <img src="/public/icon/exit.svg" width="30px" alt="" @click="logout">
          </ul>
        </div>
      </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import {useRouter} from 'vue-router'
const router = useRouter()


const logout = () => {
       localStorage.removeItem("user")
       localStorage.removeItem("admin")
       router.push("/")
}
</script>

<style scoped>
.header{
  position:sticky;
  top:0;
  z-index:999;
  background: rgb(255, 243, 243);
  
  

}
.row{
 background: rgba(255, 255, 255, 0.5);
}
.section-one{
  display: flex;
  justify-content: start;
  gap:4rem
}
.section-two{
  display: flex;
  justify-content: end;
  gap:2rem;
  align-content: center;
  align-content: center;
}
input{
  border-radius: 5px;
  border-width: 1px;
  padding:5px;
}
</style>