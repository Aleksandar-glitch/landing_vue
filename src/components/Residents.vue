<script setup>
import residentsPhoto from "../assets/images/residents.png";

const service1SubHeading = "Get to know your local residents";

</script>
<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <img :src="residentsPhoto" alt="Image" style="width: 100%;" />
        </div>
        <div class="col-lg-6 align-center">
          <h3 class="heading mb-4 text-primary" data-aos="fade-up" data-aos-delay="100">
            {{ service1SubHeading }}
          </h3>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
            <p class="text-primary">
              Tap into local social chatter to uncover what locals love about their lives
            </p>
            <ul class="list-unstyled ul-check primary text-primary">
              <li>Identify locals’ favourite local activities</li>
              <li>Which local places do people love the most?</li>
              <li>See which lifestyle topics are unique to your local neighbourhood</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
