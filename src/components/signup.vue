<template>
   <transition name="signup-transition">
   <div class="signup" v-if="signupTransition">
    <!-- max width and height -->
    <div class="signup-section">
       <div class="signup-content">
        <div class="signup-context">
            <h1>Signup Now</h1>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, architecto? Doloribus officiis quo sunt provident quam aliquam tempora numquam porro quae facere similique nostrum aperiam iusto totam culpa, cupiditate vel.</small>
        </div>
        <form action="" @submit.prevent>
            <div class="row">
                <div class="col">
                    <label for="">First Name</label>
                    <input type="text" class="form-control" placeholder="Your First Name">
                </div>
                <div class="col">
                    <label for="">Last Name</label>
                    <input type="text" class="form-control" placeholder="Your Last Name">
                </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="">Email</label>
                <input type="email" class="form-control" placeholder="Your Email">
              </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="">Birthday</label>
                    <input type="date" class="form-control" >
                </div>
            </div>
            <div class="row">
                <div class="col gender">
                Male
                <input type="radio" name="gender" value="male">
                Female
                <input type="radio" name="gender" value="female">
                </div>
            </div>

            <div class="row">
                <div class="col signup">
                    <button class="btn btn-primary">Signup</button>
                </div>
            </div>

            <router-link class="text-center" :to="{name: 'LoginPage'}">Already Account?</router-link>
        </form>
       </div>
    </div>
   </div>
   </transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const signupTransition = ref(false)
onMounted(() => {
    signupTransition.value = true
   
})
</script>

<style scoped>
.signup{
    transition:all linear 2s;
    transform: translateZ(0);
}
.signup-transition-enter-from,
.signup-transition-leave-to{
    transform: translateZ(100%);
    opacity: 0;
}

.signup-section{
width: 100%;
height: 100%;
display: grid;
justify-content: center;
align-content: center;


}
.signup-content{
background: rgb(233, 232, 232);
padding:20px;
width: 50rem;
height: auto;
display: grid;
gap:2rem;
align-content: center;
margin-top:5rem;

}
form{
display: grid;
gap:10px;
align-content: center;
}
form input{
    height: 4rem;
}
.gender{
    display: flex;
    align-items: center;
    gap:10px;
}
.signup{
    display: grid;
    justify-content: center;
}
.signup button{
    width: 10rem;
    padding:10px;
}
</style>