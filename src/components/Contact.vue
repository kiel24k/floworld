<template>
    <transition name="slide">
        <div class="slideMe" v-if="slideMe">
    <div class="row mainrow"> 
        <div class="contact-base">
            <div class="welcome-text">
            <h3>Let us hear from you!</h3>
            <small>we always want to hear from you! Let us know how we can best help you and we'll do our very best</small>
            </div>
            <form action="" @submit.prevent>
                <div class="Name">
                   <div class="row">
                  <div class="col">
                    <label for="">First Name</label>
                    <input type="text" placeholder="Your Name" class="form-control ">
                  </div>
                  <div class="col">
                    <label for="">Last Name</label>
                    <input type="text" placeholder="Your Name" class="form-control">
                  </div>
                </div>
                </div>
                <div class="details">
                    <label for="">Alias: <b class="text-bg-danger">optional</b> </label>
                    <input type="text" class="form-control" placeholder="Your Alias">
                </div>
    
                <div class="contact">
                    <div class="row">
                        <div class="col">
                            <label for="">Email</label>
                            <input type="text" class="form-control" placeholder="Your Email">
                        </div>
                        <div class="col">
                            <label for="">Phone Number</label>
                            <input type="text" placeholder="Your Number" class="form-control">
                        </div>
                    </div>
                </div>
    
                <div class="message">
                    <label for="">Message</label>
                    <textarea name="message" id="" cols="1" rows="10" class="form-control" placeholder="Tell us what we can help you"></textarea>
                </div>
    
                <div class="agreement form-check">
                    <input type="checkbox" class="form-check-input">
                    <label for="" class="form-check-label">Id like to receive more information about company; I understand and agree to the <a href=""><b>private policy</b></a></label>
                </div>
    
                <div class="submit">
                    <button class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        <div class="col contact-info">
             <div class="address">
                <p class="title">Address</p>
                <p>Blk 11 lot 25 Section 7 Phase 1 Belvedere homes Cavite, Tanza, Paradahan 1</p>
             </div>
                <div class="hours">
                    <p class="title">Service</p>
                    <p>Monday to Saturday</p>
                    <p>10:00 am - 10:00 pm</p>
                </div> 
                 <div class="my-info">
                    <p class="title">Information</p>
                    <p>kielbermudez200104@gmail.com</p>
                    <p>+639193471522</p>
                 </div> 
              <div class="social-media">
                
                <p class="title">Social Media</p>
                <div class="social-media-icon">
                    <img src="/public/icon/instagram.png" alt="">
                <img src="/public/icon/facebook.png" alt="">
                <img src="/public/icon/github.png" alt="">
                </div>
              </div>
        </div>
   
       </div>
    </div>
    </transition>

 
</template>


<script setup>
import { onMounted,ref } from 'vue';
import Header from "./Header.vue";

const slideMe = ref(false)
onMounted(() => {
 slideMe.value = true
})


</script>
<style scoped>
li{
    list-style: none;
}
.slideMe{
    transition: all linear 0.8s;
    transform: translateX(0);
}
.slide-enter-from,
.slide-leave-to {
    transform: translateX(20%);
    opacity: 0;
  }
.mainrow{
    width:70%;
    margin:auto;
    margin-top: 5rem;
}

.contact-base{
    width:50%;
    background:rgb(247, 245, 245);
    margin:auto;
    border-radius: 5px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 2px;
    font-weight: 400;
    padding:50px;
    border-top-left-redius:15px;
    border-bottom-left-radius: 15px;   
}
.submit button{
    width: 100%;
}

.contact-info{
    display: grid;
    align-content: center;
    align-items: center;
    width:50%;
    background-image:linear-gradient(to right, rgb(226, 38, 217) , rgb(245, 155, 94));
    padding:100px;
    border-top-right-redius:15px;
    border-bottom-right-radius: 15px;

}
.contact-info > div{
    height: 5rem;
    width: 20rem;
    margin:auto;
    color:white;
    
    
}
.contact-info p{
    margin:0px;
}
.title{
    color:rgb(177, 174, 174)
}
.social-media-icon{
    display: flex;
    gap:0.25rem;
   
    
}
.welcome-text{
    margin-bottom:2rem;
}

</style>