<template>
  
  <!-- Navbar & Hero Start -->
  <div class="container-xxl py-5 bg-dark hero-header mb-5">
    <div class="container text-center my-5 pt-5 pb-4">
      <h1 class="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center text-uppercase">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item text-white active" aria-current="page">Menu</li>
        </ol>
      </nav>
    </div>
  </div>
  <!-- Navbar & Hero End -->


  <!-- Menu Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
        <h1 class="mb-5">Most Popular Items</h1>
      </div>
      <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
        <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
          <li class="nav-item">
            <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
              <!-- <i class="fa fa-coffee fa-2x text-primary"></i> -->
              <div class="ps-3">
                <small class="text-body">Popular</small>
                <h6 class="mt-n1 mb-0">MEALS</h6>
              </div>
            </a>
          </li>

        </ul>
        <div class="tab-content">
          <div id="tab-1" class="tab-pane fade show p-0 active">
            <div class="row g-4">
              <div class="col-lg-6">
                <div class="d-flex align-items-center">
                  <img class="flex-shrink-0 img-fluid rounded" src="../../src/assets/img/c.burger.webp" alt=""
                    style="width: 80px;">
                  <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span class="text-primary">ksh 300</span>
                    </h5>
                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="d-flex align-items-center">
                  <img class="flex-shrink-0 img-fluid rounded" src="../../src/assets/img/chicken with chips.jpg" alt=""
                    style="width: 80px;">
                  <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken W/ Chips</span>
                      <span class="text-primary">ksh 480</span>
                    </h5>
                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="d-flex align-items-center">
                  <img class="flex-shrink-0 img-fluid rounded" src="../../src/assets/img/chips.webp" alt=""
                    style="width: 80px;">
                  <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                      <span>Chips Plain</span>
                      <span class="text-primary">ksh 240</span>
                    </h5>
                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="d-flex align-items-center">
                  <img class="flex-shrink-0 img-fluid rounded" src="../../src/assets/img/chickwburgerextra.jpg" alt=""
                    style="width: 80px;">
                  <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger W/ Extra Chips</span>
                      <span class="text-primary">ksh 800</span>
                    </h5>
                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="d-flex align-items-center">
                  <img class="flex-shrink-0 img-fluid rounded" src="../../src/assets/img/l.pizza.jpg" alt=""
                    style="width: 80px;">
                  <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                      <span>Pizza Large</span>
                      <span class="text-primary">ksh 950</span>
                    </h5>
                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="d-flex align-items-center">
                  <img class="flex-shrink-0 img-fluid rounded" src="../../src/assets/img/l.pizza.jpg" alt=""
                    style="width: 80px;">
                  <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                      <span> Pizza Medium</span>
                      <span class="text-primary">ksh 840</span>
                    </h5>
                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="d-flex align-items-center">
                  <img class="flex-shrink-0 img-fluid rounded" src="../../src/assets/img/beef.burger2.webp" alt=""
                    style="width: 80px;">
                  <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                      <span>Beef Burger</span>
                      <span class="text-primary">ksh 400</span>
                    </h5>
                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="d-flex align-items-center">
                  <img class="flex-shrink-0 img-fluid rounded" src="../../src/assets/img/l.pizza.jpg" alt=""
                    style="width: 80px;">
                  <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                      <span>Small Pizza</span>
                      <span class="text-primary">ksh 700</span>
                    </h5>
                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Menu End -->
</template>

<script>

</script>

<style></style>