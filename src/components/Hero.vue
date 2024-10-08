<script setup>
import mainPhoto from "../assets/images/hero.png";
import { themeColor } from "../data/items";

const heroHeading1 = "Lifestyle insights for ";
const heroHeading2 = "any location";
const buttonStartFree = "Start Free";
const buttonViewPricing = "View pricing";
</script>

<template>
  <div class="untree_co-hero" id="home-section">
    <div class="container">
      <div class="row align-items-center" id="hero-part">
        <div class="col-12">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <h1 class="heading  text-primary" data-aos="fade-up" data-aos-delay="0">
                {{ heroHeading1 }}
                <span class="heading  text-primary-plum">{{ heroHeading2 }}</span>
              </h1>
              <div class="excerpt text-primary" data-aos="fade-up" data-aos-delay="100">
                <p>
                  Unprecedented visibility into the community around your asset,
                  <strong>every month</strong>
                </p>
              </div>
              <p data-aos="fade-up" data-aos-delay="200">
                <a href="#features-section" class="btn btn-primary smoothscroll" style="margin-right: 5px">{{
                  buttonStartFree }}</a>
                <a href="#pricing-section" class="btn btn-outline-primary smoothscroll pricing">{{ buttonViewPricing
                  }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="" id="hero-img" data-aos="fade-right" data-aos-delay="400">
      <img :src="mainPhoto" alt="Image" style="width: 100%;" />
    </div>
  </div>
</template>

<style scoped>
.pricing:hover {
  color: #fff !important;
}
</style>
