<template>
    <div class="product-list">
        <UpdateProduct name="kiel" :list="sheesh" :id="productId" @hideModal="updateModal = false" v-if="updateModal"/>
       <div class="container mb-4">
        <div class="row table-top">
            <div class=" col input">
               
                    <input type="text" class="form-control" v-model="inputSearch" placeholder="Search">
                
               
            </div>
            <div class="col add-product text-end">
                <router-link :to="{name:'AddProduct'}">
                    <button class="btn btn-primary">Add Product</button>
                </router-link>
            </div>
        </div>
       </div>
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
               
                <tr v-for="product in productList.data" :key="product">
                    <td>
                        <span>
                            <img :src="`http://127.0.0.1:8000/storage/products/${product.image}`" width="50px" alt="">
                            <b>{{ product.product_name }}</b>
                        </span>
                    </td>
                    <td>{{product.description}}</td>
                    <td>{{ product.quantity }}</td>
                    <td class="price"><b>{{ product.price}}</b></td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.size }}</td>
                    <td>{{product.date_added}}</td>
                    <td>
                        <span class="action">
                            <button @click="update(id = product.id  )"><img src="/public/icon/edit.svg" width="15" alt=""></button>
                            <button @click.prevent="deleteProduct(id = product.id)"><img src="/public/icon/delete.svg" width="15" alt=""></button>
                        </span>
                    </td>
                </tr>
                <Bootstrap5Pagination
                :data="productList"
                @pagination-change-page="sheesh"/>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import axios from 'axios';
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { onMounted,onBeforeMount, ref, watch } from 'vue';
import UpdateProduct from './UpdateProduct.vue';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';


const imageUrl = ref({})
const productList = ref({})
const inputSearch = ref('')



const sheesh = onMounted(async (page = 1)=> {
    await axios.get(`/api/product-list?page=${page}`).then(response => {
        productList.value = response.data
    })
})
const updateModal = ref(false)
let productId;
let update = (id) => {
    updateModal.value = true
    productId = id
}


watch(inputSearch, async() => {
    await axios.get(`/api/product-list?search=${inputSearch.value}`).then(response => {
        productList.value = response.data
    })

   
})





const deleteProduct = async (id) => {
    await axios.delete(`/api/delete-product/${id}`).then(response => {
        
        if(response.status = 200){
            alert("success")
            sheesh()
        }

    }).catch(err => {
        console.log(err);
    })
    
  }
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
.table-top input{
    max-width:15rem;
}




</style>