<script setup>
import walkabilityPhoto from "../assets/images/walkability.png";

const service1SubHeading = "Examine local walkability";

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
              Plot the walking catchment for any location
            </p>
            <ul class="list-unstyled ul-check primary text-primary">
              <li>Map the precise walkable areas across a neighbourhood</li>
              <li>Compare your site’s walkability to other places</li>
              <li>Drill into walkability within 10, 20 and 30 minutes ranges</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <img :src="walkabilityPhoto" alt="Image" style="width: 100%;" />
        </div>
      </div>
    </div>
  </div>
</template>
