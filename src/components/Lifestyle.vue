<script setup>
import lifestyle from "../assets/images/lifestyle.png";
const buttonStartFree = "Start Free";
const buttonBookACall = "Book a call";

const service1SubHeading = "Find your accessible visitors";

</script>
<template>
  <div class="untree_co-section" id="lifestyle">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-7 align-center">
          <h2 style="color: white;">Need lifestyle data now?</h2>
        </div>
        <div class="col-lg-5" data-aos="fade-right" data-aos-delay="400">
          <p data-aos="fade-up" data-aos-delay="200" style="text-align: right;">
            <a href="#features-section" class="btn btn-primary smoothscroll" style="margin-right: 5px">{{
              buttonStartFree }}</a>
            <a href="#pricing-section" class="btn btn-outline-primary smoothscroll pricing">{{ buttonBookACall
              }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
