<template>
    <Header/>
    <div>
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h2 class=""><b>{{orderItems.product_name}}</b></h2>
                    <img :src="`http://127.0.0.1:8000/products/${orderItems.image}`" width="500px" height="600px" alt="">
                    <div class="description">
                        <h2>Description</h2>
                        <hr>
                     <em>{{ orderItems.description }}</em>
                     <b>Size: {{ orderItems.size }}</b>
                     <h4><b>₱{{ orderItems.price }}</b></h4>
                    </div>
                  
                </div>
                <div class="col">
                    <form action="" @submit.prevent="submit">

                            <div class="row info">
                                <div class="col">
                                    <label for=""><small>First Name</small></label>
                                    <input type="text" class="form-control" v-model="inputs.first_name">
                                </div>
                                <div class="col">
                                    <label for=""><small>Last Name</small></label>
                                    <input type="text" class="form-control" v-model="inputs.last_name">
                                </div>
                            </div>

                            <div class="row info">
                                <div class="col">
                                    <label for=""><small>Email</small></label>
                                    <input type="text" class="form-control" v-model="inputs.email">
                                </div>
                                <div class="col">
                                    <label for=""><small>Phone Number</small></label>
                                    <input type="text" class="form-control" v-model="inputs.phone_number">
                                </div>
                            </div>

                            <div class="row info">
                                <div class="col">
                                    <label for=""><small>Address</small></label>
                                <input type="text" class="form-control" v-model="inputs.address">
                                </div>
                            </div>

                            <div class="row info">
                                <div class="col">
                                    <label for=""><small>Message for recipent</small></label>
                                    <textarea name="" id="" cols="85" rows="10" v-model="inputs.message_recipient"></textarea>
                                </div>
                            </div>

                            <div class="choose-date">
                                <label for="" class="form-check-label"><b>Choose Date</b></label>
                                <input type="date" class="form-control" v-model="inputs.chosen_date">
                            </div>

                            <div class="free-delivery form-check">
                                <input type="radio" value="free-delivery" class="form-check-input" v-model="inputs.deliver_option">
                                <label for="" class="form-check-label">Free Delivery</label>
                            </div>

                            <div class="walk-in form-check">
                                 <input type="radio" value="walk-in" class="form-check-input" v-model="inputs.deliver_option">
                                 <label for="" class="form-check-label">Walk-in</label>
                            </div>

                            <div class="quantity form-group">
                                <label for=""><b>Quantity</b></label>
                                <input type="number" class="form-control" v-model="inputs.quantity">
                            </div>

                            <div class="submit">
                              <button class="btn btn">Check Out</button>
                            </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import {useRoute} from 'vue-router'
import Header from '../components/Header.vue'

const a = "sd"
const route = useRoute()
const orderItems = ref({
    
})
onMounted(async() => {
    await axios.get(`/api/check-product/${route.params.product_name}`).then(response => {
        orderItems.value = response.data
        // window.location.assign('http://127.0.0.1:8000/');
        
    })
})

const inputs = ref({})
const submit = async() => {
    console.log(inputs.value.deliver_option);
    await axios.get('/sanctum/csrf-cookie')
    await axios.post('/api/checkout',{
        product_name: orderItems.value.product_name,
        first_name: inputs.value.first_name,
        last_name:inputs.value.last_name,
        email: inputs.value.email,
        phone_number:inputs.value.phone_number,
        address:inputs.value.address,
        message_recipient:inputs.value.message_recipient,
        chosen_date:inputs.value.chosen_date,
        deliver_option:inputs.value.deliver_option,
        quantity:inputs.value.quantity,
        price:orderItems.value.price
    }).then(response => {
        console.log(response);
    })

}
</script>


<style scoped>
.container{
    background: white;
    margin-top:10px;
    box-shadow: 0px 0px 10px 0px gray;
}
label{
    font-size:1.5rem;
}
.form-check{
    display: flex;
    align-items: center;
    gap:10px;
}
.submit button{
    width:100%;
    padding:20px;
    font-weight: bold;
    color:white;
    
}
.submit{
    text-align: center;
    background: skyblue;
    border-radius: 10px;
}
.description{
    display: grid;
    text-align: start;
}
.description h4{
    color:rgb(235, 121, 69);
}
form{
    display: grid;
    gap:10px;
}
form b {
font-size: 20px;
}
small{
    font-size:13px;
    font-weight: bold;
}
.row .info input{
    border:0 solid ;
   border-radius: 0;
    border-bottom-width: 1px;
}
</style>