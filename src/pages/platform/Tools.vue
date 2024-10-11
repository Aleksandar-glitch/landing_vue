<script setup>
import { themeColor } from "@/data/items";
const heading = "Our tools";
import tools1 from "@/assets/images/platform-tools-1.png";
import tools2 from "@/assets/images/platform-tools-2.png";
import tools3 from "@/assets/images/platform-tools-3.png";
const packages = [
  {
    name: "Free",
    price: "0",
  },
  {
    name: "Standard",
    price: "19.99",
  },
  {
    name: "Premium",
    price: "79.99",
  },
];
</script>
<template>
  <div class="untree_co-section bg-light" id="pricing-section">
    <div class="container">
      <div class="row pricing-title">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="tools-heading text-primary">{{ heading }}</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <div class="row">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="inner-container">
                <div class="img-wrapper">
                  <img :src="tools1" alt="Image" class="img-fluid" />
                </div>
                <div class="div-block">
                  <h3 class="heading-2 text-primary">Visitation Analytics</h3>
                  <p class="text-primary"> Utilise monthly movement results to understand the visitation patterns in and
                    around your location. Compare locations, and track change over time.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="inner-container">
                <div class="img-wrapper">
                  <img :src="tools2" alt="Image" class="img-fluid" />
                </div>
                <div class="div-block">
                  <h3 class="heading-2 text-primary">Top Local Attractions</h3>
                  <p class="text-primary">Find the local attractions and businesses that bring people to the
                    neighbourhood. Spot strengths and gaps, and understand how the offer differs in evenings or
                    weekends.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="inner-container">
                <div class="img-wrapper">
                  <img :src="tools3" alt="Image" class="img-fluid" />
                </div>
                <div class="div-block">
                  <h3 class="heading-2 text-primary">Exposure Hotspots</h3>
                  <p class="text-primary">Access instant dwell mapping for any Australian suburb, to see where people
                    spend time across a neighbourhood, and how this changes across the day and week.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col btn-tools">
              <a href="#" class="btn btn-primary" :style="[
                { backgroundColor: themeColor },
              ]">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tools-heading {
  font-size: 70px;
  font-weight: 700;
}

.inner-container {
  border: 1px solid #d3d3d3;
  border-radius: 24px;
}

.img-wrapper img {
  border-radius: 24px;
}

.div-block {
  margin: 20px;
  text-align: center;
}

.heading-1 {
  margin: 40px 0;
}

.heading-2 {
  margin-top: 40px;
}

.div-block p {
  font-size: 18px;
}

.btn-tools {
  display: flex;
  justify-content: center;
  margin: 32px;
}
</style>