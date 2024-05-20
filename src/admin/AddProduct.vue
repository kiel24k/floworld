<template>
    <Header/>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-light sidebar">
                <Sidebar/>
            </div>
              <div class="col">
                <div class="row ">
                    <div class="page-title">
                        <h1>Add Product</h1>
                        <small>Add your product for your customer</small>
                    </div>
                  </div>
                  <form action="" @submit.prevent="submit" enctype="multipart/form-data">
                 <div class="row ">
                    
                    <div class="col">
                        <div class="basic-information">
                            <h3>Basic information</h3>
                            
                               <div class="product-name-field form-group">
                                <label for="">Input Your Product Name</label>
                                <input type="text" class="form-control" placeholder="Product Name" v-model="product.product_name">
                               </div>

                               <div class="description-field">
                                <label for="">Input Your Description</label>
                                <br>
                                <textarea v-model="product.description" placeholder="Description" id="" class="form-control" cols="50" rows=10></textarea>
                               </div>
                           
                        </div>
                    </div>
                    <div class="col">
                        
                       
                        <div class="image-section">
                            <h3>Product Image</h3>
                               <div class="product-name-field form-group">
                                <label for="">Input Image</label>
                                <input type="file" class="form-control" accept="image/*" @change="image" multiple>
                                <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" width="150px" height="100px" />
                               </div>
                        </div>

                        <div class="col mt-4">
                            <div class="category-section">
                                <h3>Category</h3>
                                <div class="product-category">
                                    <label for="">Product Category</label>
                                    <select class="form-select" v-model="product.category">
                                        <option value="rose">Rose</option>
                                        <option value="sunflower">Sunflower</option>
                                        <option value="peonies">Peonies</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                   
                
                  </div>
                
                 <div class="row">
                    <div class="col">
                        <div class="price form-group">
                            <h3>Price</h3>
                            <label for="">Quantity</label>
                            <input type="number" value="1" v-model="product.quantity" class="form-control">
                            <label class="sr-only" for="inlineFormInputGroupUsername2">Price</label>
                            <div class="input-group mb-2 mr-sm-2">
                              <div class="input-group-prepend">
                                <div class="input-group-text">₱</div>
                              </div>
                              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="00" v-model="product.price">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="size">
                            <h3>Select Size</h3>
                            <label for="">Add Size</label>
                            <select class="form-select" name="" v-model="product.size" id="">
                                <option value="XL">XL</option>
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="S">S</option>
                            </select>
                            <label for="">Product date</label>
                            <input type="text" class="form-control" v-model="product.date_added" value="Data today">
                        </div>
                    </div>
                </div>
                <div class="submit">
                    <button class="btn btn-primary">Submit</button>
                </div>
             </form>
            </div>
        </div>
    </div>

   
</template>

<script setup>


import { onMounted, ref } from 'vue';
import Header from '../admin/Header.vue'
import Sidebar from '../admin/Sidebar.vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

const route = useRouter()



const product = ref({
    product_name: '',
    description: '',
    quantity: '',
    price: '',
    image: null,
    category: '',
    size: '',
    date_added:''
})

const file = ref(null);
const fileName = ref('');
const imageUrl = ref('');
const image = (event) => {
   
    const selectedFile = event.target.files[0];
    
      if (selectedFile) {
        file.value = selectedFile;
        fileName.value = selectedFile.name;
        imageUrl.value = URL.createObjectURL(selectedFile);
       
        
}
}
const submit = async (e) => {
e.preventDefault();
console.log(file.value);
const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}
    const data = {
    product_name: product.value.product_name,
    description: product.value.description,
    quantity: product.value.quantity,
    price: product.value.price,
    image: file.value,
    category: product.value.category,
    size: product.value.size,
    date_added: product.value.date_added
  }
    await axios.get('/sanctum/csrf-cookie')
    await axios.post('/api/product-add',data,config).then(response => {
        if(response.status == 200){
          route.push("product-list")
        }
    }) 
  }
{
}
</script>

<style scoped>
.container-fluid{
    background: rgb(255, 255, 255);
    height: 100%;
}
.sidebar{
    max-width: 12rem;
}

.basic-information{
    max-width:100%;
    background: white;
    box-shadow: 2px 2px 15px gray;
    padding:30px;
    border-radius: 10px;
}
.image-section{
    max-width:100%;
    background: white;
    box-shadow: 2px 2px 15px gray;
    padding:30px;
    border-radius: 10px;
    height:15rem;
}
.category-section{
    max-width:100%;
    background: white;
    box-shadow: 2px 2px 15px gray;
    padding:30px;
    border-radius: 10px;
    height: 11rem;
}
.price{
    max-width:100%;
    background: white;
    box-shadow: 2px 2px 15px gray;
    padding:30px;
    border-radius: 10px;
}
.size{
    max-width:100%;
    background: white;
    box-shadow: 2px 2px 15px gray;
    padding:30px;
    border-radius: 10px;
    min-height:14.5rem;

}
form{
    display: grid;
    gap:15px;
}

    


</style>

