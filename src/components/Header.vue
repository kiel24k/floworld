<template>
    <div class="row">
        <div class="col">
            <ul class="navbar nav item-one">
                <li class="nav-item">
                   <router-link class="nav-link" :to="{name: 'HomePage'}"> <img src="/public/icon/logo.png" alt="" width="100px" class="img-fluid"></router-link>
                </li>
            </ul>
        </div>
        <div class="col two">
          <ul class="navbar nav">
            <li>
                <router-link class="nav-link" :to="{name: 'HomePage'}">Home</router-link>
            </li>
            <li>
                <router-link class="nav-link" :to="{name: 'ProductPage'}">Product</router-link>
            </li>
            <li>
                <router-link class="nav-link" :to="{name: 'AboutUsPage'}">About Us</router-link>
            </li>
            <li>
                <router-link class="nav-link" :to="{name: 'BlogPage'}">Blog</router-link>
            </li>
            <li>
                <router-link class="nav-link" :to="{name: 'ContactPage'}">Contact</router-link>
            </li>
          </ul>
        </div>
    </div>
</template>

<script setup>
    

</script>

<style scoped>
.row{

}
ul{
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    gap:50px;
}
a{
    color:rgb(53, 51, 51);
    font-size: medium;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 3px;
}

.two{
    display: flex;
    justify-content: flex-start;
}
.item-one{
    display: flex;
    justify-content: flex-start;
    margin-left:7rem
}
</style>