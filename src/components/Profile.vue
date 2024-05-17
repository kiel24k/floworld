<template>
    <div>
        <h1>This is Profile page</h1>
    </div>
    <button @click="test">Local storage</button>
    <button class="btn btn-danger" @click="logout">Logout</button>
    <br>
    <div class="data" v-for="data in profileData" :key="data">
    {{ data }}
    </div>
</template>

<script setup>
// const cookie = await cookieStore.getAll()

import axios from "axios";
import { onMounted, ref } from "vue";
import {useRouter} from 'vue-router'

const router = useRouter()
const profileData =  ref({})

// console.log(cookie);
const test = () => {
    alert(location)
};

onMounted( async () => {
   await axios.get('/api/user').then(response => {
    profileData.value = response.data
    }).catch(error => {
        console.log(error);
    })
  }
  
)
const logout = async () => {
    
        await axios.get("/sanctum/csrf-cookie")
        await axios.post('/logout').then(response => {
           localStorage.removeItem("user")
           router.push("/")
        }).catch(error => {
            console.log(error);
        })
    }


</script>