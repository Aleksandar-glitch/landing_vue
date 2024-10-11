<script setup>
import peoplePhoto from "@/assets/images/platform-demographic.png";

const subHeading = "Demographic & Housing Insights";
const subHeadingQuestion = "Who lives here? What are the housing trends?";
const desc = "Deep dive into the demographic and household profile of the area to understand the makeup of the area. Use this to accelerate your feasibility process and and uncover new development opportunities.";
const contentHeading = "Answer questions like:";
const question1 = "What are the trends in rental and mortgage prices?";
const question2 = "Whats the proportion of home ownership vs rental?";
const question3 = "What is the household size?";
const question4 = "Where are the suburbs where people live alone?";

</script>
<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5 body-right">
          <h3 class="mb-4 text-primary" data-aos="fade-up" data-aos-delay="100">
            {{ subHeading }}
          </h3>
          <div class="subheading-question">{{ subHeadingQuestion }}</div>
          <div class="desc">{{ desc }}</div>
          <div class="mb-4 bg-light" data-aos="zoom-in" data-aos-delay="200">
            <p class="content-heading text-primary">
              <strong>{{ contentHeading }}</strong>
            </p>
            <ul class="list-unstyled ul-check primary text-primary">
              <li>{{ question1 }}</li>
              <li>{{ question2 }}</li>
              <li>{{ question3 }}</li>
              <li>{{ question4 }}</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">
          <img :src="peoplePhoto" alt="Image" style="width: 100%;" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-right {
  margin-top: 60px;
}

.body-right h3 {
  font-size: 2.3rem;
  margin-bottom: 12px;
}

.subheading-question {
  color: #4952be;
  text-align: left;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 300;
}

.desc {
  color: #242b6b;
  font-family: Sora, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.667em;
  margin-bottom: 40px;
}

.bg-light {
  border-radius: 20px;
  padding: 15px 10px 10px;
}

.content-heading strong {
  font-size: 18px;
}

.ul-check li {
  font-size: 18px;
  font-weight: 400;

}
</style>
