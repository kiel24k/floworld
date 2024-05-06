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

        <p class="bg-danger p-2 text-white" v-if="errors.first_name">
            {{ errors.first_name[0] }}
        </p>
        <p class="bg-danger p-2 text-white" v-if="errors.last_name">
            {{ errors.last_name[0] }}
        </p>
        <p class="bg-danger p-2 text-white" v-if="errors.email">
            {{ errors.email[0] }}
        </p>
        <p class="bg-danger p-2 text-white" v-if="errors.password">
            {{ errors.password[0] }}
        </p>
        <p class="bg-danger p-2  text-white" v-if="errors.birthday">
            {{ errors.birthday[0] }}
        </p>
        <p class="bg-danger p-2  text-white" v-if="errors.gender">
            {{ errors.gender[0] }}
        </p>

      
        <form action="" @submit.prevent="register">
            <div class="row">
                <div class="col">
                    <label for="">First Name</label>
                    <input type="text" class="form-control" placeholder="Your First Name" v-model="inputs.firstName">
                </div>
                <div class="col">
                    <label for="">Last Name</label>
                    <input type="text" class="form-control" placeholder="Your Last Name" v-model="inputs.lastName">
                </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="">Email</label>
                <input type="email" class="form-control" placeholder="Your Email" v-model="inputs.email">
              </div>
            </div>
            <div class="row">
                <div class="col">
                  <label for="">Password</label>
                  <input type="password" class="form-control" placeholder="Your Password" v-model="inputs.password">
                </div>
              </div>
            <div class="row">
                <div class="col">
                    <label for="">Birthday</label>
                    <input type="date" class="form-control" v-model="inputs.birthday">
                </div>
            </div>
            <div class="row">
                <div class="col gender">
                Male
                <input type="radio"  value="male" v-model="inputs.gender">
                Female
                <input type="radio"  value="female" v-model="inputs.gender">
                </div>
            </div>

            <div class="row">
                <div class="col signup">
                    <button class="btn btn-primary" @click="goTo">Signup</button>
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
import axios from 'axios';
import { onMounted, ref } from 'vue';
import {useRouter} from 'vue-router'

const router = useRouter()

const inputs = ref({
    firstName: '',
    lastName:'',
    email:'',
    password:'',
    birthday:'',
    gender:'',

})

const signupTransition = ref(false)
onMounted(() => {
    signupTransition.value = true
   
   
})

const sanctumToken = async () => {
    await axios.get("/sanctum/csrf-cookie")

}

const errors = ref({})
const register = async () => {
    sanctumToken()
    await axios.post('/register', {
        first_name: inputs.value.firstName,
        last_name: inputs.value.lastName,
        email: inputs.value.email,
        password: inputs.value.password,
        birthday: inputs.value.birthday,
        gender: inputs.value.gender,
        age:22
    }).then(response => {
        if(response.status === 204){
            axios.post('/logout')
            router.push("/login")
        }
    }).catch(error => {
    if(error.response.status === 422){
     errors.value = error.response.data.errors
    }
    
    // for (let x = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
}

)



}


    



// formData.append('first_name', inputs.value.firstName)  
//                //formData.append('key', value)
//                formData.append('last_name', inputs.value.lastName)
//                formData.append('email', inputs.value.email)
//                formData.append('password', inputs.value.password)
//                formData.append('birthday', inputs.value.birthday)
//                formData.append('gender', inputs.value.gender)
//                let url = 'http://127.0.0.1:8000/api/client-signup'
//                await axios.post(url, formData).then(response => {
//                 if(response.status == 200){
//                     console.log('success');
//                 }
//                }).catch(error => {
//               console.log(error);
   

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