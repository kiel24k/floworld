<template>
    <Header/>
  <div class="row">
    <div class="col sidebar">
        <Sidebar/>
    </div>
    <div class="col">
        <div class="row">
            <h1>Reviews</h1>
        </div>
     <table class="table table-bordered">
        <thead>
            <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Message</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="review in reviews" :key="review">
                <td><p class="text-info">{{ review.email }}</p></td>
                <td>{{ review.first_name }}</td>
                <td>{{ review.last_name }}</td>
                <td><b>{{ review.message }}</b></td>
                <td>
                    <button class="btn btn-primary" @click="deleteMessage(review.id)">Thank You</button>
                </td>
            </tr>
        </tbody>
     </table>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue'

import axios from 'axios'
import { onMounted, ref } from 'vue';


const reviews = ref({})
const rev = onMounted(async() => {
    await axios.get('api/clientReviews').then(response => {
      reviews.value = response.data
     
     
    })
})

const deleteMessage =async (id) => {
   await axios.delete(`api/deleteReview/${id}`).then(response => {
    rev()
    console.log(response);
   })

}

</script>

<style scoped>
.sidebar{
    max-width: 12rem;
}
table{
width:70%;
margin:auto;
box-shadow: 0px 0px 10px 0px gray;
margin-top:5rem;
}
</style>