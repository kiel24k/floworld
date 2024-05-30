<template>
 <Header/>
 
 <div class="row">
    <div class="col sidebar">
        <Sidebar/>
    </div>
    <div class="col">
        <h2>Orders</h2>
        <table class="table table-bordered mt-5">
           <thead>
            <tr>
                <th>Email</th>
                <th>Order</th>
            </tr>
           </thead>
           <tbody>
            <tr v-for="order in orders" :key="order">
                <td>{{ order.email }}</td>
                <td>{{order.product_name}}</td>
            </tr>
           </tbody>
        </table>
        
    </div>
 </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue'

const orders = ref({})

onMounted(async() => {
    await axios.get('/api/admin-orders').then(response => {
        orders.value = response.data
       
       
    })
})

</script>

<style scoped>
.sidebar{
    max-width: 12rem;
}
table{
    width: 50%;
    margin: auto;
    box-shadow: 0px 0px 10px 0px gray;
}
td{
    max-width:40px;
}
</style>