<script setup>
import logoImg from "../assets/images/logo.svg";

const service1SubHeading = "Examine local walkability";

const socialItems = [
  {
    link: "https://www.instagram.com/",
    icon: "icon-instagram",
  },
  {
    link: "https://www.twitter.com/",
    icon: "icon-twitter",
  },
  {
    link: "https://www.facebook.com/",
    icon: "icon-facebook",
  },
  {
    link: "https://www.linkedin.com/",
    icon: "icon-linkedin",
  },
  {
    link: "https://www.pinterest.com/",
    icon: "icon-pinterest",
  },
];
</script>
<template>
  <div class="untree_co-section" id="footer-section">
    <div class="container">
          <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
            <img :src="logoImg" alt="Image" style="max-width: 340px;" />
          </div>
      <div class="row justify-content-between">
        <div class="col-lg-5 align-center">
          <span class="mb-4 footer-context" data-aos="fade-up" data-aos-delay="100">
            Get free monthly neighbourhood insights
          </span>
          <div class="mb-4 site-footer" data-aos="fade-up" data-aos-delay="200">
            
          <div class="widget">
            <ul class="list-unstyled social">
              <li style="margin-right: 8px">
                <a :href="socialItems[0].link"
                  ><span :class="socialItems[0].icon"></span
                ></a>
              </li>
              <li style="margin-right: 8px">
                <a :href="socialItems[1].link"
                  ><span :class="socialItems[1].icon"></span
                ></a>
              </li>
              <li style="margin-right: 8px">
                <a :href="socialItems[2].link"
                  ><span :class="socialItems[2].icon"></span
                ></a>
              </li>
              <li style="margin-right: 8px">
                <a :href="socialItems[3].link"
                  ><span :class="socialItems[3].icon"></span
                ></a>
              </li>
              <li>
                <a :href="socialItems[4].link"
                  ><span :class="socialItems[4].icon"></span
                ></a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div class="col-lg-3 align-center"></div>
        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="400">
          <div class="footer-right">
            <a href="#"><span>Pricing</span></a>
            <a href="#"><span>Book a Call</span></a>
            <a href="#"><span>Platform</span></a>
            <a href="#"><span>Resouces</span></a>
            <a href="#"><span>Terms & Conditions</span></a>
            <a href="#"><span>Privacy Policy</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
