<script setup>
import peoplePhoto from "@/assets/images/platform-accessibility.png";
import quesPhoto1 from "@/assets/images/platform-accessibility-1.png";

const subHeadingQuestion = "TOOL: Accessibility";
const desc1 = "By examining the geography that can be reached within a short walk or short drive of the neighbourhood’s centre, you can understand who the people are who are likely to utilise your neighbourhood.";
const desc2 = "Understanding the age breakdown of your neighbourhood is critical to inform amenity planning. Neighbourhoods that have a higher proportion of pre-school aged children will utilise open spaces differently to those with a higher proportion of high-school aged children. Or neighbourhoods with a lower proportion of working aged residents compared to those of retirement age may rely differently on local community services.";

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
              data-bs-target="#collapseAccessibilityOne" aria-expanded="true" aria-controls="collapseAccessibilityOne">
              <h3>What questions can I answer?</h3>
            </button>
          </h2>
          <div id="collapseAccessibilityOne" class="accordion-collapse collapse">
            <div class="accordion-body">
              <p>Who are the people that are likely to utilise the neighbourhood?</p>
              <p>What is the age breakdown?</p>
              <p>Who can access my neighbourhood within a short walk or short drive?</p>
              <p>What can residents easily access on foot?</p>
              <div class="question-wrapper">
                <div class="question-img">
                  <img :src="quesPhoto1" alt="Image" style="width: 100%;" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseAccessibilityTwo" aria-expanded="false" aria-controls="collapseAccessibilityTwo">
              <h3>Where does the data come from?</h3>
            </button>
          </h2>
          <div id="collapseAccessibilityTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <p>Mobile phone presence data is a vast resource for tracking the way people move through and around a
                neighbourhood. Careful cleaning and examining makes it possible to reveal the nuances of visitation
                behaviours across a neighbourhood.
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
