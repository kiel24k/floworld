<template>
    <Header/>
   <transition name="about-us">
    <div class="about-us" v-if="about">
        <section class="">
            <img src="/public/background-image/UxAbout.png" class="mt-2 img-fluid"  alt="">
            <div class="our-strategy">
                <b>Why Choosing Us</b>
            <h2 class="strat-title">Our Strategy is very  personalized</h2>
            <h2>to meet your needs</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, cumque vel recusandae corrupti earum temporibus est ducimus modi blanditiis</p>
            </div>
            <div class="adding-benefit">
                <div class="benefit">
                    <img src="/public/icon/plant.png" alt="">
                    <h2>Adding benefits</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae obcaecati deserunt, nostrum architecto!</p>
                </div>
                <div class="efficient">
                    <img src="/public/icon/back-in-time.png" alt="">
                    <h2>Efficient</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae obcaecati deserunt, nostrum architecto!</p>
                </div>
                <div class="perfect-match">
                    <img src="/public/icon/smartphone.png" alt="">
                    <h2>Perfect match</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae obcaecati deserunt, nostrum architecto!</p>
                </div>
            </div>
        </section>
       </div>
   </transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Header from "./Header.vue";


const about = ref(false)

onMounted(() => {
 about.value = true
})
</script>

<style scoped>
.about-us{
    transform: translate(0);
    transition: all linear 0.4s;
    background: #e4ebf7;
    
}

.about-us-enter-from,
.about-us-leave-to{
    background: white;
    transform: translateX(20%);
    opacity: 0;

}
section:nth-child(1){
    display: grid;
    justify-content: center;
    text-align: center;
    gap:1rem;
    background: #e4ebf7;
}
.our-strategy{
    max-width: 60%;
    margin:auto;
}
.adding-benefit{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:5rem;
}
.adding-benefit img{
    max-width: 150px;
}
.adding-benefit h2{
    color:gray;
}
.adding-benefit > div{
    max-width: 250px;
    background: white;
    border-radius: 10px;
    box-shadow: 1px 1px 20px 0px gray;
    padding:10px;
}
.adding-benefit p {
    color:rgb(42, 110, 236);
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 12px;
}
.strat-title{
    background-image: linear-gradient(to right, rgb(226, 38, 217) , rgb(223, 108, 32));
    color: transparent;
    background-clip: text;
}
</style>