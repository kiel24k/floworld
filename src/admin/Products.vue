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
                    
                </div>
            </div>    
            <div class="text-error" v-if="errorCap">
                {{ errorCap }}
            </div> 
           <Suspense v-else>
                <template #default>
                    
                    <ProductList/>
                </template>
                <template #fallback>
                    <div class="text-center">
                        <h1>Loading</h1>
                    </div>
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script setup>
import ProductList from './ProductList.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { onErrorCaptured, ref } from 'vue'

const errorCap = ref(false)
onErrorCaptured(() => {
    errorCap.value = 'Something went wrong'
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