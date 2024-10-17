<script setup>
import { themeColor, contactInfo } from "@/data/items";

const heading = "Pricing";
const subHeading1 = "Access nationwide lifestyle data instantly.";
const subHeading2 = "Our per-seat pricing gives you flexibility to choose the level you need.";
const subHeading3 = "Upgrade any time.";
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
          <h2 class="heading">
            <span>{{ heading }}</span>
          </h2>
          <span class="sub-heading">{{ subHeading1 }}</span><br />
          <span class="sub-heading">{{ subHeading2 }}</span><br />
          <span class="sub-heading">{{ subHeading3 }}</span>
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
              <textarea name="" class="form-control" id="message" cols="30" rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" :style="[
              { backgroundColor: themeColor },
            ]" style="margin-top: 24px;">
              {{ buttonSendMessage }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.untree_co-section {
  color: #242b6b;
  background: #ededed;
  font-size: 18px;
  line-height: 1.667em;
}

.heading span{
  font-size: 70px;
  font-weight: 700;
  background: url("../images/tools-underline.svg");
  margin-left: -.275em;
  margin-right: -.275em;
  padding-bottom: 14px;
  padding-left: 15px;
  padding-right: 15px;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: scroll;
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
  text-decoration: none;
}
</style>