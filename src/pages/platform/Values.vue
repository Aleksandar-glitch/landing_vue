<script setup>
import peoplePhoto from "@/assets/images/platform-values.png";
import quesPhoto1 from "@/assets/images/platform-values-1.png";
import quesPhoto2 from "@/assets/images/platform-values-2.png";

const subHeadingQuestion = "TOOL: Lifestyle Values";
const desc1 = "By examining local chatter at a neighbourhood level it is possible to gain insight into how people love to socialise, where they love to spend time, and what activities they love to spend time doing.";
const desc2 = "The way local people talk about their lives, and what they choose to post online about their experiences is a key indicator of local values.";

</script>
<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 body-right">
          <h3 class="subheading-question">{{ subHeadingQuestion }}</h3>
          <div class="desc">
            <p>{{ desc1 }}</p>
            <p>{{ desc2 }}</p>
          </div>
        </div>
        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="400">
          <img :src="peoplePhoto" alt="Image" style="width: 100%;" />
        </div>
      </div>
      <div class="accordion questions" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseValuesOne" aria-expanded="true" aria-controls="collapseValuesOne">
              <h3>What questions can I answer?</h3>
            </button>
          </h2>
          <div id="collapseValuesOne" class="accordion-collapse collapse">
            <div class="accordion-body">
              <p>How do people love to spend their time?</p>
              <p>What activities do people value?</p>
              <p>How do people socially connect?</p>
              <p>What local places do people love?</p>
              <div class="question-wrapper">
                <div class="question-img">
                  <img :src="quesPhoto1" alt="Image" style="width: 100%;" />
                  <img :src="quesPhoto2" alt="Image" style="width: 100%;" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseValuesTwo" aria-expanded="false" aria-controls="collapseValuesTwo">
              <h3>Where does the data come from?</h3>
            </button>
          </h2>
          <div id="collapseValuesTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <p>Social media is full of chatter about the things people want their friends to know they did. This
                ‘bias’ reveals the shared lifestyle values across a neighbourhood in the previous 30 days.
              </p>
            </div>
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

.justify-content-between {
  padding-top: 60px;
}

.body-right {
  margin-top: 12px;
}

.subheading-question {
  color: #4952be;
  text-align: left;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 300;
}

.desc p {
  color: #242b6b;
  font-family: Sora, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.667em;
  margin-bottom: 16px;
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

.questions h3 {
  color: #242b6b;
  font-family: Sora, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.667em;
  margin-bottom: 16px;
}

.question-wrapper {
  display: flex;
  justify-content: center;
}

.question-img {
  max-width: 1024px;
}

.questions span,
p {
  color: #242b6b;
  font-size: 18px;
}
</style>
