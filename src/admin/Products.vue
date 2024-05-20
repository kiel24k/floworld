<template>
    <Header/>
    <div class="row">
        <div class="col sidebar">
         <Sidebar/>
        </div>
        <div class="col">
            <div class="row">
                <div class="products-header">   
                    <div class="col"><h3>Products</h3></div>
                    <div class="col text-end"><button class="btn btn-primary">Add</button></div>
                </div>
            </div>

            <div class="product-list">
                <UpdateProduct name="kiel" :id="productId" @hideModal="updateModal = false" v-if="updateModal"/>
                <table class="table table-light table-bordered table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Size</th>
                            <th>Date Added</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in productList" :key="product">
                           
                            <td><b>{{ product.product_name }}</b></td>
                            <td>{{product.description}}</td>
                            <td>{{ product.quantity }}</td>
                            <td class="price"><b>{{ product.price}}</b></td>
                            <td>{{ product.category }}</td>
                            <td>{{ product.size }}</td>
                            <td>{{product.date_added}}</td>
                            <td>
                                <span class="action">
                                    <button @click="update(id = product.id  )"><img src="/public/icon/edit.svg" width="15" alt=""></button>
                                    <button><img src="/public/icon/delete.svg" width="15" alt=""></button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>

        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { onMounted,onBeforeMount, ref } from 'vue';
import UpdateProduct from './UpdateProduct.vue';

const productList = ref({})
onMounted(async ()=> {
    await axios.get('/api/product-list').then(response => {
        productList.value = response.data
    })
})

const updateModal = ref(false)
let productId;
let update = (id) => {
    updateModal.value = true
    productId = id
}
onMounted(() => {
    let ss = document.querySelector(".sidebar")
    console.log(ss);
  
   
   
})
</script>

<style scoped>
.container-fluid{
    background: rgb(255, 255, 255);
    height: 100%
}
.sidebar{
    max-width: 12rem;
}
.products-header{
    display: flex;
    
}
.products-header >div:nth-child(2) button{
   margin-right: 20px;
}

td{
    padding:10px;
    border:0;
}
th{
    text-transform: uppercase;
    border:0;
}
table{
    background: red;
    border:solid 1px rgb(196, 196, 196);
    box-shadow: 0px 0px 20px 0px gray;
    width: 90%;
    margin:auto;
    letter-spacing:0.5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-transform: capitalize;
}
.price{
    color:green;
}
.action {
    display: flex;
    gap:5px;
}
.action button{
    border:0;
    background: none;
}




</style>