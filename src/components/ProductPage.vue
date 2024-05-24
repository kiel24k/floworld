<template>
    <Header/>
   
    <transition>
    <div class="product">
        <section class="container">
            <div class="row exclusive">
                <div class="col ">
                    <h1><b>exclusive floral</b></h1>
                    <h1><b>arrangements</b></h1>
                </div>
                <div class="col"><b style="font-size:20px;font-weight:10;">if you find them someplace else, we probably inspired them</b></div>
            </div>
        </section>

        <section class="container">
            <div class="row">
                <div class="col">
                   <form action="" @submit.prevent="search">
                    <div class="search input-group">
                        <input type="text" placeholder="Search" class="form-control" v-model="searchItem">
                       <span><button type="submit" class="" >
                        <img src="/public/icon/176666_metroui_search_icon.png" width="40px" alt="">
                       </button></span>
                      
                    </div>
                   </form>
                </div>
            </div>
        </section>

        <section class="container">
            <router-link class="nav-link">
                
                <div class="product">

                   
                    <div class="not-found">
                       <h1> {{ notFound }}</h1>
                    </div>
                    

                    <div class="flower-item" v-for="flower in items.data" :key="flower">
                        <div class="">
                            <img :src="`http://127.0.0.1:8000/products/${flower.image}`" width="200px" height="200px" alt=""></div>
                        <div class="price">
                            <b>{{flower.product_name}}</b>
                        <p>123.00</p>
                        </div>
                    </div>
                </div>
            </router-link>
            <div class="pagination text-center justify-content-center mt-4">
                <Bootstrap5Pagination
                :data="items"
                pills
                @pagination-change-page="data"/>
            </div>
        </section>
    </div>
    </transition>
</template>

<script setup>
import Header from "./Header.vue";
import { onMounted, ref, } from "vue";
import axios from "axios";

import {Bootstrap5Pagination} from 'laravel-vue-pagination'



// const flowers = ref(null)

const notFound = ref('')
const items = ref({})
const data = onMounted(async(page = 1) => {
    await axios.get(`/api/client-product-list?page=${page}`).then(response => {
        items.value = response.data
        console.log(items.value);
        
    })

})
const searchItem = ref('')
const search = async() => {
    await axios.get(`/api/client-product-list?search=${searchItem.value}`).then(response => {
        items.value = response.data
       if(items.value.data[0] == null){
        notFound.value = 'Items not available'
       }else{
        notFound.value = ''
       }
    })
}


// onMounted(() => {
//     fetch("./jsonData/flowers.json").then(response => response.json())
//     .then((data) => flowers.value = data.flowerlist)
//     console.log(flowers.value);
// })

</script>

<style scope>

section {
    max-width: 60%;
    margin:auto;
}
section:nth-child(1){
    display: grid;
}
.shrubs-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:20px;
    align-content: center;
    align-items: center;
}
.shrubs-item{
    background: rgb(255, 255, 255);
    padding:10px;
    border-radius: 10px;
    width: 30%;
    box-shadow: 1px 1px 15px 1px gray;
    transition: linear all 0.1s;
    cursor: pointer;
    height: 20rem;
}
.shrubs-item:hover{
    transform: scale(1.1);
}
.shrubs-item span{
    display: flex;
    gap:20px;
}
.search input{
    border-radius: 5px;
    border-width: 1px;
    height: 35px; 

}
.exclusive{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.exclusive h1{
    color:rgb(243, 168, 180);
    text-transform: capitalize;
}
.search{
    display: flex;
    justify-content: end;
    align-items: center;
}
.search button{
    padding:0px;
    border:0;
    background: none;
}
.search input{
    max-width: 250px;
}
.product{
    display: flex;
    flex-wrap: wrap;
    gap:15px;
    justify-content: center;
    
}
.price{
    max-width:10rem;
    
}
.price p{
    color:rgb(233, 121, 87)
}
.flower-item{
    background: rgb(255, 251, 251);
    box-shadow: 0px 0px 5px 0px gray;
}
</style>