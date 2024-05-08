<template>
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
                <div class="col  section-one-image-item">
                 <img src="/src/assets/items/Portrait-Floral-Frame-_225.webp" alt="">
                </div>
             </div>
          </section>

          <div class="catalog">
            <h1>Floworld</h1>
            <h1>Catalog</h1>
          </div>

          <section class="offer">
            <div class="row">
                <div class="col-7 coming-offer">
                    <h3>Up Coming Offer</h3>
                    <h1>Your One - Stop</h1>
                    <h1>Flower Shop</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In recusandae atque incidunt a optio autem, aspernatur laborum </p>
                    <button class="btn btn-danger">Learn More</button>
                </div>
                <div class="col discount">
                    <div class="row">
                        <p>Up to 30% Off</p>
                        <h1>Red Rose</h1>
                        <button class="btn">Shop Now</button>
                    </div>
                    <div class="row">
                        <p>Up to 20% Off</p>
                        <h1>White Rose</h1>
                        <button class="btn">Shop Now</button>
                    </div>
                </div>
            </div>

          </section>

          <section class="">
            <div class="row catalog-2">
                <div class="col-7 m-2 bloom">
                    <div class="bloom-content">
                        <h1>The Bloom Box Your</h1>
                        <h1>Source For Stunning</h1>
                        <h1>Flowers</h1>
                        <button class="btn">Learn More</button>
                    </div>
                    <div class="row mt-4 image-content-1">
                        <div class="col">
                            <img src="/src/assets/items/red-base.jpg" height="325px" width="400px" alt="">
                        </div>
                        <div class="col">
                            <img src="/src/assets/items/red-base.jpg" height="325px" width="400px" alt="">
                        </div>
                    </div>
                </div>

                <div class="col m-2 image-content-2">
                    <img src="/src/assets/items/red-base.jpg" width="600px" alt="">
                </div>
            </div>
             
          </section>
           
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
.row{
    display: flex;
    flex-wrap: wrap;
}
section {
    margin-left: 10rem;
    margin-right: 10rem;
    margin-top:1rem;
    background: rgb(255, 255, 255, 0.1);
    border-radius: 5px;
    padding:5px;
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
    background: rgb(226, 224, 224);
  
    
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
.offer > .row{
    display: flex;
    gap:10px;
}
.coming-offer{
    display: grid;
    justify-content: start;
    background-image: url("/public/background-image/white-flower-right-side-white-background-ai-generative_206846-2232.avif");
    background-position: 100%;
    background-repeat: no-repeat;
    background-color: #ececec;
    height:25rem;
    border-radius: 10px;
    box-shadow: 1px 0px 20px 0px rgb(221, 219, 221);
    
}
.coming-offer h1{
    font-weight: bold;
}
.coming-offer button{
    max-width: 10rem;
    background-image: linear-gradient(to right, rgb(226, 38, 217) , rgb(245, 155, 94));
    padding:10px;
    border: 0 ;
}
.coming-offer > *{
    max-width: 28rem;
}
.discount {
    display: grid;
    gap:10px;
  
}
.discount > div h1{
    font-weight: bold;
   
    
}
.discount > .row button{
    width: 10rem;
    margin-left:10px;
    background-image: linear-gradient(to right, rgb(226, 38, 217) , rgb(245, 155, 94));
    border:0;
    border-radius: 10px;
    color:white;
   
}
.discount > div:nth-child(1){
    background-image: url('/public/background-image/luxurious-background-with-deep-red-roses-green-leaves-arranged-right-left-side-image_878783-7337.avif');
    background-position: 100%;
    background-repeat: no-repeat;
    background-color: white;
    box-shadow: 1px 0px 20px 0px rgb(221, 219, 221);

    
   
}
.discount > div:nth-child(2){
    background-image: url('/public/background-image/decorative-frame-wreath-white-roses-floral-arrangement-isolated_273893-4196.avif');
    background-position-y: 60%;
    background-position: 100%;
    background-repeat: no-repeat;
    background-color: white;
    box-shadow: 1px 0px 20px 0px rgb(221, 219, 221);
}
.bloom{
 
}
.discount .row{
    border-radius: 20px;
    padding:10px;
}
.catalog-2{
    height: 40rem;
    display: flex;
    flex-wrap: wrap;
    gap:1px;
}

.bloom-content{
    background: rgb(240, 238, 238);
    height: 250px;
    border-radius: 15px;
    max-width: 54rem;
    box-shadow: 1px 0px 20px 0px rgb(221, 219, 221);
    
}
.image-content-1 img{
    box-shadow: 1px 0px 20px 0px rgb(221, 219, 221);
    border-radius: 15px;
   

}
.image-content-2 img{
    border-radius: 15px;
    box-shadow: 1px 0px 20px 0px rgb(221, 219, 221);
}
.bloom-content button{
    background-image: linear-gradient(to right, rgb(226, 38, 217) , rgb(245, 155, 94));
    border:0;
    color:white;
    padding:10px;
}




</style>
