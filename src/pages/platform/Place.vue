<script setup>
import peoplePhoto from "@/assets/images/platform-place.png";

const subHeading = "Stakeholder mapping";
const subHeadingQuestion = "Who are the most important local organiations?";
const desc = "Great community management requires a strong relationship with local stakeholders. Key local organisations are identified and mapped.";
const contentHeading = "Answer questions like:";
const question1 = "Who are the most influential community stakeholders?";
const question2 = "Which stakeholders will be impacted by my project?";
const question3 = "How can I contact these stakeholders?";
const question4 = "How can I contact these stakeholders?";

</script>
<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
      <div class="heading">
        <h1 class="">How do place managers <br />use Propedia? </h1>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="400">
          <img :src="peoplePhoto" alt="Image" style="width: 100%;" />
        </div>
        <div class="col-lg-5 body-right">
          <h3 class="mb-4 text-primary" data-aos="fade-up" data-aos-delay="100">
            {{ subHeading }}
          </h3>
          <div class="subheading-question">{{ subHeadingQuestion }}</div>
          <div class="desc">{{ desc }}</div>
          <div class="mb-4 bg-light" data-aos="fade-up" data-aos-delay="200">
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading {
  display: flex;
  justify-content: center;
}

.heading h1 {
  text-align: center;
  color: #242b6b;
  font-size: 54px;
  font-weight: 700;
}

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
