<script setup>
import { themeColor } from "@/data/items";
const heading = "One Convenient Platform";
import img1 from "@/assets/images/platform-convenient-1.png";
import img2 from "@/assets/images/platform-convenient-2.png";
import img3 from "@/assets/images/platform-convenient-3.png";
import img4 from "@/assets/images/platform-convenient-4.png";
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
  <div class="untree_co-section" id="pricing-section">
    <div class="container">
      <div class="row pricing-title">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="tools-heading text-primary">{{ heading }}</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <div class="row">
            <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div class="inner-container">
                <div class="img-wrapper">
                  <img :src="img1" alt="Image" class="img-fluid" />
                </div>
                <div class="div-block">
                  <h3 class="heading-1 text-primary">Unique people data</h3>
                  <p class="text-primary">Proprietary people and behavioural data to give you actionable customer and
                    location insights you can't get anywhere else.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div class="inner-container">
                <div class="img-wrapper">
                  <img :src="img2" alt="Image" class="img-fluid" />
                </div>
                <div class="div-block">
                  <h3 class="heading-1 text-primary">Benchmarks and Indicators</h3>
                  <p class="text-primary">Benchmark and compare suburbs, identify new competitive advantages and pin
                    point development opportunities.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div class="inner-container">
                <div class="img-wrapper">
                  <img :src="img3" alt="Image" class="img-fluid" />
                </div>
                <div class="div-block">
                  <h3 class="heading-1 text-primary">Discover national suburb data</h3>
                  <p class="text-primary">Explore and compare the way people visit, gather and move around for any
                    suburb.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div class="inner-container">
                <div class="img-wrapper">
                  <img :src="img4" alt="Image" class="img-fluid" />
                </div>
                <div class="div-block">
                  <h3 class="heading-1 text-primary">Deep-dive into hyper-local insights</h3>
                  <p class="text-primary">Uncover lifestyle trends, customer insights and amenity needs with a 20 minute
                    walk of any site.</p>
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
  font-size: 50px;
  font-weight: 700;
}

.img-wrapper img {
  border-radius: 24px;
}

.div-block {
  margin: 20px;
  text-align: center;
}

.heading-1 {
  margin: 20px 0;
}

.heading-2 {}

.div-block p {
  font-size: 18px;
}

.btn-tools {
  display: flex;
  justify-content: center;
  margin: 32px;
}
</style>