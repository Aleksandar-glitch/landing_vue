<script setup>
import investorsPhoto from "@/assets/images/platform-community.png";

const service1SubHeading = "Powered by unique community data sets";

</script>
<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6 left-col">
          <h3 class="heading mb-4 text-primary" data-aos="fade-up" data-aos-delay="100">
            {{ service1SubHeading }}
          </h3>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
            <p class="text-body text-primary">
              Our proprietary data sets were built by placemakers for placemakers, to help you measure what matters
              across any Australian neighbourhood.
            </p>
            <a href="#" class="">Learn more about our data</a>
          </div>
          <div class="mb-4 row" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-5 static-part">
              <div class="static-num">>10m</div>
              <div class="static-desc">unique devices <br />monthly</div>
            </div>
            <div class="col-lg-5 static-part">
              <div class="static-num">100,000+</div>
              <div class="static-desc">data points <br />per location
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <img :src="investorsPhoto" alt="Image" style="width: 100%;" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-body {
  font-size: 18px;
}

.left-col {
  text-align: center;
}

.left-col div a {
  color: #242b6b;
  text-decoration: underline;
  font-size: 18px;
}

.static-num {
  color: #4952be;
  font-size: 70px;
  font-weight: 600;
  font-family: Sora, sans-serif;
  line-height: 1.139em;
}

.static-desc{
  color: #000000;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  font-family: Sora, sans-serif;
}
</style>