<script setup>
import { themeColor, contactInfo } from "@/data/items";

const heading = "Get In Touch";
const subHeading = "Far from the countries Vokalia and Consonantia";
const contactInfoHeading = "Contact Information";
const buttonSendMessage = "Send Message";
const labels = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email Address",
  mobile: "Mobile",
  company: "Company",
  message: "Message",
};
</script>

<template>
  <div class="untree_co-section" id="contact-section">
    <div class="container">
      <div class="row mb-4" data-aos="fade-up" data-aos-delay="0">
        <div class="col-12 text-center">
          <h2 class="heading">{{ heading }}</h2>
          <p class="sub-heading">{{ subHeading }}</p>
        </div>
      </div>
      <div class="row content-row">
        <div class="col-lg-7">
          <form class="contact-form" data-aos="fade-up" data-aos-delay="100">
            <div class="row row-line">
              <div class="col-6">
                <div class="form-group">
                  <label class="" for="fname">{{ labels.firstName }}</label>
                  <input type="text" class="form-control" id="fname" />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="" for="lname">{{ labels.lastName }}</label>
                  <input type="text" class="form-control" id="lname" />
                </div>
              </div>
            </div>
            <div class="row row-line">
              <div class="col-6">
                <div class="form-group">
                  <label class="" for="mobile">{{ labels.mobile }}</label>
                  <input type="text" class="form-control" id="mobile" />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="" for="company">{{ labels.company }}</label>
                  <input type="text" class="form-control" id="company" />
                </div>
              </div>
            </div>
            <div class="form-group row-line">
              <label class="" for="email">{{ labels.email }}</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group row-line">
              <label class="" for="message">{{ labels.message }}</label>
              <textarea
                name=""
                class="form-control"
                id="message"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              :style="[
                { backgroundColor: themeColor },
              ]"
              style="margin-top: 24px;"
            >
              {{ buttonSendMessage }}
            </button>
          </form>
        </div>
        <div class="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
          <h3 class="h5 mb-4 text-primary">{{ contactInfoHeading }}</h3>
          <address class="text-primary d-flex">
            <span class="mt-1 me-2 icon-room"></span
            ><span>{{ contactInfo.address }}</span>
          </address>
          <ul class="list-unstyled ul-links mb-4">
            <li>
              <a :href="'tel://' + contactInfo.phone1" class="d-flex"
                ><span class="mt-1 me-2 icon-phone mr-2"></span
                ><span>{{ contactInfo.phone1 }}</span></a
              >
            </li>
            <li>
              <a :href="'tel://' + contactInfo.phone2" class="d-flex"
                ><span class="mt-1 me-2 icon-phone mr-2"></span
                ><span>{{ contactInfo.phone2 }}</span></a
              >
            </li>
            <li>
              <a :href="'mailto:' + contactInfo.email" class="d-flex"
                ><span class="mt-1 me-2 icon-envelope mr-2"></span
                ><span>{{ contactInfo.email }}</span></a
              >
            </li>
            <li>
              <a :href="[contactInfo.website]" target="_blank" class="d-flex"
                ><span class="mt-1 me-2 icon-globe mr-2"></span
                ><span>{{ contactInfo.website }}</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.untree_co-section{
  color: #242b6b;
  font-size: 18px;
}
.row.mb-4 {
  padding: 5rem 0;
}

.row-line {
  margin-bottom: 40px;
}

.content-row {
  display: flex;
  justify-content: space-between;
}

input {
  padding: 0;
}

.heading {
  color: #242b6b;
  font-size: 54px;
  font-weight: 700;
}

.list-unstyled li {
  margin-bottom: 16px;
}
.list-unstyled li a {
  color: #242b6b;
  text-decoration: none ;
}
</style>