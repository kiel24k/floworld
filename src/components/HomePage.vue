<template>
    <Header/>
    <router-view></router-view>
    <transition name="slide">
        <div class="first" v-if="varOne" id="first">
         
          <section class="">
             <div class="row">
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
                <div class="col section-one-image-item">
                 <img src="/src/assets/items/Portrait-Floral-Frame-_225.webp" class="img-fluid" alt="">
                </div>
             </div>
          </section>

          <div class="catalog">
            <h1>Floworld</h1>
            <h1>Catalog</h1>
          </div>

         <div class="container">
            <div class="row section-two ">
                <div class="col upcomming">
                 <b>up comming offer</b>
                 <h2><b>your one - stop</b></h2>
                 <h2><b>flower shop</b></h2>
                 <small>impolitely disentermediate strategic</small>
                 <small>materials visionary the mindshare</small>
                 <br>
                    <button class="btn btn-danger ">Learn More</button>
                </div>
                <div class="col off">
                    <div class="col">
                        <p>up to 30% off</p>
                        <h1><b>Red rose</b></h1>
                        <button class="btn btn-danger">Shop Now</button>
                    </div>
                    <div class="col ">
                        <p>up to 20% off</p>
                        <h1><b>white rose</b></h1>
                        <button class="btn btn-danger">Shop Now</button>
                    </div>
                </div>
            </div>
         </div>

         <div class="container  mt-5">
            <div class="row section-three">
                <div class="col-6">
                    <h1><b>the bloom box your</b></h1>
                    <h1><b>source for stunning</b></h1>
                    <h1><b>flowers</b></h1>
                    <button class="btn btn-danger">Learn More</button>
                </div>
                <div class="col-5">
                    s
                </div>
            </div>
         </div>

         <div>
            <Contact/>
         </div>
        </div>  
    </transition>
</template>

<script setup>
import Contact from '../components/Contact.vue'
import Header from "./Header.vue";
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
.section-two{
    display: flex;
    gap:10px;
    
}
.section-two button{
    background-image: linear-gradient(to right, rgb(226, 38, 217) , rgb(245, 155, 94));
    border: 0;
}

.upcomming button{
    width:8rem;
}
.upcomming{
    display: grid;
    gap:10px;
    text-transform: capitalize;
    box-shadow: 0px 0px 10px 0px rgb(185, 185, 185);
    border-radius: 5px;
    padding:20px;
    background: white;
}
.off > div{
    box-shadow: 0px 0px 10px 0px rgb(185, 185, 185);
    border-radius: 5px;
    padding:20px;
    background: white;
}
.off{
display: grid;
gap:5px;
}
.section-three{
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    gap:10px;
   
   
}
.section-three > div{
    box-shadow: 0px 0px 10px 0px rgb(185, 185, 185);
   background: white;
    border-radius: 10px;
}
.section-three button{
    background-image: linear-gradient(to right, rgb(226, 38, 217) , rgb(245, 155, 94));
    border: 0;
}






</style>
