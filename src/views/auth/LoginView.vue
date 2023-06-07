<template>

    <!-- Navbar & Hero Start -->
    <div class="container-xxl py-5 bg-dark hero-header mb-5">
        <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Navbar & Hero End -->

    <div>
        <div class="container col-md-6">
            <form @submit.prevent="login()">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="form-group">
                            <strong>Email:</strong>
                            <input type="email" name="email" class="form-control" v-model="user.email" />
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="form-group">
                            <strong>Password:</strong>
                            <input type="password" name="password" class="form-control" v-model="user.password" />
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
                            <button class="btn btn-primary">Login</button>
                            <router-link to="/register"><h6>don't have an account?</h6></router-link>
                            <router-link to="/forgot"><h5>Forgot Password?</h5></router-link>

                        </div>


                    </div>
                </div>
            </form>


        </div>
    </div>
</template>
<script>
import { useAuthStore } from '../../stores/auth';
export default {
    setup(){
        let userStore=useAuthStore();
        return {
            userStore
        };
     },
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
            isLoggedIn: false,
        }
    },
    methods: {
        login() {
            this.userStore.user = this.user;
            this.userStore.loginUser();

            this.$router.replace('/');
        },
    },


};
</script>

<style></style>