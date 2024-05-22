<template>
    <div class="update-modal">
        <div class="modal-main p-5">
          <div class="cancel-button">
            
              <button @click="closeModal">
                  <img src="/public/icon/exit.png" width="40px" alt="">
              </button>
             
          </div>
         <form action="" @submit.prevent="submit">
           
            <input type="hidden" v-model="productData.id" name="" id="">
          <div class="product-name form-group">
              <label for=""><b>Product Name</b></label>
              <input type="text" class="form-control" placeholder="Product Name" v-model="productData.product_name">
          </div>
  
          <div class="product-quantity form-group">
              <label for=""><b>Product Quantity</b></label>
               <input type="text" class="form-control" placeholder="Quantity" v-model="productData.quantity">
          </div>
  
          <div class="product-price form-group">
              <label for=""><b>Price</b></label>
              <input type="text" class="form-control" placeholder="Price" v-model="productData.price">
          </div>
  
          <div class="product-size form-group">
              <label for=""><b>Size</b></label>
              <select class="form-select" name="" id="">
                  <option value="">XL</option>
                  <option value="">L </option>
                  <option value="">M</option>
                  <option value="">S</option>
              </select>
          </div>
          <div class="date-update form-group">
              <label for=""><b>Date update</b></label>
              <input type="text" class="form-control" >
          </div>
          <div class="product-description form-group">
            <label for=""><b>Product Description</b></label>
            <br>
            <textarea class="form-control" cols="40" rows="10" v-model="productData.description"></textarea>
          </div>
         <div class="submit text-end mt-3">
            <button class="btn btn-primary">Update</button>
         </div>
         </form>
        </div>
      </div>
      
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter()

// const dif = defineProps(['hideModal'])
const hideModal = defineEmits(['hideModal'])
const props = defineProps(['name', 'id', 'list'])


onMounted(() => {
 console.log(props);
 getProduct()
 console.log(productData.value.product_name);
})
const closeModal = () => {
    hideModal('hideModal')
}


const productData = ref({})
const getProduct = async () => {
    await axios.get(`/api/product-update-list/${props.id}`).then(response => {
        productData.value = response.data.data
        
    })
}



const submit = async () => {
   
    await axios.get('/sanctum/csrf-cookie')
    await axios.post(`/api/update-product/${productData.value.id}`,{
        product_name: productData.value.product_name,
        quantity: productData.value.quantity,
        price: productData.value.price,
        size: productData.value.size,
        description: productData.value.description,
        category: productData.value.category
    }).then(response => {
       if(response.status == 200){
        closeModal()
        props.list()
       }
    }).catch(error =>{
        console.log(error);
    })
}

 </script>

<style scoped>
.update-modal{
    position:absolute;
    width: 100%;
    height: 100%;
    background: rgb(235, 236, 235, 0.5);
    backdrop-filter: blur(5px);
    top:0;
    left:0;
    display: grid;
    justify-content: center;
    align-content: center;
}
.modal-main{
    width: 40rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0px 0px 20px 0px gray;
}
input,select{
    width: 30rem;

}
form{
    display: grid;
    justify-content: center;
}
.cancel-button{
    text-align: end;
}
.cancel-button button{
    background: 0;
    border:0;
}
</style>