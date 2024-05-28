<template>
   <Header/>
   <div class="row">
    <div class="col sidebar">
        <Sidebar/>
    </div>
    <div class="col bg-light">
       <div class="row">
        <div class="title">
            <h2><b>Our Categories</b></h2>
        </div>
       </div>

       <div class="row contents">
        <div class="s" @click="flower('sunflower')">
            <img src="/public/icon/sunflowerCategory.avif" width="250px" height="263px"  alt="">
            <h3>Sunflower</h3>
        </div>
        <div class="f" @click="flower('rose')">
            <img src="/public/icon/roseCategory.jpg" width="250px" height="263px" alt="">
            <h3>Rose</h3>
        </div>
        <div class="s" @click="flower('peonies')">
            <img src="/public/icon/peoniesCategory.jpg" width="250px" height="263px"  alt="">
            <h3>Peonies</h3>
        </div>
       </div>
       
    </div>
   </div>
   <div v-if="category">
    <CategoryList :flower="flowerValue" @category="category = false"/>
   </div>
</template>

<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import CategoryList from './CategoryList.vue'
import { ref } from 'vue';

const category = ref(false)
const flowerValue = ref('')
const flower = (flower) => {
    category.value = true
   flowerValue.value = flower
}

</script>

<style scoped>
.sidebar{
    max-width: 12rem;
}
.contents{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
   
}
.contents > div{
   width: max-content;
   background: white;
   margin:20px;
   padding:10px;
   box-shadow: 0px 0px 10px 0px gray;
   transition: all linear 0.2s;
   cursor: pointer;
   
}
img{
    border-radius: 10px;
}
.contents > div:hover{
    background: violet;
}
.title{
    text-align: center;
}
</style>