<script setup>
import peoplePhoto from "../assets/images/people.png";

const service1SubHeading = "Discover the top reason people visit your location";

</script>
<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <img :src="peoplePhoto" alt="Image" style="width: 100%;" />
        </div>
        <div class="col-lg-6 align-center">
          <h3 class="heading mb-4 text-primary" data-aos="fade-up" data-aos-delay="100">
            {{ service1SubHeading }}
          </h3>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
            <p class="text-primary">
              Identify the local amenities which bring people to the neighbourhood
            </p>
            <ul class="list-unstyled ul-check primary text-primary">
              <li>Find the local amenities which are most loved by the community</li>
              <li>See how local parks and open spaces perform</li>
              <li>Download contact details of local businesses and organisation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
