<script setup>
import peoplePhoto from "@/assets/images/platform-hotspots.png";
import quesPhoto1 from "@/assets/images/platform-more-1.png";
import quesPhoto2 from "@/assets/images/platform-more-2.png";

const subHeadingQuestion = "TOOL: Activity Hotspots";
const desc = "Mobile phone movement data is harnessed monthly to plot where people spend time across a neighbourhood. Able to be filtered by time of day or week, this tool provides a sophisticated understanding of local dwell patterns across the country.";

</script>
<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 body-right">
          <h3 class="subheading-question">{{ subHeadingQuestion }}</h3>
          <div class="desc">
            <p>{{ desc }}</p>
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
              data-bs-target="#collapseHotspotsOne" aria-expanded="true" aria-controls="collapseHotspotsOne">
              <h3>What questions can I answer?</h3>
            </button>
          </h2>
          <div id="collapseHotspotsOne" class="accordion-collapse collapse">
            <div class="accordion-body">
              <p>What is the amenity mix?</p>
              <div class="question-wrapper">
                <div class="question-img">
                  <img :src="quesPhoto1" alt="Image" style="width: 100%;" />
                </div>
              </div>
              <p>Where are the amenity gaps?</p>
              <p>What is the day time vs night time economy?</p>
              <p>What amenities are trading on week day vs weekends?</p>
              <p>What are the most important places and stakeholders?</p>
              <div class="question-wrapper">
                <div class="question-img">
                  <img :src="quesPhoto2" alt="Image" style="width: 100%;" />
                </div>
              </div>
              <p>Who are the true local stakeholders?</p>
              <p>What are the most valued community groups for our community strategy?</p>
              <p>Who influences the local community?</p>
              <p>How can I contact them?</p>
              <p>What might be some of the social issues in this neighbourhood?</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseHotspotsTwo" aria-expanded="false" aria-controls="collapseHotspotsTwo">
              <h3>Where does the data come from?</h3>
            </button>
          </h2>
          <div id="collapseHotspotsTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <p>Mobile phone presence data is a vast resource for tracking the way people move through and around a
                neighbourhood. Careful cleaning and examining makes it possible to reveal the nuances of dwell
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
