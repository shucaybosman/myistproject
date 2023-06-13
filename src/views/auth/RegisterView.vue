<template>
  <!-- Navbar & Hero Start -->
  <div class="container-xxl py-5 bg-dark hero-header mb-5">
        <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">Registration</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Register</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Navbar & Hero End -->

  <div class="login">
    <div class="container col-md-6">
      <form @submit.prevent="register()">
        <error v-if="error" :error="error" />
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
              <strong>Name:</strong>
              <input type="text" name="name" class="form-control" v-model="name" />
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
              <strong>Email:</strong>
              <input type="email" name="email" class="form-control" v-model="email" />
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
              <strong>Password:</strong>
              <input type="password" name="password" class="form-control" v-model="password" />
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
              <strong>Confirm Password:</strong>
              <input type="password" name="password_confirmation" class="form-control"  v-model="password_confirmation"/>

            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
              <button class="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Error from '../../components/ErrorComponent.vue';

// import { useAuthStore } from '../../stores/auth';
export default {
  components: {
    Error
  },
  
  data() {
    return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
       
       
    }
  },
  methods: {
    async register() {
     try {
      const response = await axios.post('register', {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
     });

     console.log(response)
     this.$router.push('/login');
     } catch(e) {
      this.error = 'Enter correct detail, ensure to use strong password'
     }
    } 
    
  },
  

};
</script>

<style></style>
