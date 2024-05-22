<template>
    <Header/>
   
    <transition>
    <div class="product">
        <section>
            <!-- <Bootstrap5Pagination
            :data="laravelData"
            @pagination-change-page="getResults"
        /> -->
        
        </section>
    </div>
    </transition>
</template>

<script setup>
import Header from "./Header.vue";
import { onMounted, ref, } from "vue";
import { Bootstrap5Pagination } from 'laravel-vue-pagination';



// const flowers = ref(null)


const flowers = ref({})
const shrubs = ref({})

onMounted(() => {
    fetch("./jsonData/flowers.json").then(response => response.json())
    .then((data) => flowers.value = data.flowerlist)
    console.log(flowers.value);
})

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
</style>