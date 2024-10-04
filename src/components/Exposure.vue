<script setup>
import locationsPhoto from "../assets/images/locations.png";

const service1SubHeading = "Find the high exposure locations";

</script>
<template>
  <div class="untree_co-section bg-light" id="features-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6 align-center">
          <h3 class="heading mb-4 text-primary" data-aos="fade-up" data-aos-delay="300">
            {{ service1SubHeading }}
          </h3>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
            <p class="text-primary">
              Look across your local area to find the busiest places
            </p>
            <ul class="list-unstyled ul-check primary text-primary">
              <li>Capture hotspot maps showing the actual footprint of local visitation</li>
              <li>Compare how hotspots change across the day or week</li>
              <li>Look at historical changes across the last 18 months</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <img :src="locationsPhoto" alt="Image" style="width: 100%;" />
        </div>
      </div>
    </div>
  </div>
</template>
