<script setup>
import peoplePhoto from "@/assets/images/platform-mapping.png";
import quesPhoto1 from "@/assets/images/platform-mapping-1.png";
import quesPhoto2 from "@/assets/images/platform-mapping-2.png";

const subHeadingQuestion = "TOOL: Visitation Mapping";
const desc1 = "Digital presence data is used to determine the ‘home’ location of visitors to the subject neighbourhood and map the surrounding suburbs that local residents visit when the leave the subject neighbourhood. This analysis is undertaken at a catchment of 25km.";
const desc2 = "Understanding where visitors to a neighbourhood come from can highlight the attractors to a neighbourhood. Understanding where residents go can highlight amenity gaps allowing you to uncover opportunities to strengthen the catchment area or development.";

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
              data-bs-target="#collapseMappingOne" aria-expanded="true" aria-controls="collapseMappingOne">
              <h3>What questions can I answer?</h3>
            </button>
          </h2>
          <div id="collapseMappingOne" class="accordion-collapse collapse">
            <div class="accordion-body">
              <p>Where do visitors to the neighbourhood come from?</p>
              <p>Where do residents from the neighbourhood visit?</p>
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
              data-bs-target="#collapseMappingTwo" aria-expanded="false" aria-controls="collapseMappingTwo">
              <h3>Where does the data come from?</h3>
            </button>
          </h2>
          <div id="collapseMappingTwo" class="accordion-collapse collapse">
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
