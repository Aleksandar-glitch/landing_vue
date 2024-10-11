<script setup>
import peoplePhoto from "@/assets/images/platform-visitation.png";
import quesPhoto1 from "@/assets/images/platform-more-1.png";
import quesPhoto2 from "@/assets/images/platform-more-2.png";

const heading = "Learn More About The Tools";
const subHeading = "Successful neighbourhoods provide a diversity of amenities to support the local needs.";
const subHeadingQuestion = "TOOL: Amenities and Stakeholder Mapping";
const desc1 = "Having a wide offering of local amenities provides increased opportunities to attract local people to visit and stay in the neighbourhood.";
const desc2 = "Gaps in the amenity mix may indicate areas of improvement or further investment, while strengths may show the main reasons people visit the neighbourhood.";

</script>
<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
      <div class="heading">
        <h1 class="">{{ heading }}</h1>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-8 body-right">
          <h3 class="subheading-question">{{ subHeadingQuestion }}</h3>
          <div class="desc">
            <p><strong>{{ subHeading }}</strong></p>
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
              data-bs-target="#collapseMoreOne" aria-expanded="true" aria-controls="collapseMoreOne">
              <h3>What questions can I answer?</h3>
            </button>
          </h2>
          <div id="collapseMoreOne" class="accordion-collapse collapse">
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
              data-bs-target="#collapseMoreTwo" aria-expanded="false" aria-controls="collapseMoreTwo">
              <h3>Where does the data come from?</h3>
            </button>
          </h2>
          <div id="collapseMoreTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <p>Our system generates fine grain points of interest maps by aggregating crowdsourced data . Each
                place is
                classified using our proprietary lifestyle taxonomy to understand its role within local life.</p>
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
