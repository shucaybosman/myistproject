<template>
    <!-- Navbar & Hero Start -->
    <div class="container-xxl position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
                <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Barakat</h1>
                <!-- <img src="../../src/assets/img/logo.png" alt="Logo"> -->
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0 pe-4">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <router-link to="/about" class="nav-item nav-link">About</router-link>
                    <router-link to="/service" class="nav-item nav-link">Service</router-link>
                    <router-link to="/menu" class="nav-item nav-link">Menu</router-link>
                    <div class="nav-item dropdown">
                        <router-link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</router-link>
                        <div class="dropdown-menu m-0">
                            <router-link to="/login" class="dropdown-item" v-if="!user"> Login</router-link>
                            <router-link to="/register" class="dropdown-item" v-if="!user"> Register </router-link>
                            <button class="dropdown-item" v-if="user" @click="handleClick"><router-link to="" class="fa fa-sign-out-alt">Logout</router-link></button>

                            

                            <router-link to="/team" class="dropdown-item">Our Team</router-link>
                            <router-link to="/testimonial" class="dropdown-item">Testimonial</router-link>
                            <!-- <a href="testimonial.html" class="dropdown-item">Testimonial</a> -->
                        </div>
                    </div>
                    <router-link to="/contact" class="nav-item nav-link">Contact</router-link>
                </div>
                <!-- <router-link to="/register" class="btn btn-primary py-2 px-4">Register</router-link> -->
                
            </div>
        </nav>

       
    </div>
    <!-- Navbar & Hero End -->
</template>

   <script>
   import axios from 'axios';
   export default {
     props: [ "user"],
     data() {
       return {
         user: null,
         currentTime: new Date().toLocaleTimeString()
       }
     },
     async created() {
       const response = await axios.get('user');
       this.user = response.data
       
     },
     methods: {
         async handleClick() {
         this.handleLogout();
         this.refreshPage();
       },
       async handleLogout() {
         if (confirm('Are you sure to Logout?')) {
           localStorage.removeItem('token');
         }
       },
       async refreshPage() {
         location.reload();
       },
     },
     
   }
     </script>
<styles>
</styles>