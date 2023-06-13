<template>

    <!-- Navbar & Hero Start -->
    <div class="container-xxl py-5 bg-dark hero-header mb-5">
        <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">Our Login</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Login</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Navbar & Hero End -->

    <div>
        <div class="container col-md-6">
            <form @submit.prevent="login()">
                <error style="font-size: smaller;" v-if="error" :error="error" />
                <div class="row">
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
                        <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
                            <button class="btn btn-primary">Login</button>
                            <router-link to="/register"><h6>don't have an account?</h6></router-link>
                            

                        </div>


                    </div>
                </div>
            </form>


        </div>
    </div>
</template>
<script>
// import { useAuthStore } from '../../stores/auth';
import axios from 'axios';
import Error from '../../components/ErrorComponent.vue';
export default {
    components: {
        Error
    },
    
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
       async login() {
        try {
            const response = await axios.post('login', {
            email: this.email,
            password: this.password,
        });

        localStorage.setItem('token', response.data.token);
        this.$router.push('/');
        } catch (e) {
            this.error = 'Invalid username/password'
        }
            
        } 
    },


};
</script>

<style></style>