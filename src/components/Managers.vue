<script setup>
import manager1 from "../assets/images/manager_1.png";
import manager2 from "../assets/images/manager_2.png";
import manager3 from "../assets/images/manager_3.png";
import manager4 from "../assets/images/manager_4.png";
import manager5 from "../assets/images/manager_5.png";

const service1SubHeading = "Find your accessible visitors";

</script>
<template>
  <div class="untree_co-section bg-light" id="manager-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-4 align-center">
          <span>Trusted by Australia's most</span>
          <br/>
          <span>successful place managers</span>
        </div>
        <div class="col-lg-8 manager-imgs" data-aos="fade-right" data-aos-delay="400">
          <div>
            <img :src="manager1" alt="Image" style="width: 100%;" />
          </div>
          <div>
            <img :src="manager2" alt="Image" style="width: 100%;" />
          </div>
          <div>
          <img :src="manager3" alt="Image" style="width: 100%;" />
          </div>
          <div>
          <img :src="manager4" alt="Image" style="width: 100%;" />
          </div>
          <div>
          <img :src="manager5" alt="Image" style="width: 100%;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
