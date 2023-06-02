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
                            <router-link to="/login" class="dropdown-item">Login</router-link>
                            <router-link to="/register" class="dropdown-item">Register</router-link>
                            <router-link to="/team" class="dropdown-item">Our Team</router-link>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        </div>
                    </div>
                    <router-link to="/contact" class="nav-item nav-link">Contact</router-link>
                </div>
                <router-link to="/register" class="btn btn-primary py-2 px-4">Register</router-link>
            </div>
        </nav>

        <div class="container-xxl py-5 bg-dark hero-header mb-5">
            <div class="container my-5 py-5">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6 text-center text-lg-start">
                        <h1 class="display-3 text-white animated slideInLeft">Enjoy Our<br>Delicious Meal</h1>
                        <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor
                            diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem
                            sit clita duo justo magna dolore erat amet</p>
                            <router-link to="/menu" class="btn btn-primary py-2 px-4">Menu</router-link>
                    </div>
                    <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                        <img class="img-fluid" src="../../src/assets/img/dd.pizza.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Navbar & Hero End -->
</template>
<script>

export default {}
</script>
<styles>
</styles>