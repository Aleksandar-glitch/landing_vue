<script setup>
import mainPhoto from "@/assets/images/platform_hero.png";

const heroHeading1 = "Instant community research for ";
const heroHeading2 = "any place";
const buttonStartFree = "Start Free";
const buttonViewPricing = "View pricing";
</script>

<template>
  <div class="untree_co-hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h1 class="heading  text-primary" data-aos="fade-up" data-aos-delay="0">
                {{ heroHeading1 }}
                <span class="heading  text-primary-plum">{{ heroHeading2 }}</span>
              </h1>
              <div class="excerpt text-primary" data-aos="fade-up" data-aos-delay="100">
                <p>
                  Get started now to join Australia's leading place managers in accelerating community research and
                  reporting.
                </p>
                <p>
                  <strong>No set up required. Create your account today to access instant reports</strong>
                </p>
              </div>
              <p data-aos="fade-up" data-aos-delay="200">
                <a href="#features-section" class="btn btn-primary smoothscroll" style="margin-right: 5px">{{
                  buttonStartFree }}</a>
                <a href="#pricing-section" class="btn btn-outline-primary smoothscroll pricing">{{ buttonViewPricing
                  }}</a>
              </p>
            </div>
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="400">
              <img :src="mainPhoto" alt="Image" style="width: 100%;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-size: 18px;
}
.pricing:hover {
  color: #fff !important;
}
</style>
