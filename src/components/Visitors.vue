<script setup>
import investorsPhoto from "../assets/images/investors.png";

const service1SubHeading = "Find your accessible visitors";

</script>
<template>
  <div class="untree_co-section bg-light" id="features-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6 align-center">
          <h3 class="heading mb-4 text-primary" data-aos="fade-up" data-aos-delay="100">
            {{ service1SubHeading }}
          </h3>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
            <p class="text-primary">
              Map where your local residents can easily reach your location 
            </p>
            <ul class="list-unstyled ul-check primary text-primary">
              <li>How many people can access your location within a short walk or drive?</li>
              <li>What is the demographic of your catchment?</li>
              <li>Know where to target your marketing efforts.</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <img :src="investorsPhoto" alt="Image" style="width: 100%;" />
        </div>
      </div>
    </div>
  </div>
</template>
