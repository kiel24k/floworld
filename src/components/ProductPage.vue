<template>
    <!-- <table class="table table-bordered">
        <thead>
            <tr>
                <th>Category</th>
                <th>Price</th>
                <th>Instructions</th>
                <th>name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="flower in flowers" :key="flower">
                <td style=" background-image: linear-gradient(to right, rgb(226, 38, 217) , rgb(245, 155, 94));width:150px; color:white;">{{ flower.category }}</td>
                <td style="background-color:green;color:white">{{ flower.price }}</td>
                <td style="width:250px;height: 10rem;">{{ flower.instructions }}</td>
                <td>{{ flower.name }}</td>
            </tr>
        </tbody>

    </table> -->

    <transition>
    <div class="product">
        <section>
            <span>
                <button>prev</button>
                <b>1,2,3,4,5,6,7</b>
                <button>Next</button>
            </span>
            <div class="shrubs">
                <h1>Shrubs</h1>
            </div>
            <div class="shrubs-content">
                <div class="shrubs-item" v-for="flower in flowers" :key="flower">
                    <span>
                        <img src="/public/icon/plant.png" width="210" alt="">
                        <b>{{flower.price}}</b>
                    </span>
                    <h2>{{flower.name}}</h2>
                </div>
            </div>
        </section>
    </div>
    </transition>
</template>

<script setup>

import { onMounted, ref, } from "vue";



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