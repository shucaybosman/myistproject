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
                            <router-link to="/login" class="dropdown-item" v-if="!userStore.token">Login</router-link>
                            <router-link to="/register" class="dropdown-item" v-if="!userStore.token">Register</router-link>
                            <router-link to=""  class="btn btn-primary py-2 px-4" @click="userStore.logoutUser" v-else >Logout</router-link>

                            <router-link to="/team" class="dropdown-item">Our Team</router-link>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        </div>
                    </div>
                    <router-link to="/contact" class="nav-item nav-link">Contact</router-link>
                </div>
                <router-link to="/register" class="btn btn-primary py-2 px-4">Register</router-link>
                <div ></div>
            </div>
        </nav>

       
    </div>
    <!-- Navbar & Hero End -->
</template>
<script>
import { useAuthStore } from '../stores/auth';
  import axios from 'axios';
  export default {
    setup() {
      let userStore = useAuthStore();
      return {
        userStore
      };
  
    },
    data() {
      return {
        user: {
          name: null,
          
        }
      }
    },
    async created() {
      const response = await axios.get('user');
      this.user = response.data;
    },
  
  };
  </script>
<styles>
</styles>