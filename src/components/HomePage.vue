<template>
    <transition name="slide">
        <div class="first" v-if="varOne">
            <div class="second">
                <h1>Contents</h1>
            </div>
        </div>  
    </transition>
</template>

<script setup>
import { onMounted, ref } from "vue";
const varOne = ref(false)



onMounted(() => {
    varOne.value = true
 
    
    
})

</script>

<style scoped>
.first{
    background: red;
    transition: all linear 1s;
}
.slide-enter-from,
.slide-leave-to{
    transform: translateX(20%);
    opacity:0; 
}



</style>
