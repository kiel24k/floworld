<template>
    <Header/>
<div class="container-fluid">
    <div class="row dashboard">
        <div class="col bg-light sidebar">
            <Sidebar/>
        </div>
        <div class="col content">
            <div class="content-one">
                <div class="col">
                    <h4>Welcome to dashboard</h4>
                    <b> {{ data.first_name }} {{ data.last_name }}</b>
                </div>
                <div class="col">
                    <button class="btn btn-primary">Add Product</button>
                </div>
            </div>
            <div class="row">
                <div class="col content-two">
                    <div class="orders-received">
                        <div class="orders-received-info">
                            <b>400</b>
                            <b>Orders Received</b>
                            <small class="text-success">15%</small>
                        </div>
                        <div class="orders-received-icon">
                        <img src="/public/icon/532624_bank_card_checkout_credit_financial_icon.svg" width="50px" alt="">
                        </div>
                    </div>


                    
                        <div class="orders-received">
                            <div class="orders-received-info">
                                <b>P6433</b>
                                <b>Average Sales</b>
                                <small class="text-success">15%</small>
                            </div>
                            <div class="orders-received-icon">
                            <img src="/public/icon/2431362_chart_goal_graph_sales_icon.svg" width="50px" alt="">
                            </div>
                        </div>
                        
                   
                        <div class="orders-received">
                            <div class="orders-received-info">
                                <b>400</b>
                                <b>New customer this month</b>
                                <small class="text-success">8.9k</small>
                            </div>
                            <div class="orders-received-icon">
                            <img src="/public/icon/1886784_user_group_team_men_collaboration_icon.svg" width="50px" alt="">
                            </div>
                        </div>
                   
                        <div class="orders-received">
                            <div class="orders-received-info">
                                <b>564</b>
                                <b>Pending orders</b>
                                <small class="text-success">10%</small>
                            </div>
                            <div class="orders-received-icon">
                            <img src="/public/icon/512532_challenge_clock_sand_time_icon.svg" width="50px" alt="">
                            </div>
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col content-three">
                    <div class="chart">
                            <canvas id="myChart"></canvas>
                    </div>
                    <div class="doughnut">
                        <canvas id="dough"></canvas>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col content-four">
                    <div class="">1</div>
                    <div class="">2</div>
                    <div class="">3</div>
                </div>
            </div>
            
        </div>
    </div>
</div>
</template>

<script setup>
import Header from '../admin/Header.vue'
import Sidebar from '../admin/Sidebar.vue'
import axios from 'axios';
import { onMounted, ref } from 'vue';

const data = ref({})

onMounted(async () => {
    await axios.get('api/user').then(response => {
        data.value = response.data
        console.log(data.value.id);
    })
})
onMounted(() => {
    const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 4,2,2,5,12,2,1],
        borderWidth: 1,
        backgroundColor: [
      'pink',
      'violet',
      'rgb(138, 43, 226)',
      'blue',
      'cyan',
      'green',
      'rgb(125, 233, 28)',
      'yellow',
      '#FFAE42',
      'orange',
      'rgb(255,116,0)',
      'red'
    ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const dough = document.getElementById("dough")
    new Chart(dough,{
        type: 'pie',
        data: {
            labels: [
            'Female',
            'Male', 
            'Kids'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
        },
       

    })

})

</script>


<style scoped>
.dashboard{
    display: flex;
    gap:0;
}
.sidebar{
    max-width: 12rem;
}
.content{
    background: rgb(213, 233, 241);
    display: grid;
    gap:30px;
}
.content-one{
    display: flex;
    justify-content:space-evenly;
}
.content-one >div:nth-child(2){
    text-align: end;
}
.content-two{
    display: flex;
    flex-wrap: wrap;
    gap:3rem;
    align-content: center;
    justify-content: center;
}
.content-two > div{
    background: rgb(240, 243, 245);
    width: 23.5rem;
    height: 10rem;
    border-radius:6px;
    box-shadow: 1px 1px 3px 0px gray;
}
.content-three{
    display: flex;
    flex-wrap:wrap;
    gap:2rem;
    justify-content: center;
   
}
.content-three > div{
    width: 48%;
    background: rgb(240, 243, 245);
    height: 20rem;
    border-radius:6px;
    box-shadow: 1px 1px 3px 0px gray;
}
.content-four{
display: flex;
flex-wrap: wrap;
justify-content: center;
gap:50px;
}

.content-four > div:nth-child(1){
width: 23%;
background: rgb(240, 243, 245);
border-radius:6px;
height: 40rem;
box-shadow: 1px 1px 3px 0px gray;
}
.content-four > div:nth-child(2){
  width:48%;
  background: rgb(240, 243, 245);
  border-radius:6px;
height: 40rem;
box-shadow: 1px 1px 3px 0px gray;
}
.content-four > div:nth-child(3){
width: 23%;
background: rgb(240, 243, 245);
border-radius:6px;
height: 40rem;
box-shadow: 1px 1px 3px 0px gray;
}
.orders-received{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap:5rem;
    
}
.orders-received-info{
    display: grid;
}
.chart{
    display: grid;
    justify-content: center;
    justify-content: center;
}
.doughnut{
    justify-content: center;
    display: grid;
    align-content: center;
}


</style>