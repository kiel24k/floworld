<template>
    <transition name="slide">
        <div class="first" v-if="varOne" id="first">
         
          <section class="">
             <div class="row bg-info">
                <div class="col-7 section-one-description">
                <h1>Uniquely Pink Blooms</h1>
                <h1> A Special Touch The</h1>
                <h1>Beauty Charm</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi itaque distinctio delectus dolorem, voluptatibus architecto exercitationem </p>
                <div class="section-one-action">
                    <h2>$20</h2>
                    <select name="flower" id="">
                        <option value="">Tulips</option>
                        <option value="">Eyy</option>
                        <option value="">Eyy</option>
                        <option value="">Eyy</option>
                        <option value="">Eyy</option>
                    </select>
                    <select name="size" id="">
                        <option value="">Large</option>
                        <option value="">Medium</option>
                        <option value="">Small</option>
                    </select>
                    <button class="btn">Add to cart</button>
                </div>
                </div>
                <div class="col section-one-image-item bg-danger">
                 <img src="/src/assets/items/Portrait-Floral-Frame-_225.webp" alt="">
                </div>
             </div>
          </section>

          <div class="catalog">
            <h1>Floworld</h1>
            <h1>Catalog</h1>
          </div>


        </div>  
    </transition>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router'

const varOne = ref(false)
const router = useRouter()


//animation transition
onMounted(() => {
    varOne.value = true
})

// const data = ref(  {}  )

// //fetching middleware data
// const token = async () => {
//     await axios.get("/sanctum/csrf-cookie")
//     await axios.get("/api/user").then(response => {
//         data.value = response.data
//     }).catch(error => {
//         if(error.response.status == 401){
//             router.push("/")
//         }
//     })
// }

// onMounted(() => {
//   token()  
// })


</script>

<style scoped>
*{
    font-family: sans-serif;
}

.first{
    transition: all linear 1s;
}
.slide-enter-from,
.slide-leave-to{
    transform: translateY(20%);
    opacity:0; 
}
section .row{
    display: flex;
    max-width: max-content;
    margin:auto;
}
section {
    margin-left: 10rem;
    margin-right: 10rem;
    margin-top:1rem;
    background: rgb(255, 255, 255, 0.1);
    border-radius: 5px;
    padding:5px;
}
section:nth-child(1){
    max-width: 100%;
    
}
.section-one-description > *{
max-width: 70%;

}
.section-one-description h1{
    font-size: 4rem;
    letter-spacing: 1px;
    font-weight: bold;
}
.section-one-description p {
    font-size: 1rem;
}
.section-one-image-item img{
width: 35rem;
height:33rem;

}
.section-one-action button{
    background-image: linear-gradient(to right, rgb(226, 38, 217) , rgb(245, 155, 94));
   border: 0;
}
.section-one-action {
    display: flex;
    gap:1rem;
    padding:5px;
    background: rgb(231, 228, 228);
    max-width: max-content;
  
    
}
.section-one-action > * {
    width:10rem;
    text-align: center;
    border-radius: 5px;
    border-width: 0.5px;
}
.catalog{
    width:max-content;
    text-align: center;
    margin:auto;
    height: 25rem;
    display: grid;
    align-content: center;
    font-family: 'Courier New', Courier, monospace;
    
}
.catalog > * {
    font-size: 4rem;
    font-weight: bold;
}
.catalog h1:nth-child(1){
    background-image: linear-gradient(to right, rgb(226, 38, 217) , rgb(223, 108, 32));
    color: transparent;
    background-clip: text;
}




</style>
