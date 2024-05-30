<template>
    <div class="sidebar">
        <ul class="navbar nav">
            <li class="nav-item">
                <span>
                <img src="/public/icon/dashboard.svg" width="30px" alt="">
                <router-link :to="{name: 'AdminHome'}" class="nav-link text-dark">
                    <b>Dashboard</b>
                </router-link>
              </span>
            </li>
            <li class="nav-item">
                <span>
                  <img src="/public/icon/productsIcon.svg" width="25px" alt="">
                  <router-link :to="{name: 'ProductList'}" class="nav-link text-dark">
                      <b>Products</b>
                  </router-link>
                </span>
              </li>
              <li class="nav-item">
                <span>
                  <img src="/public/icon/categories.svg" width="25px" alt="">
                  <router-link :to="{name: 'AdminProductCategories'}" class="nav-link text-dark">
                      <b>Categories</b>
                  </router-link>
                </span>
              </li>
              <li class="nav-item">
                <span>
                  <img src="/public/icon/532624_bank_card_checkout_credit_financial_icon.svg" width="25px" alt="">
                  <router-link :to="{name: 'AdminOrders'}" class="nav-link text-dark">
                      <b>Orders</b>
                  </router-link>
                </span>
              </li>
              <li class="nav-item">
                <span>
                  <img src="/public/icon/8396418_email_mail_message_letter_contact_icon.svg" width="25px" alt="">
                  <router-link :to="{name: 'Reviews'}" class="nav-link text-dark">
                      <b>Reviews</b>
                  </router-link>
                </span>
              </li>
              <!-- <li class="nav-item">
                <span>
                  <img src="/public/icon/3018581_coupons_currency_deduction_discount_payment_icon.svg" width="25px" alt="">
                  <router-link :to="{name: 'AdminHome'}" class="nav-link text-dark">
                      <b>Coupons</b>
                  </router-link>
                </span>
              </li>
              <li class="nav-item">
                <span>
                  <img src="/public/icon/4092564_profile_about_mobile ui_user_icon.svg" width="25px" alt="">
                  <router-link :to="{name: 'AdminHome'}" class="nav-link text-dark">
                      <b>Profile</b>
                  </router-link>
                </span>
              </li>
              <li class="nav-item">
                <span>
                  <img src="/public/icon/103665_notes_settings_icon.svg" width="25px" alt="">
                  <router-link :to="{name: 'AdminHome'}" class="nav-link text-dark">
                      <b>Shop settings</b>
                  </router-link>
                </span>
              </li>
              <li class="nav-item">
                <span>
                  <img src="/public/icon/9042660_multiple_pages_icon.svg" width="25px" alt="">
                  <router-link :to="{name: 'AdminHome'}" class="nav-link text-dark">
                      <b>Pages</b>
                  </router-link>
                </span>
              </li> -->
              
            
        </ul>
    </div>
</template>

<style scoped>
.nav-item span{
    display: flex;
    gap:10px;
}
.navbar{
    display: grid;
    gap:25px;
}
.sidebar{
  background: rgb(255, 255, 255);
  height: 100%;
}
</style>