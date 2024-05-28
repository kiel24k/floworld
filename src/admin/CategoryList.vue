<template>
<div class="category-modal">
   <div class="table">
    <div class="exit">
        <img src="/public/icon/exit.png" width="50px" alt="" @click="closeCategory">
    </div>
    <table class="table table-bordered table-light ">
        <thead>
           <tr>
         <th>Image</th>
         <th>Product Name</th>
         <th>Description</th>
         <th>Quantity</th>
         <th>Price</th>
         <th>Size</th>
     </tr>
        </thead> 
        <tbody>
          <tr v-for="item in category" :key="item">
             <td>
                 <img :src="`http://127.0.0.1:8000/products/${item.image}`" width="100px" height="90px" alt="">
             </td>
             <td>{{ item.product_name }}</td>
             <td>{{item.description}}</td>
             <td>x{{item.quantity}}</td>
             <td>P{{ item.price }}</td>
             <td>{{ item.size }}</td>
 
          </tr> 
         </tbody>
     </table>
   </div>
</div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
const category = ref({})
const flowerValue = defineProps(['flower'])
const modal = defineEmits(['category'])
onMounted (async() => {
   
await axios.get(`api/admin-category-product/${flowerValue.flower}`).then(response => {
    category.value = response.data
})
})
  

const closeCategory = () => {
    modal('category')
}



</script>
<style scoped>
.category-modal{
    position:absolute;
    background: rgba(253, 253, 253, 0.7);
    backdrop-filter: blur(10px);
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 999;
    top:0;
    bottom:0;
}
td{
    min-width:15rem;
}
.exit {
    text-align: end;
    cursor: pointer;
    
}
.exit img{
    transition: all linear 0.3s;
}
.exit img:hover{
    transform: rotate(90deg);
}
table{
    box-shadow:0px 0px 10px 0px gray;
}
</style>